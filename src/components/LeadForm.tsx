import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const LeadForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim()) {
      toast({
        title: "שגיאה",
        description: "נא למלא את כל השדות",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "תודה רבה!",
        description: "הפרטים נשלחו בהצלחה. ניצור איתך קשר בקרוב!",
      });
      setName("");
      setPhone("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="lead-form" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* CTA Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              מוכן להתחיל{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                להרוויח?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              השאר פרטים ונחזור אליך עם כל המידע על ההכשרה
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-card rounded-2xl p-8 md:p-12 border-2 border-primary/30 shadow-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-2">
                  שם מלא
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="איך קוראים לך?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-14 text-lg bg-background/50 border-2 border-border focus:border-primary transition-colors"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold mb-2">
                  מספר טלפון
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="050-1234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-14 text-lg bg-background/50 border-2 border-border focus:border-primary transition-colors"
                  dir="ltr"
                  disabled={isSubmitting}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-16 text-xl font-black bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? "שולח..." : "כן! אני רוצה להצטרף 🚀"}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                המידע שלך מאובטח ולא יועבר לצדדים שלישיים
              </p>
            </form>
          </div>

          {/* Additional CTAs */}
          <div className="mt-12 grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-card/50 rounded-lg p-4 border border-primary/20">
              <p className="text-2xl mb-1">⚡</p>
              <p className="text-sm font-bold">תוצאות מהירות</p>
            </div>
            <div className="bg-card/50 rounded-lg p-4 border border-primary/20">
              <p className="text-2xl mb-1">💰</p>
              <p className="text-sm font-bold">החזר השקעה מובטח</p>
            </div>
            <div className="bg-card/50 rounded-lg p-4 border border-primary/20">
              <p className="text-2xl mb-1">🎯</p>
              <p className="text-sm font-bold">ליווי אישי</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
