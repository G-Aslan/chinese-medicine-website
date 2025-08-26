import React from 'react';
import { FaLeaf, FaHeart, FaClock, FaUserMd, FaThermometerHalf, FaBalanceScale } from 'react-icons/fa';
import AppointmentForm from '../components/AppointmentForm';

const Services = () => {
  const services = [
    {
      icon: <FaLeaf />,
      title: 'דיקור סיני',
      description: 'דיקור סיני הוא טיפול מסורתי המשתמש במחטים דקות המוחדרות לנקודות ספציפיות בגוף כדי לעורר את זרימת האנרגיה (צ\'י) ולשפר את הבריאות.',
      benefits: [
        'הקלה על כאבים כרוניים',
        'טיפול במיגרנות וכאבי ראש',
        'הפחתת מתח וחרדה',
        'שיפור איכות השינה',
        'איזון מערכת העיכול'
      ],
      duration: '45-60 דקות',
      price: '₪200-₪300'
    },
    {
      icon: <FaHeart />,
      title: 'צמחי מרפא',
      description: 'טיפול בצמחי מרפא סיניים הוא חלק חשוב מהרפואה הסינית המסורתית. התערובות מותאמות אישית לכל מטופל לפי האבחנה.',
      benefits: [
        'חיזוק מערכת החיסון',
        'איזון הורמונלי',
        'שיפור האנרגיה והחיוניות',
        'טיפול בבעיות עיכול',
        'תמיכה בתהליכי ריפוי טבעיים'
      ],
      duration: '30-45 דקות',
      price: '₪150-₪250'
    },
    {
      icon: <FaClock />,
      title: 'טווינה',
      description: 'טווינה היא שיטת עיסוי רפואי סיני המשלב טכניקות לחיצה, עיסוי ומתיחה כדי לשחרר מתח ולשפר את זרימת האנרגיה.',
      benefits: [
        'הקלה על כאבי שרירים ומפרקים',
        'שיפור הגמישות והטווח תנועה',
        'הפחתת מתח וחרדה',
        'שיפור זרימת הדם',
        'הרגעה כללית'
      ],
      duration: '60-90 דקות',
      price: '₪250-₪350'
    },
    {
      icon: <FaUserMd />,
      title: 'ייעוץ תזונתי',
      description: 'ייעוץ תזונתי לפי עקרונות הרפואה הסינית מתמקד באיזון הגוף דרך התזונה והתאמת המזון למצב הבריאותי האישי.',
      benefits: [
        'התאמת תזונה אישית',
        'שיפור העיכול והספיגה',
        'איזון רמות האנרגיה',
        'תמיכה בתהליכי ריפוי',
        'מניעת מחלות'
      ],
      duration: '45-60 דקות',
      price: '₪180-₪250'
    },
    {
      icon: <FaThermometerHalf />,
      title: 'מוקסה',
      description: 'מוקסה היא טכניקה המשתמשת בצמח הלענה המיובש כדי לחמם נקודות דיקור ולעורר את זרימת האנרגיה בגוף.',
      benefits: [
        'חימום והרגעה',
        'שיפור זרימת הדם',
        'הקלה על כאבים',
        'חיזוק מערכת החיסון',
        'איזון טמפרטורת הגוף'
      ],
      duration: '30-45 דקות',
      price: '₪120-₪180'
    },
    {
      icon: <FaBalanceScale />,
      title: 'אבחון כוללני',
      description: 'אבחון מקיף לפי עקרונות הרפואה הסינית הכולל בדיקת דופק, לשון ותשאול מפורט לקבלת תמונה מלאה של מצב הבריאות.',
      benefits: [
        'אבחון מדויק ומקיף',
        'תכנית טיפול מותאמת אישית',
        'מעקב אחר התקדמות',
        'מניעת מחלות',
        'שיפור איכות החיים'
      ],
      duration: '60-90 דקות',
      price: '₪300-₪400'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>השירותים שלנו</h1>
          <p>
            מגוון רחב של טיפולים ברפואה סינית מסורתית המותאמים אישית לכל מטופל.
            כל טיפול מתבצע על ידי מטפלים מוסמכים ובעלי ניסיון רב.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ 
                    fontSize: '3rem', 
                    color: '#667eea',
                    marginBottom: '1rem'
                  }}>
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                </div>
                
                <p style={{ marginBottom: '1.5rem' }}>{service.description}</p>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4>יתרונות הטיפול:</h4>
                  <ul style={{ paddingRight: '1.5rem', marginTop: '0.5rem' }}>
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} style={{ marginBottom: '0.5rem' }}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem',
                  background: 'var(--primary-pastel)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1rem'
                }}>
                  <div>
                    <strong>משך הטיפול:</strong> {service.duration}
                  </div>
                  <div>
                    <strong>מחיר:</strong> {service.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section" style={{ background: 'var(--secondary-pastel)' }}>
        <div className="container">
          <h2 className="text-center mb-4">תהליך הטיפול</h2>
          <div className="grid grid-4">
            <div className="card text-center">
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: '#667eea', 
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                margin: '0 auto 1rem'
              }}>
                1
              </div>
              <h4>אבחון ראשוני</h4>
              <p>פגישה ראשונה לאבחון מקיף ומעמיק של מצב הבריאות</p>
            </div>
            
            <div className="card text-center">
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: '#667eea', 
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                margin: '0 auto 1rem'
              }}>
                2
              </div>
              <h4>תכנית טיפול</h4>
              <p>בניית תכנית טיפול מותאמת אישית לפי האבחון</p>
            </div>
            
            <div className="card text-center">
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: '#667eea', 
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                margin: '0 auto 1rem'
              }}>
                3
              </div>
              <h4>טיפול</h4>
              <p>ביצוע הטיפולים בהתאם לתכנית שהותאמה</p>
            </div>
            
            <div className="card text-center">
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: '#667eea', 
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                margin: '0 auto 1rem'
              }}>
                4
              </div>
              <h4>מעקב והערכה</h4>
              <p>מעקב אחר התקדמות והתאמת הטיפול לפי הצורך</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-4">קבע תור עכשיו</h2>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <AppointmentForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
