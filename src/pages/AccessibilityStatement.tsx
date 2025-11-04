const AccessibilityStatement = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-12 text-center">
            הצהרת נגישות
          </h1>

          <div className="space-y-8 bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border">
            {/* Purpose */}
            <section>
              <h2 className="text-2xl font-bold mb-4">מטרת ההנגשה</h2>
              <p className="text-muted-foreground leading-relaxed">
                אתר זה מחויב להנגיש את תכניו לכלל המשתמשים, לרבות אנשים עם מוגבלויות.
                אנו מאמינים שלכל אדם הזכות לגלוש באתר באופן עצמאי, בקלות ובנוחות.
                ההנגשה מאפשרת שימוש נוח יותר לאנשים עם מוגבלויות ומשפרת את חווית הגלישה של כלל המשתמשים.
              </p>
            </section>

            {/* Actions Taken */}
            <section>
              <h2 className="text-2xl font-bold mb-4">פעולות שנעשו להנגשה</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>התאמת ניגודיות צבעים לתקן WCAG 2.1</li>
                <li>ניווט מלא באמצעות מקלדת בלבד</li>
                <li>תיאור טקסטואלי (Alt Text) לכל התמונות והאייקונים</li>
                <li>התאמה לקוראי מסך (Screen Readers)</li>
                <li>מבנה סמנטי נכון של כותרות ותוכן</li>
                <li>גודל פונט ברור וקריא</li>
                <li>אזורי מיקוד (Focus) ברורים לניווט במקלדת</li>
                <li>עיצוב רספונסיבי לכל סוגי המכשירים</li>
              </ul>
            </section>

            {/* Accessibility Level */}
            <section>
              <h2 className="text-2xl font-bold mb-4">רמת הנגישות</h2>
              <p className="text-muted-foreground leading-relaxed">
                האתר עומד ברמת נגישות AA לפי תקן WCAG 2.1 (Web Content Accessibility Guidelines)
                ותקן ישראלי ת״י 5568. אנו ממשיכים לעבוד על שיפור הנגישות באופן שוטף.
              </p>
            </section>

            {/* Components Not Yet Accessible */}
            <section>
              <h2 className="text-2xl font-bold mb-4">רכיבים שטרם הונגשו</h2>
              <p className="text-muted-foreground leading-relaxed">
                אנו עובדים באופן מתמיד על שיפור הנגישות של האתר. במידה ונתקלתם ברכיב
                או בתכנים שאינם נגישים, נשמח לשמוע ממכם דרך פרטי הקשר המפורטים מטה.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold mb-4">דרכי יצירת קשר</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                לפניות בנושא נגישות, או במידה ונתקלתם בבעיה או קושי בגלישה באתר,
                אנא פנו אלינו:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>שם רכז נגישות:</strong> צוות הכשרת שיווק דיגיטלי</p>
                <p><strong>דוא״ל:</strong> <a href="mailto:accessibility@example.com" className="text-primary hover:underline">accessibility@example.com</a></p>
                <p><strong>טלפון:</strong> <a href="tel:+972-50-000-0000" className="text-primary hover:underline">050-000-0000</a></p>
              </div>
            </section>

            {/* Last Updated */}
            <section className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                הצהרה זו עודכנה לאחרונה בתאריך <strong>4 בנובמבר 2025</strong>
              </p>
            </section>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <a 
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
            >
              ← חזרה לדף הבית
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 הכשרת שיווק דיגיטלי - כל הזכויות שמורות
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AccessibilityStatement;
