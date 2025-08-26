# הוראות הפעלה מהירות

## 🚀 הפעלה מהירה

### 1. התקנת תלויות
```bash
npm run install-all
```

### 2. הפעלת האתר
```bash
npm run dev
```

### 3. גישה לאתר
- **אתר**: http://localhost:3000
- **API**: http://localhost:5001

## 📱 תכונות זמינות

### ✅ עובד עכשיו
- ✅ דף הבית עם עיצוב פסטל
- ✅ דף שירותים מפורט
- ✅ חנות מוצרים עם עגלה
- ✅ טופס הזמנת תורים
- ✅ ניווט מלא באתר
- ✅ עיצוב רספונסיבי

### ⚠️ דורש הגדרה
- 🔧 שליחת WhatsApp (נדרש Twilio)
- 🔧 שליחת מיילים (נדרש Gmail)
- 🔧 תשלום אמיתי (נדרש Stripe)

## 🛠️ הגדרת שירותים (אופציונלי)

### WhatsApp Notifications
1. הירשם ל-Twilio
2. צור קובץ `.env` בתיקיית `server`
3. הוסף:
```env
TWILIO_ACCOUNT_SID=your-sid
TWILIO_AUTH_TOKEN=your-token
TWILIO_PHONE_NUMBER=your-twilio-number
```

### Email Notifications
1. הפעל אימות דו-שלבי ב-Gmail
2. צור סיסמת אפליקציה
3. הוסף לקובץ `.env`:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Stripe Payments
1. הירשם ל-Stripe
2. קבל מפתחות API
3. הוסף לקובץ `.env`:
```env
STRIPE_SECRET_KEY=your-secret-key
STRIPE_PUBLISHABLE_KEY=your-publishable-key
```

## 🎯 מה עובד בלי הגדרה
- כל הפונקציונליות של האתר
- הזמנת תורים (נשמרים בזיכרון)
- קניית מוצרים (סימולציה)
- עיצוב מלא וניווט

## 📞 תמיכה
- **אימייל**: romibenshushan801@gmail.com
- **טלפון**: 054-801-8883
