import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { FaShoppingCart, FaFilter, FaSearch } from 'react-icons/fa';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();

  const categories = [
    { value: 'all', label: 'כל המוצרים' },
    { value: 'teas', label: 'תה צמחים' },
    { value: 'oils', label: 'שמנים אתריים' },
    { value: 'tools', label: 'כלי טיפול' },
    { value: 'accessories', label: 'אביזרים' }
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, searchTerm, selectedCategory]);

  const fetchProducts = async () => {
    try {
      // Try to fetch from server first
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.log('Using local products data');
      // Fallback to local data if server is not available
      const localProducts = [
        {
          id: 1,
          name: 'תה צמחים מרגיע',
          description: 'תערובת צמחים טבעית להרגעה ובריאות. מכיל קמומיל, לבנדר ומנטה להרגעה טבעית.',
          price: 45,
          image: '/images/tea.jpg',
          category: 'teas',
          inStock: true
        },
        {
          id: 2,
          name: 'שמן אתרי לבנדר',
          description: 'שמן אתרי טבעי להרגעה ושינה טובה. מופק מפרחי לבנדר איכותיים.',
          price: 35,
          image: '/images/lavender.jpg',
          category: 'oils',
          inStock: true
        },
        {
          id: 3,
          name: 'מחטי דיקור סטריליות',
          description: 'מחטי דיקור איכותיות לטיפול מקצועי. סטריליות וחד פעמיות.',
          price: 25,
          image: '/images/needles.jpg',
          category: 'tools',
          inStock: true
        },
        {
          id: 4,
          name: 'כרית חימום צמחית',
          description: 'כרית חימום עם צמחי מרפא להקלה על כאבים. מכילה תערובת צמחים מרגיעה.',
          price: 55,
          image: '/images/pillow.jpg',
          category: 'accessories',
          inStock: true
        },
        {
          id: 5,
          name: 'תערובת צמחים לחיזוק מערכת החיסון',
          description: 'תערובת צמחים טבעית לחיזוק המערכת החיסונית. מכילה אכינצאה, גינגר וקורקום.',
          price: 65,
          image: '/images/immunity.jpg',
          category: 'teas',
          inStock: true
        },
        {
          id: 6,
          name: 'שמן אתרי אקליפטוס',
          description: 'שמן אתרי אקליפטוס לפתיחת דרכי הנשימה. מושלם לעונת החורף.',
          price: 40,
          image: '/images/eucalyptus.jpg',
          category: 'oils',
          inStock: true
        }
      ];
      setProducts(localProducts);
    } finally {
      setLoading(false);
    }
  };

  const filterProducts = () => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.includes(searchTerm) ||
        product.description.includes(searchTerm)
      );
    }

    setFilteredProducts(filtered);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    // Show success message with better UX
    const message = document.createElement('div');
    message.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #4CAF50;
      color: white;
      padding: 16px 24px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 1000;
      font-weight: 500;
      animation: slideIn 0.3s ease-out;
    `;
    message.textContent = `הוספת ${product.name} לעגלה בהצלחה!`;
    document.body.appendChild(message);
    
    setTimeout(() => {
      message.style.animation = 'slideOut 0.3s ease-in';
      setTimeout(() => document.body.removeChild(message), 300);
    }, 2000);
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>חנות המוצרים</h1>
          <p>
            מגוון רחב של מוצרים טבעיים ואיכותיים לרפואה סינית.
            כל המוצרים נבחרים בקפידה ומתאימים לטיפול טבעי ובריא.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="section" style={{ background: 'var(--primary-pastel)' }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{ position: 'relative', minWidth: '300px' }}>
              <FaSearch style={{ 
                position: 'absolute', 
                right: '12px', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: 'var(--text-light)'
              }} />
              <input
                type="text"
                placeholder="חיפוש מוצרים..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input"
                style={{ paddingRight: '40px' }}
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="form-input"
              style={{ minWidth: '150px' }}
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section">
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <h3>לא נמצאו מוצרים</h3>
              <p>נסה לשנות את החיפוש או הקטגוריה</p>
            </div>
          ) : (
            <div className="grid grid-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ 
                      display: 'none',
                      width: '100%', 
                      height: '100%', 
                      background: 'var(--sage-pastel)',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '3rem',
                      color: '#667eea'
                    }}>
                      🌿
                    </div>
                  </div>
                  
                  <div className="product-content">
                    <h3 className="product-title">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-price">₪{product.price}</div>
                    
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="btn btn-primary"
                      style={{ width: '100%' }}
                    >
                      <FaShoppingCart style={{ marginLeft: '8px' }} />
                      הוסף לעגלה
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Categories Info */}
      <section className="section" style={{ background: 'var(--secondary-pastel)' }}>
        <div className="container">
          <h2 className="text-center mb-4">קטגוריות המוצרים</h2>
          <div className="grid grid-4">
            <div className="card text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#667eea' }}>🍵</div>
              <h4>תה צמחים</h4>
              <p>תערובות צמחים טבעיות להרגעה, אנרגיה ובריאות</p>
            </div>
            
            <div className="card text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#667eea' }}>💧</div>
              <h4>שמנים אתריים</h4>
              <p>שמנים טבעיים לטיפול בעור, הרגעה וריפוי</p>
            </div>
            
            <div className="card text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#667eea' }}>🛠️</div>
              <h4>כלי טיפול</h4>
              <p>כלים מקצועיים לטיפולים ברפואה סינית</p>
            </div>
            
            <div className="card text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#667eea' }}>🧘</div>
              <h4>אביזרים</h4>
              <p>אביזרים נלווים לטיפולים ובריאות כללית</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
