const Testimonials = () => {
  const whatsappTestimonials = [
    { id: 1, name: "דני כהן", text: "הכשרה מטורפת! תוך חודשיים הקמתי עסק שמניב לי 15k בחודש" },
    { id: 2, name: "מיכל לוי", text: "למדתי לערוך סרטונים ברמה שלא חשבתי שאגיע אליה אי פעם" },
    { id: 3, name: "יוסי אברהם", text: "הקמפיינים שלי עכשיו מרוויחים פי 3 מהשקעה - תודה על הכלים!" },
    { id: 4, name: "שירה גולן", text: "הסרטון שלי הגיע ל-2 מיליון צפיות! הטכניקות שלמדתי כאן עובדות" },
    { id: 5, name: "רועי מזרחי", text: "ממליץ בחום! תוך שבועיים כבר הרווחתי את ההשקעה בהכשרה" },
  ];

  const proofImages = [
    { 
      id: 1, 
      type: "revenue",
      title: "הכנסות מחנות אי-קומרס",
      amount: "₪47,328",
      description: "הכנסה חודשית ממוצעת"
    },
    { 
      id: 2, 
      type: "campaign",
      title: "קמפיין ממומן רווחי",
      amount: "ROI 4.7x",
      description: "החזר השקעה ממוצע"
    },
    { 
      id: 3, 
      type: "viral",
      title: "סרטון ויראלי",
      amount: "3.2M צפיות",
      description: "השבוע האחרון"
    },
  ];

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

        {/* WhatsApp Testimonials */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">הוכחות חברתיות מתלמידים</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whatsappTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.67-.34-3.82-.93l-.27-.15-2.91.49.49-2.91-.15-.27A7.93 7.93 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">לקוח ממליץ</p>
                  </div>
                </div>
                <p className="text-foreground/90 leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue & Campaign Proofs */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">תוצאות אמיתיות מהשטח</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {proofImages.map((proof) => (
              <div 
                key={proof.id}
                className="bg-card rounded-xl p-8 border-2 border-primary/30 shadow-card hover:shadow-glow transition-all duration-300 text-center hover:scale-105"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2">{proof.title}</h4>
                <p className="text-3xl font-black text-primary mb-2">{proof.amount}</p>
                <p className="text-sm text-muted-foreground">{proof.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Video Examples Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">סרטונים ערוכים לדוגמא - ככה תדע לערוך</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className="bg-card rounded-xl overflow-hidden border border-border shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">דוגמת עריכה #{i}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-bold">עריכה ברמה מקצועית</p>
                  <p className="text-sm text-muted-foreground">טכניקות שתלמד בקורס</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Viral Videos Section */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">סרטונים שהתפוצצו ברשת</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { views: "2.8M", title: "מדריך שיווקי ויראלי", engagement: "187K אינטראקציות" },
              { views: "1.5M", title: "סרטון מוצר שהתפוצץ", engagement: "94K אינטראקציות" },
            ].map((video, i) => (
              <div 
                key={i}
                className="bg-card rounded-xl overflow-hidden border-2 border-primary/30 shadow-card hover:shadow-glow transition-all duration-300"
              >
                <div className="aspect-video bg-muted flex items-center justify-center relative">
                  <div className="absolute top-4 right-4 bg-destructive/90 text-destructive-foreground px-3 py-1 rounded-full text-sm font-bold">
                    🔥 VIRAL
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-3xl font-black text-primary">{video.views}</p>
                    <p className="text-sm text-muted-foreground">צפיות</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-bold text-lg mb-1">{video.title}</p>
                  <p className="text-sm text-muted-foreground">{video.engagement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
