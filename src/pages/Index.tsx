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
        </div>
      </footer>
    </div>
  );
};

export default Index;
