import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Syllabus from "@/components/Syllabus";
import About from "@/components/About";
import LeadForm from "@/components/LeadForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Testimonials />
      <Syllabus />
      <About />
      <LeadForm />
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 הכשרת שיווק דיגיטלי - כל הזכויות שמורות
          </p>
          <div className="flex items-center justify-center gap-4 mt-3">
            <a 
              href="/accessibility" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
            >
              הצהרת נגישות
            </a>
            <a 
              href="/admin/leads" 
              className="text-xs text-muted-foreground/30 hover:text-muted-foreground/50 transition-colors"
            >
              •
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
