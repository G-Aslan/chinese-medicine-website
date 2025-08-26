import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaHeart, FaClock, FaUserMd } from 'react-icons/fa';
import AppointmentForm from '../components/AppointmentForm';

const Home = () => {
  const services = [
    {
      icon: <FaLeaf />,
      title: 'דיקור סיני',
      description: 'טיפול מסורתי בדיקור להקלה על כאבים ואיזון הגוף',
      color: 'var(--mint-pastel)'
    },
    {
      icon: <FaHeart />,
      title: 'צמחי מרפא',
      description: 'תערובות צמחים טבעיות לטיפול במגוון בעיות בריאות',
      color: 'var(--accent-pastel)'
    },
    {
      icon: <FaClock />,
      title: 'טווינה',
      description: 'עיסוי רפואי סיני להקלה על מתח וכאבי שרירים',
      color: 'var(--lavender-pastel)'
    },
    {
      icon: <FaUserMd />,
      title: 'ייעוץ תזונתי',
      description: 'התאמת תזונה אישית לפי עקרונות הרפואה הסינית',
      color: 'var(--peach-pastel)'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>רפואה סינית מסורתית</h1>
          <p>
            ברוכים הבאים למרפאת הרפואה הסינית של רומי בן שושן. 
            אנו מציעים טיפולים טבעיים ויעילים לשיפור הבריאות ואיכות החיים.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services" className="btn btn-primary">
              צפה בשירותים
            </Link>
            <Link to="/products" className="btn btn-secondary">
              חנות מוצרים
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-4">השירותים שלנו</h2>
          <div className="grid grid-4">
            {services.map((service, index) => (
              <div key={index} className="card text-center" style={{ background: service.color }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#667eea' }}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" style={{ background: 'var(--secondary-pastel)' }}>
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>על המרפאה</h2>
              <p>
                המרפאה שלנו מתמחה ברפואה סינית מסורתית ומציעה מגוון רחב של טיפולים טבעיים.
                אנו מאמינים בגישה הוליסטית לבריאות המשלבת גוף, נפש ורוח.
              </p>
              <p>
                הצוות המקצועי שלנו כולל מטפלים מוסמכים ובעלי ניסיון רב בתחום הרפואה הסינית.
                אנו מתחייבים לספק טיפול אישי ומותאם לכל מטופל.
              </p>
              <Link to="/services" className="btn btn-primary">
                למידע נוסף
              </Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ 
                width: '300px', 
                height: '300px', 
                background: 'var(--sage-pastel)', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '8rem',
                color: '#667eea'
              }}>
                <FaLeaf />
              </div>
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

      {/* Contact Section */}
      <section className="section" style={{ background: 'var(--accent-pastel)' }}>
        <div className="container">
          <h2 className="text-center mb-4">צור קשר</h2>
          <div className="grid grid-3">
            <div className="card text-center">
              <FaPhone style={{ fontSize: '2rem', color: '#667eea', marginBottom: '1rem' }} />
              <h3>טלפון</h3>
              <p>054-801-8883</p>
            </div>
            <div className="card text-center">
              <FaEnvelope style={{ fontSize: '2rem', color: '#667eea', marginBottom: '1rem' }} />
              <h3>אימייל</h3>
              <p>romibenshushan801@gmail.com</p>
            </div>
            <div className="card text-center">
              <FaMapMarkerAlt style={{ fontSize: '2rem', color: '#667eea', marginBottom: '1rem' }} />
              <h3>כתובת</h3>
              <p>תל אביב, ישראל</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
