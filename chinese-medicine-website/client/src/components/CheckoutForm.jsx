import React, { useState } from 'react';
import axios from 'axios';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCreditCard, FaLock } from 'react-icons/fa';

const CheckoutForm = ({ items, total, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: ''
  });
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setMessage('');

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Send order details via email (using EmailJS or similar)
      const orderData = {
        customerInfo: formData,
        items: items,
        total: total,
        orderDate: new Date().toLocaleString('he-IL')
      };

      // Try to send to server first
      try {
        await axios.post('/api/payment-success', orderData);
      } catch (serverError) {
        console.log('Server not available, sending email directly');
        // Send email directly using EmailJS or similar service
        await sendOrderEmail(orderData);
      }
      
      setMessage({ type: 'success', text: 'ההזמנה הושלמה בהצלחה! תודה על הקנייה. תקבל אישור במייל. 🎉' });
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: ''
      });
      
      // Call success callback after a delay
      setTimeout(() => {
        onSuccess();
      }, 3000);
      
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'שגיאה בעיבוד התשלום, נסה שוב או צור קשר בטלפון: 054-801-8883' 
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const sendOrderEmail = async (orderData) => {
    // This would integrate with EmailJS or similar service
    // For now, we'll simulate sending an email
    console.log('Sending order email:', orderData);
    
    // In a real implementation, you would use EmailJS:
    // emailjs.send('service_id', 'template_id', orderData, 'user_id');
    
    // For now, we'll just log the order details
    const emailContent = `
      הזמנה חדשה התקבלה!
      
      פרטי הלקוח:
      שם: ${orderData.customerInfo.name}
      אימייל: ${orderData.customerInfo.email}
      טלפון: ${orderData.customerInfo.phone}
      כתובת: ${orderData.customerInfo.address}
      
      פריטים שהוזמנו:
      ${orderData.items.map(item => `- ${item.name} x${item.quantity} - ₪${item.price * item.quantity}`).join('\n')}
      
      סה"כ לתשלום: ₪${orderData.total}
      
      תאריך הזמנה: ${orderData.orderDate}
    `;
    
    console.log('Email content:', emailContent);
  };

  return (
    <div>
      {message && (
        <div className={`message message-${message.type}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-2">
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
              <FaEnvelope style={{ marginLeft: '8px' }} />
              כתובת אימייל *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
              placeholder="your@email.com"
            />
          </div>
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
            <FaMapMarkerAlt style={{ marginLeft: '8px' }} />
            כתובת משלוח *
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="form-input"
            required
            placeholder="רחוב ומספר בית"
          />
        </div>

        <div className="grid grid-2">
          <div className="form-group">
            <label className="form-label">עיר *</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="form-input"
              required
              placeholder="תל אביב"
            />
          </div>

          <div className="form-group">
            <label className="form-label">מיקוד *</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="form-input"
              required
              placeholder="12345"
            />
          </div>
        </div>

        {/* Order Summary */}
        <div style={{ 
          background: 'var(--primary-pastel)', 
          padding: '1rem',
          borderRadius: 'var(--radius-md)',
          marginBottom: '1.5rem'
        }}>
          <h4 style={{ marginBottom: '1rem' }}>סיכום הזמנה</h4>
          {items.map((item) => (
            <div key={item.id} style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginBottom: '0.5rem'
            }}>
              <span>{item.name} x {item.quantity}</span>
              <span>₪{item.price * item.quantity}</span>
            </div>
          ))}
          <div style={{ 
            borderTop: '1px solid var(--border-medium)',
            paddingTop: '0.5rem',
            marginTop: '0.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: '600'
          }}>
            <span>סה"כ:</span>
            <span>₪{total}</span>
          </div>
        </div>

        {/* Payment Section */}
        <div style={{ 
          background: 'var(--accent-pastel)', 
          padding: '1rem',
          borderRadius: 'var(--radius-md)',
          marginBottom: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <FaCreditCard style={{ marginLeft: '8px', color: '#667eea' }} />
            <h4>פרטי תשלום</h4>
          </div>
          
          <div style={{ 
            background: 'white', 
            padding: '1rem',
            borderRadius: 'var(--radius-sm)',
            border: '2px dashed var(--border-medium)',
            textAlign: 'center',
            color: 'var(--text-secondary)'
          }}>
            <FaLock style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#667eea' }} />
            <p>תשלום מאובטח עם כרטיס אשראי</p>
            <p style={{ fontSize: '0.9rem' }}>
              במערכת זו, התשלום יתבצע באמצעות Stripe
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%' }}
          disabled={isProcessing}
        >
          {isProcessing ? 'מעבד תשלום...' : `שלם ₪${total}`}
        </button>

        <div style={{ 
          marginTop: '1rem', 
          fontSize: '0.9rem', 
          color: 'var(--text-light)',
          textAlign: 'center'
        }}>
          <p>לחיצה על "שלם" תאשר את ההזמנה ותעביר אותך לתשלום</p>
          <p>כל הפרטים שלך מוגנים ומאובטחים</p>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
