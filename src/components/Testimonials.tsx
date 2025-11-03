import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {

  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            הם כבר מרוויחים כסף{" "}
            <span className="text-primary">אמיתי</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            תראה בעצמך מה התלמידים שלנו משיגים
          </p>
        </div>

        {/* WhatsApp Testimonials - Screenshot Placeholders */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">הוכחות חברתיות מתלמידים</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i}
                className="bg-card rounded-xl overflow-hidden border border-border shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[9/16] bg-muted flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-3">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.67-.34-3.82-.93l-.27-.15-2.91.49.49-2.91-.15-.27A7.93 7.93 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground px-4">צילום מסך WhatsApp #{i}</p>
                    <p className="text-xs text-muted-foreground mt-2 px-4">מקום להוספת תמונה</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue & Campaign Proofs - Image Placeholders */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">תוצאות אמיתיות מהשטח</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "הכנסות מקמפיינים", desc: "צילום מסך של תוצאות" },
              { title: "ROI של קמפיינים", desc: "צילום מסך של תוצאות" },
              { title: "סרטונים ויראליים", desc: "צילום מסך של תוצאות" },
            ].map((proof, i) => (
              <div 
                key={i}
                className="bg-card rounded-xl overflow-hidden border-2 border-primary/30 shadow-card hover:shadow-glow transition-all duration-300"
              >
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg mb-2">{proof.title}</h4>
                    <p className="text-sm text-muted-foreground">{proof.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Viral Videos Carousel - MOVED UP */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">סרטונים שהתפוצצו ברשת</h3>
          <div className="max-w-4xl mx-auto px-12">
            <Carousel 
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                    <div className="bg-card rounded-xl overflow-hidden border-2 border-primary/30 shadow-card hover:shadow-glow transition-all duration-300">
                      <div className="aspect-square bg-muted flex items-center justify-center relative">
                        <div className="absolute top-4 right-4 bg-destructive/90 text-destructive-foreground px-3 py-1 rounded-full text-xs font-bold z-10">
                          🔥 VIRAL
                        </div>
                        <div className="text-center p-6">
                          <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-3">
                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <p className="text-sm font-bold text-foreground">סרטון ויראלי #{i}</p>
                          <p className="text-xs text-muted-foreground mt-1">מקום להוספת תמונה</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="right-0" />
              <CarouselNext className="left-0" />
            </Carousel>
          </div>
        </div>

        {/* Edited Videos Section - MOVED DOWN with special layout */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">סרטונים ערוכים לדוגמא - ככה תדע לערוך</h3>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Left - Vertical Video */}
              <div className="bg-card rounded-xl overflow-hidden border border-border shadow-card hover:shadow-glow transition-all duration-300">
                <div className="aspect-[9/16] bg-muted flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-sm font-bold">סרטון לאורך</p>
                    <p className="text-xs text-muted-foreground mt-1">9:16 - Stories/Reels</p>
                  </div>
                </div>
              </div>

              {/* Center - Horizontal Video (larger) */}
              <div className="bg-card rounded-xl overflow-hidden border-2 border-primary/30 shadow-card hover:shadow-glow transition-all duration-300">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-base font-bold">סרטון לרוחב</p>
                    <p className="text-sm text-muted-foreground mt-2">16:9 - YouTube/Desktop</p>
                  </div>
                </div>
              </div>

              {/* Right - Vertical Video */}
              <div className="bg-card rounded-xl overflow-hidden border border-border shadow-card hover:shadow-glow transition-all duration-300">
                <div className="aspect-[9/16] bg-muted flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-sm font-bold">סרטון לאורך</p>
                    <p className="text-xs text-muted-foreground mt-1">9:16 - Stories/Reels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
