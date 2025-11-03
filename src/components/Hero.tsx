import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            הפוך למומחה{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              שיווק דיגיטלי
            </span>
            <br />
            תוך 30 יום
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            הכשרה מקצועית מלאה שתלמד אותך את כל האספקטים בעולם השיווק הדיגיטלי - 
            מקמפיינים רווחיים, דרך עריכת וידאו מקצועית, ועד להגעה למליוני צפיות
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 font-bold"
              onClick={scrollToForm}
            >
              אני רוצה להצטרף להכשרה!
            </Button>
          </div>

          {/* VSL Video Section */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-glow border-2 border-primary/30 bg-card">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-muted-foreground">הכנס כאן את קישור הוידאו VSL שלך</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
