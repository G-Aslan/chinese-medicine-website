import React, { useState } from 'react';
import axios from 'axios';
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaEnvelope, FaStethoscope } from 'react-icons/fa';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    notes: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const services = [
    { value: 'acupuncture', label: 'דיקור סיני' },
    { value: 'herbs', label: 'צמחי מרפא' },
    { value: 'tuina', label: 'טווינה' },
    { value: 'nutrition', label: 'ייעוץ תזונתי' },
    { value: 'consultation', label: 'ייעוץ כללי' }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', 
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // Try to send to server first
      try {
        const response = await axios.post('/api/appointments', formData);
        setMessage({ type: 'success', text: response.data.message });
      } catch (serverError) {
        console.log('Server not available, sending WhatsApp directly');
        // Send WhatsApp message directly
        await sendWhatsAppMessage(formData);
        setMessage({ 
          type: 'success', 
          text: 'התור נקבע בהצלחה! תקבל אישור בוואטסאפ בקרוב. 🎉' 
        });
      }
      
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        service: '',
        notes: ''
      });
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'שגיאה בקביעת התור, נסה שוב או צור קשר בטלפון: 054-801-8883' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendWhatsAppMessage = async (appointmentData) => {
    const serviceNames = {
      'acupuncture': 'דיקור סיני',
      'herbs': 'צמחי מרפא',
      'tuina': 'טווינה',
      'nutrition': 'ייעוץ תזונתי',
      'consultation': 'ייעוץ כללי'
    };

    const message = `תור חדש! 🌿

שם: ${appointmentData.name}
טלפון: ${appointmentData.phone}
תאריך: ${appointmentData.date}
שעה: ${appointmentData.time}
שירות: ${serviceNames[appointmentData.service] || appointmentData.service}
הערות: ${appointmentData.notes || 'אין'}

תאריך קביעה: ${new Date().toLocaleString('he-IL')}`;

    // Create WhatsApp link
    const whatsappLink = `https://wa.me/972548018883?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappLink, '_blank');
    
    console.log('WhatsApp message:', message);
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <div className="card">
      <h3 className="text-center mb-3">קבע תור לטיפול</h3>
      
      {message && (
        <div className={`message message-${message.type}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">
            <FaUser style={{ marginLeft: '8px' }} />
            שם מלא *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
            placeholder="הכנס את שמך המלא"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <FaPhone style={{ marginLeft: '8px' }} />
            מספר טלפון *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            required
            placeholder="050-1234567"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <FaEnvelope style={{ marginLeft: '8px' }} />
            כתובת אימייל
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="your@email.com"
          />
        </div>

        <div className="grid grid-2">
          <div className="form-group">
            <label className="form-label">
              <FaCalendarAlt style={{ marginLeft: '8px' }} />
              תאריך *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="form-input"
              required
              min={getMinDate()}
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              <FaClock style={{ marginLeft: '8px' }} />
              שעה *
            </label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="">בחר שעה</option>
              {timeSlots.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            <FaStethoscope style={{ marginLeft: '8px' }} />
            סוג טיפול *
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="">בחר סוג טיפול</option>
            {services.map(service => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">הערות נוספות</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="form-input form-textarea"
            placeholder="תיאור קצר של הבעיה או בקשות מיוחדות..."
            rows="4"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%' }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'שולח...' : 'קבע תור'}
        </button>
      </form>

      <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-light)' }}>
        <p>* שדות חובה</p>
        <p>התור יאושר על ידי הצוות וישלח אליך אישור</p>
      </div>
    </div>
  );
};

export default AppointmentForm;
