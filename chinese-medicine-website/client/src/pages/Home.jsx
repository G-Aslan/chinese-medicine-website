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
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.9)', 
            padding: '3rem', 
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}>
            <h1 style={{ 
              fontSize: '3.5rem', 
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center'
            }}>
              רפואה סינית מסורתית 🌿
            </h1>
            <p style={{ 
              fontSize: '1.3rem', 
              lineHeight: '1.8',
              marginBottom: '2rem',
              textAlign: 'center',
              color: '#4a5568'
            }}>
              ברוכים הבאים למרפאת הרפואה הסינית של <strong>רומי בן שושן</strong>. 
              אנו מציעים טיפולים טבעיים ויעילים לשיפור הבריאות ואיכות החיים.
              <br />
              <span style={{ color: '#667eea', fontWeight: '600' }}>
                "הבריאות היא העושר האמיתי" - הרפואה הסינית המסורתית
              </span>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/services" className="btn btn-primary" style={{ 
                fontSize: '1.1rem', 
                padding: '15px 30px',
                borderRadius: '50px',
                boxShadow: '0 10px 20px rgba(102, 126, 234, 0.3)'
              }}>
                🌟 צפה בשירותים
              </Link>
              <Link to="/products" className="btn btn-secondary" style={{ 
                fontSize: '1.1rem', 
                padding: '15px 30px',
                borderRadius: '50px',
                boxShadow: '0 10px 20px rgba(255, 182, 193, 0.3)'
              }}>
                🛒 חנות מוצרים
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-4" style={{ 
            fontSize: '2.5rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '3rem'
          }}>
            🌟 השירותים שלנו
          </h2>
          <div className="grid grid-4">
            {services.map((service, index) => (
              <div key={index} className="card text-center" style={{ 
                background: `linear-gradient(135deg, ${service.color} 0%, rgba(255,255,255,0.8) 100%)`,
                border: '2px solid transparent',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
              }}>
                <div style={{ 
                  fontSize: '4rem', 
                  marginBottom: '1.5rem', 
                  color: '#667eea',
                  transition: 'transform 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotate(10deg) scale(1.1)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#2d3748' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#4a5568' }}>
                  {service.description}
                </p>
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
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/services" className="btn btn-primary">
                  צפה בשירותים
                </Link>
                <Link to="/products" className="btn btn-secondary">
                  חנות מוצרים
                </Link>
              </div>
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
                color: '#667eea',
                boxShadow: 'var(--shadow-medium)',
                animation: 'pulse 2s ease-in-out infinite'
              }}>
                🌿
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-4">
            <div className="card text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#667eea' }}>👥</div>
              <h3>1000+</h3>
              <p>מטופלים מרוצים</p>
            </div>
            <div className="card text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#667eea' }}>⭐</div>
              <h3>15+</h3>
              <p>שנות ניסיון</p>
            </div>
            <div className="card text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#667eea' }}>🏆</div>
              <h3>100%</h3>
              <p>טבעי ואורגני</p>
            </div>
            <div className="card text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#667eea' }}>💚</div>
              <h3>24/7</h3>
              <p>תמיכה וטיפול</p>
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
