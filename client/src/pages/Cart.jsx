import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { FaTrash, FaPlus, FaMinus, FaCreditCard, FaShoppingBag } from 'react-icons/fa';
import CheckoutForm from '../components/CheckoutForm';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div>
        <section className="hero">
          <div className="container">
            <h1>העגלה שלך</h1>
            <p>העגלה ריקה</p>
          </div>
        </section>
        
        <section className="section">
          <div className="container">
            <div className="card text-center">
              <FaShoppingBag style={{ fontSize: '4rem', color: '#667eea', marginBottom: '1rem' }} />
              <h3>העגלה שלך ריקה</h3>
              <p>הוסף מוצרים לעגלה כדי להתחיל</p>
              <a href="/products" className="btn btn-primary">
                המשך לקניות
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>העגלה שלך</h1>
          <p>בדוק את המוצרים שלך והשלם את הרכישה</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {/* Cart Items */}
            <div>
              <h2>פריטים בעגלה ({items.length})</h2>
              
              <div style={{ marginBottom: '2rem' }}>
                {items.map((item) => (
                  <div key={item.id} className="card" style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <div style={{ 
                        width: '80px', 
                        height: '80px', 
                        background: 'var(--sage-pastel)',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem'
                      }}>
                        🌿
                      </div>
                      
                      <div style={{ flex: 1 }}>
                        <h4>{item.name}</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                          {item.description}
                        </p>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginTop: '0.5rem'
                        }}>
                          <div style={{ fontSize: '1.2rem', fontWeight: '600', color: '#667eea' }}>
                            ₪{item.price}
                          </div>
                          
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="btn btn-outline"
                              style={{ padding: '8px 12px', minWidth: 'auto' }}
                            >
                              <FaMinus />
                            </button>
                            
                            <span style={{ 
                              minWidth: '30px', 
                              textAlign: 'center',
                              fontWeight: '600'
                            }}>
                              {item.quantity}
                            </span>
                            
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="btn btn-outline"
                              style={{ padding: '8px 12px', minWidth: 'auto' }}
                            >
                              <FaPlus />
                            </button>
                            
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="btn btn-outline"
                              style={{ 
                                padding: '8px 12px', 
                                minWidth: 'auto',
                                color: '#e74c3c',
                                borderColor: '#e74c3c'
                              }}
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  onClick={clearCart}
                  className="btn btn-outline"
                >
                  רוקן עגלה
                </button>
                
                <a href="/products" className="btn btn-secondary">
                  המשך לקניות
                </a>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="card">
                <h3>סיכום הזמנה</h3>
                
                <div style={{ marginBottom: '1.5rem' }}>
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
                </div>
                
                <div style={{ 
                  borderTop: '2px solid var(--border-light)',
                  paddingTop: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    fontSize: '1.2rem',
                    fontWeight: '600'
                  }}>
                    <span>סה"כ לתשלום:</span>
                    <span>₪{getCartTotal()}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => setShowCheckout(true)}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  <FaCreditCard style={{ marginLeft: '8px' }} />
                  המשך לתשלום
                </button>
                
                <div style={{ 
                  marginTop: '1rem', 
                  fontSize: '0.9rem', 
                  color: 'var(--text-light)',
                  textAlign: 'center'
                }}>
                  <p>תשלום מאובטח עם כרטיס אשראי</p>
                  <p>משלוח חינם בקנייה מעל ₪200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      {showCheckout && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem'
        }}>
          <div style={{
            background: 'white',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <h3>השלם הזמנה</h3>
              <button
                onClick={() => setShowCheckout(false)}
                className="btn btn-outline"
                style={{ padding: '8px 12px', minWidth: 'auto' }}
              >
                ✕
              </button>
            </div>
            
            <CheckoutForm 
              items={items}
              total={getCartTotal()}
              onSuccess={() => {
                setShowCheckout(false);
                clearCart();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
