const About = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              מי אני{" "}
              <span className="text-primary">ולמה להאמין לי?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image placeholder */}
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary/30 shadow-glow bg-muted">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">הכנס תמונה שלך כאן</p>
                    </div>
                  </div>
                </div>
                {/* Decorative badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 rounded-full font-bold shadow-glow">
                  ✓ מומחה שיווק
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  שלום! אני <span className="font-bold text-primary">[השם שלך]</span>, 
                  מומחה שיווק דיגיטלי עם למעלה מ-5 שנות ניסיון בתחום.
                </p>
                <p className="text-lg leading-relaxed">
                  במהלך הקריירה שלי הובלתי מאות קמפיינים מצליחים, 
                  עבדתי עם עשרות עסקים וסייעתי להם להגיע למיליוני לקוחות חדשים.
                </p>
                <p className="text-lg leading-relaxed">
                  היום, לאחר שבניתי מערכות שיווק מנצחות לעצמי ולאחרים, 
                  אני כאן כדי להעביר הלאה את כל הידע והניסיון שרכשתי - 
                  בצורה הכי ישירה והכי מעשית שיש.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-card/50 rounded-lg p-4 border border-primary/20">
                  <p className="text-3xl font-black text-primary mb-1">500+</p>
                  <p className="text-sm text-muted-foreground">קמפיינים מוצלחים</p>
                </div>
                <div className="bg-card/50 rounded-lg p-4 border border-primary/20">
                  <p className="text-3xl font-black text-primary mb-1">100M+</p>
                  <p className="text-sm text-muted-foreground">צפיות בסרטונים</p>
                </div>
                <div className="bg-card/50 rounded-lg p-4 border border-primary/20">
                  <p className="text-3xl font-black text-primary mb-1">300+</p>
                  <p className="text-sm text-muted-foreground">תלמידים מרוצים</p>
                </div>
                <div className="bg-card/50 rounded-lg p-4 border border-primary/20">
                  <p className="text-3xl font-black text-primary mb-1">₪10M+</p>
                  <p className="text-sm text-muted-foreground">הכנסות שיצרנו</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
