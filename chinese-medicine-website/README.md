# אתר רפואה סינית - רומי בן שושן

אתר מקצועי לרפואה סינית עם מערכת הזמנת תורים וחנות מוצרים.

## תכונות עיקריות

### 🏥 מערכת הזמנת תורים
- טופס הזמנת תורים אינטראקטיבי
- בחירת תאריך ושעה
- בחירת סוג טיפול
- שליחת הודעת WhatsApp אוטומטית למספר: +972548018883

### 🛒 חנות מוצרים
- קטלוג מוצרים טבעיים
- עגלת קניות מתקדמת
- מערכת תשלום עם כרטיס אשראי (Stripe)
- שליחת מייל אוטומטי ל: romibenshushan801@gmail.com

### 🎨 עיצוב
- צבעי פסטל נעימים לעין
- עיצוב רספונסיבי למובייל
- ממשק משתמש מודרני ואינטואיטיבי

## התקנה והפעלה

### דרישות מקדימות
- Node.js (גרסה 16 ומעלה)
- npm או yarn

### שלב 1: התקנת תלויות
```bash
# התקנת כל התלויות
npm run install-all
```

### שלב 2: הגדרת משתני סביבה
צור קובץ `.env` בתיקיית `server` עם הפרטים הבאים:

```env
# Server Configuration
PORT=5001

# Email Configuration (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Twilio Configuration (for WhatsApp)
TWILIO_ACCOUNT_SID=your-twilio-account-sid
TWILIO_AUTH_TOKEN=your-twilio-auth-token
TWILIO_PHONE_NUMBER=your-twilio-phone-number

# Stripe Configuration
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
```

### שלב 3: הפעלת האתר
```bash
# הפעלת השרת והקליינט במקביל
npm run dev
```

האתר יהיה זמין בכתובות:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5001

## הוראות להגדרת השירותים

### 1. הגדרת Gmail לשליחת מיילים
1. היכנס לחשבון Google שלך
2. עבור ל"אבטחה" > "אימות דו-שלבי"
3. צור "סיסמת אפליקציה" עבור האתר
4. השתמש בסיסמה זו ב-`EMAIL_PASS`

### 2. הגדרת Twilio לשליחת WhatsApp
1. הירשם ל-Twilio (https://www.twilio.com)
2. צור חשבון WhatsApp Business API
3. קבל את ה-Account SID ו-Auth Token
4. הגדר את מספר הטלפון של Twilio

### 3. הגדרת Stripe לתשלומים
1. הירשם ל-Stripe (https://stripe.com)
2. קבל את מפתחות ה-API (Secret Key ו-Publishable Key)
3. הגדר את המטבע ל-ILS (שקל ישראלי)

## מבנה הפרויקט

```
chinese-medicine-website/
├── client/                 # Frontend (React)
│   ├── src/
│   │   ├── components/     # קומפוננטות
│   │   ├── pages/         # דפים
│   │   ├── context/       # Context API
│   │   └── styles/        # קבצי CSS
│   └── public/            # קבצים סטטיים
├── server/                # Backend (Node.js/Express)
│   ├── index.js          # השרת הראשי
│   └── package.json      # תלויות השרת
└── package.json          # תלויות ראשיות
```

## API Endpoints

### תורים
- `GET /api/appointments` - קבלת כל התורים
- `POST /api/appointments` - יצירת תור חדש

### מוצרים
- `GET /api/products` - קבלת כל המוצרים
- `GET /api/products/:id` - קבלת מוצר ספציפי

### תשלומים
- `POST /api/create-payment-intent` - יצירת כוונת תשלום
- `POST /api/payment-success` - אישור תשלום מוצלח

## תכונות נוספות

### 🔔 התראות אוטומטיות
- **WhatsApp**: כל תור חדש נשלח אוטומטית לוואטסאפ
- **Email**: כל הזמנה חדשה נשלחת למייל

### 📱 רספונסיביות
- עיצוב מותאם לכל הגדלי מסך
- חוויית משתמש מיטבית במובייל

### 🔒 אבטחה
- אימות קלט
- הגנה מפני XSS
- תשלום מאובטח

## פיתוח עתידי

- [ ] מערכת ניהול תורים מתקדמת
- [ ] דשבורד למנהל
- [ ] מערכת נאמנות
- [ ] ביקורות ודירוגים
- [ ] בלוג רפואי
- [ ] אפליקציית מובייל

## תמיכה

לשאלות ותמיכה טכנית, פנה ל:
- **אימייל**: romibenshushan801@gmail.com
- **טלפון**: 054-801-8883

## רישיון

MIT License - ראה קובץ LICENSE לפרטים נוספים.
