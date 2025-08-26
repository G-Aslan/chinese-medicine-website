import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>רפואה סינית - רומי בן שושן</h3>
            <p>מרפאה מקצועית לרפואה סינית מסורתית</p>
            <p>טיפולים טבעיים ויעילים לבריאות מיטבית</p>
          </div>
          
          <div className="footer-section">
            <h3>צור קשר</h3>
            <p>
              <FaPhone style={{ marginLeft: '8px' }} />
              <a href="tel:+972548018883">054-801-8883</a>
            </p>
            <p>
              <FaEnvelope style={{ marginLeft: '8px' }} />
              <a href="mailto:romibenshushan801@gmail.com">romibenshushan801@gmail.com</a>
            </p>
            <p>
              <FaMapMarkerAlt style={{ marginLeft: '8px' }} />
              תל אביב, ישראל
            </p>
          </div>
          
          <div className="footer-section">
            <h3>שעות פעילות</h3>
            <p>
              <FaClock style={{ marginLeft: '8px' }} />
              ראשון - חמישי: 09:00 - 19:00
            </p>
            <p>שישי: 09:00 - 14:00</p>
            <p>שבת: סגור</p>
          </div>
          
          <div className="footer-section">
            <h3>שירותים</h3>
            <p>דיקור סיני</p>
            <p>צמחי מרפא</p>
            <p>טווינה</p>
            <p>ייעוץ תזונתי</p>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #34495e' }}>
          <p>&copy; 2024 רפואה סינית - רומי בן שושן. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
