const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Email configuration
const transporter = process.env.EMAIL_USER && process.env.EMAIL_PASS ? nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
}) : null;

// Twilio configuration
const twilioClient = process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN ? twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
) : null;

// Store appointments and products (in production, use a database)
let appointments = [];
let products = [
  {
    id: 1,
    name: 'תה צמחים מרגיע',
    description: 'תערובת צמחים טבעית להרגעה ובריאות',
    price: 45,
    image: '/images/tea.jpg',
    category: 'teas'
  },
  {
    id: 2,
    name: 'שמן אתרי לבנדר',
    description: 'שמן אתרי טבעי להרגעה ושינה טובה',
    price: 35,
    image: '/images/lavender.jpg',
    category: 'oils'
  },
  {
    id: 3,
    name: 'מחטי דיקור סטריליות',
    description: 'מחטי דיקור איכותיות לטיפול מקצועי',
    price: 25,
    image: '/images/needles.jpg',
    category: 'tools'
  },
  {
    id: 4,
    name: 'כרית חימום צמחית',
    description: 'כרית חימום עם צמחי מרפא להקלה על כאבים',
    price: 55,
    image: '/images/pillow.jpg',
    category: 'accessories'
  }
];

// Routes

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Get product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: 'מוצר לא נמצא' });
  }
  res.json(product);
});

// Book appointment
app.post('/api/appointments', async (req, res) => {
  try {
    const { name, phone, email, date, time, service, notes } = req.body;
    
    const appointment = {
      id: Date.now(),
      name,
      phone,
      email,
      date,
      time,
      service,
      notes,
      createdAt: new Date()
    };
    
    appointments.push(appointment);
    
    // Send WhatsApp message
    if (twilioClient && process.env.TWILIO_PHONE_NUMBER) {
      try {
        await twilioClient.messages.create({
          body: `תור חדש! 
שם: ${name}
טלפון: ${phone}
תאריך: ${date}
שעה: ${time}
שירות: ${service}
הערות: ${notes || 'אין'}`,
          from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
          to: `whatsapp:+972548018883`
        });
      } catch (whatsappError) {
        console.error('WhatsApp error:', whatsappError);
      }
    } else {
      console.log('WhatsApp notification skipped - Twilio not configured');
    }
    
    res.status(201).json({ 
      message: 'התור נקבע בהצלחה!', 
      appointment 
    });
    
  } catch (error) {
    console.error('Appointment booking error:', error);
    res.status(500).json({ message: 'שגיאה בקביעת התור' });
  }
});

// Get all appointments
app.get('/api/appointments', (req, res) => {
  res.json(appointments);
});

// Create payment intent for Stripe
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, items } = req.body;
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe expects amount in cents
      currency: 'ils',
      metadata: {
        items: JSON.stringify(items)
      }
    });
    
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Payment intent error:', error);
    res.status(500).json({ message: 'שגיאה ביצירת תשלום' });
  }
});

// Handle successful payment
app.post('/api/payment-success', async (req, res) => {
  try {
    const { customerInfo, items, total } = req.body;
    
    // Send email notification
    if (transporter) {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'romibenshushan801@gmail.com',
        subject: 'הזמנה חדשה - רפואה סינית',
        html: `
          <h2>הזמנה חדשה התקבלה!</h2>
          <h3>פרטי הלקוח:</h3>
          <p><strong>שם:</strong> ${customerInfo.name}</p>
          <p><strong>אימייל:</strong> ${customerInfo.email}</p>
          <p><strong>טלפון:</strong> ${customerInfo.phone}</p>
          <p><strong>כתובת:</strong> ${customerInfo.address}</p>
          
          <h3>פריטים שהוזמנו:</h3>
          <ul>
            ${items.map(item => `<li>${item.name} - ₪${item.price} x ${item.quantity}</li>`).join('')}
          </ul>
          
          <h3>סה"כ לתשלום: ₪${total}</h3>
          
          <p>תאריך הזמנה: ${new Date().toLocaleString('he-IL')}</p>
        `
      };
      
      await transporter.sendMail(mailOptions);
    } else {
      console.log('Email notification skipped - Email not configured');
    }
    
    res.json({ message: 'התשלום הושלם בהצלחה והמייל נשלח' });
    
  } catch (error) {
    console.error('Payment success error:', error);
    res.status(500).json({ message: 'שגיאה בשליחת המייל' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'השרת פועל' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
