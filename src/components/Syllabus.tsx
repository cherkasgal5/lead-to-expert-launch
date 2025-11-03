const Syllabus = () => {
  const modules = [
    {
      id: 1,
      title: "יסודות השיווק הדיגיטלי",
      topics: [
        "הבנת עולם הפרסום הדיגיטלי",
        "ניתוח קהלי יעד וביואר-פרסונות",
        "אסטרטגיות תוכן וקופירייטינג",
        "כלים ופלטפורמות מובילות"
      ]
    },
    {
      id: 2,
      title: "קמפיינים ממומנים מנצחים",
      topics: [
        "פייסבוק ואינסטגרם Ads ברמה מתקדמת",
        "גוגל Ads וקידום ממומן בחיפוש",
        "TikTok Ads - המדיום החם ביותר",
        "אופטימיזציה והגדלת ROI"
      ]
    },
    {
      id: 3,
      title: "עריכת וידאו מקצועית",
      topics: [
        "עריכה בתוכנות מובילות",
        "טכניקות עריכה ויראליות",
        "אפקטים ואנימציות מרשימות",
        "סאונד דיזיין ומוזיקה"
      ]
    },
    {
      id: 4,
      title: "יצירת תוכן ויראלי",
      topics: [
        "כתיבת סקריפטים מושכים",
        "צילום וידאו ברמה גבוהה",
        "טרנדים ואלגוריתמים של הפלטפורמות",
        "אסטרטגיות להגעה למיליוני צפיות"
      ]
    },
    {
      id: 5,
      title: "אי-קומרס ומכירות דיגיטליות",
      topics: [
        "בניית חנות אונליין רווחית",
        "אסטרטגיות תמחור ומיצוב",
        "משפכי מכירה וקונברסיות",
        "ניהול לקוחות ושירות"
      ]
    },
    {
      id: 6,
      title: "ניתוח נתונים ואופטימיזציה",
      topics: [
        "Google Analytics ו-Facebook Pixel",
        "קריאת דוחות ומדדי ביצועים",
        "A/B Testing וניסויים",
        "קבלת החלטות מבוססות דאטה"
      ]
    }
  ];

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            מה תלמד{" "}
            <span className="text-primary">בהכשרה?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            סילבוס מקיף שמכסה את כל התחומים שצריך כדי להצליח בשיווק דיגיטלי
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {modules.map((module, index) => (
            <div 
              key={module.id}
              className="bg-background rounded-xl p-6 border-2 border-border hover:border-primary/50 shadow-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-black text-primary-foreground">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold">{module.title}</h3>
              </div>
              <ul className="space-y-3">
                {module.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg 
                      className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/80">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-8 border border-primary/30">
            <p className="text-2xl font-bold mb-2">🎓 בונוס מיוחד</p>
            <p className="text-muted-foreground">
              גישה לקהילת VIP של תלמידים, עדכונים שוטפים, וליווי אישי
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Syllabus;
