import MetaPixel from "@/components/MetaPixel";

const ThankYou = () => {
  return (
    <>
      <MetaPixel />
      <div className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center justify-center">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              תודה על ההרשמה! 🎉
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
              נחזור אליך בהקדם
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
