import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface Lead {
  id: string;
  name: string;
  phone: string;
  status: string;
  notes: string | null;
  created_at: string;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingNotes, setEditingNotes] = useState<{ [key: string]: string }>({});
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user) {
      const isAdmin = await checkAdminRole(session.user.id);
      setIsAuthenticated(isAdmin);
      if (isAdmin) {
        fetchLeads();
      } else {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const checkAdminRole = async (userId: string): Promise<boolean> => {
    const { data, error } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', userId)
      .eq('role', 'admin')
      .single();

    return !error && !!data;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.user) {
        const isAdmin = await checkAdminRole(data.user.id);
        if (isAdmin) {
          setIsAuthenticated(true);
          fetchLeads();
          toast({
            title: "התחברת בהצלחה",
            description: "ברוך הבא לפאנל הניהול",
          });
        } else {
          await supabase.auth.signOut();
          toast({
            title: "אין הרשאה",
            description: "אין לך הרשאות מנהל",
            variant: "destructive",
          });
        }
      }
    } catch (error: any) {
      toast({
        title: "שגיאה בהתחברות",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchLeads = async () => {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setLeads(data || []);
    } catch (error: any) {
      toast({
        title: "שגיאה בטעינת לידים",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateNotes = async (id: string, notes: string) => {
    try {
      const { error } = await supabase
        .from('leads')
        .update({ notes })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "הערות עודכנו",
        description: "ההערות נשמרו בהצלחה",
      });
      fetchLeads();
    } catch (error: any) {
      toast({
        title: "שגיאה בעדכון הערות",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('leads')
        .update({ status })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "סטטוס עודכן",
        description: "הסטטוס עודכן בהצלחה",
      });
      fetchLeads();
    } catch (error: any) {
      toast({
        title: "שגיאה בעדכון סטטוס",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const exportToCSV = () => {
    const headers = ['שם', 'טלפון', 'סטטוס', 'הערות', 'תאריך יצירה'];
    const csvContent = [
      headers.join(','),
      ...leads.map(lead => [
        lead.name,
        lead.phone,
        lead.status,
        lead.notes || '',
        new Date(lead.created_at).toLocaleDateString('he-IL')
      ].join(','))
    ].join('\n');

    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `leads_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">טוען...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">התחברות למנהל</CardTitle>
            <CardDescription className="text-center">
              היכנס עם פרטי המנהל שלך
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="אימייל"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="סיסמה"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                התחבר
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => navigate('/')}
              >
                חזרה לדף הבית
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">ניהול לידים</h1>
          <div className="flex gap-2">
            <Button onClick={exportToCSV} variant="outline">
              ייצא ל-CSV
            </Button>
            <Button onClick={() => navigate('/')} variant="outline">
              חזרה לדף הבית
            </Button>
            <Button
              onClick={async () => {
                await supabase.auth.signOut();
                setIsAuthenticated(false);
              }}
              variant="destructive"
            >
              התנתק
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>כל הלידים ({leads.length})</CardTitle>
            <CardDescription>
              ניהול ומעקב אחר כל הלידים שהתקבלו מהטופס
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>שם</TableHead>
                    <TableHead>טלפון</TableHead>
                    <TableHead>סטטוס</TableHead>
                    <TableHead>הערות</TableHead>
                    <TableHead>תאריך</TableHead>
                    <TableHead>פעולות</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leads.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell className="font-medium">{lead.name}</TableCell>
                      <TableCell>
                        <a href={`tel:${lead.phone}`} className="text-primary hover:underline">
                          {lead.phone}
                        </a>
                      </TableCell>
                      <TableCell>
                        <select
                          value={lead.status}
                          onChange={(e) => updateStatus(lead.id, e.target.value)}
                          className="border rounded px-2 py-1"
                        >
                          <option value="new">חדש</option>
                          <option value="contacted">יצרנו קשר</option>
                          <option value="converted">הומר</option>
                          <option value="not_interested">לא מעוניין</option>
                        </select>
                      </TableCell>
                      <TableCell>
                        <Textarea
                          value={editingNotes[lead.id] ?? lead.notes ?? ''}
                          onChange={(e) => setEditingNotes({ ...editingNotes, [lead.id]: e.target.value })}
                          placeholder="הוסף הערות..."
                          className="min-h-[60px]"
                        />
                      </TableCell>
                      <TableCell>
                        {new Date(lead.created_at).toLocaleDateString('he-IL', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          onClick={() => updateNotes(lead.id, editingNotes[lead.id] ?? lead.notes ?? '')}
                        >
                          שמור הערות
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
