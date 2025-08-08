import React from 'react';

const Home = () => {
  return (
    <div className="container" style={styles.container}>
      <h1 style={styles.heading}>🏠 Welcome to Rentify</h1>
      <p style={styles.subheading}>
        Rent properties, furniture, appliances, and more – all in one place!
      </p>

      {/* 🔍 Search */}
      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="Search for homes, furniture, vehicles..."
          style={styles.searchInput}
        />
        <button style={styles.searchButton}>Search</button>
      </div>

      {/* 🏷️ Main Categories */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Main Categories</h2>
        <div style={styles.mainCategories}>
          {mainCategoryData.map((cat, idx) => (
            <div style={styles.mainCategoryCard} key={idx}>
              <img
                src={cat.image}
                alt={cat.name}
                style={styles.categoryImage}
              />
              <p>{cat.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🛠️ Product Rentals */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Rent Products & Items</h2>
        <div style={styles.categories}>
          {productCategories.map((cat, idx) => (
            <div style={styles.category} key={idx}>
              {cat}
            </div>
          ))}
        </div>
      </div>

      {/* 📋 How It Works */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <ol style={styles.steps}>
          <li>🔍 Search for a product or property</li>
          <li>📝 Contact the owner or list your item</li>
          <li>🤝 Finalize the rent deal & enjoy!</li>
        </ol>
      </div>

      {/* 📞 CTA */}
      <div style={styles.cta}>
        <h2>List or Rent Anything!</h2>
        <p>From homes to household items, Rentify is your rental companion.</p>
        <button style={styles.registerBtn}>Start Now</button>
      </div>
    </div>
  );
};

const mainCategoryData = [
  { name: 'House', image: '/image/house.jpg' },
  { name: 'Flat', image: '/image/flat.jpg' },
  { name: 'PG', image: '/image/pg.jpg' },
];

const productCategories = [
  '❄️ AC', '🧊 Fridge', '🌀 Fan', '🌬️ Cooler',
  '🏍️ Bike', '🚗 Car',
  '🪑 Chair', '🛋️ Table', '🪞 Mirror', '🛏️ Bed',
  '📺 TV', '🧺 Washing Machine', '🖌️ Wall Color'
];

const styles = {
  container: {
    padding: '2rem',
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    maxWidth: '1000px',
    margin: 'auto',
    color: '#213547',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#1878d9',
    marginBottom: '0.5rem',
  },
  subheading: {
    fontSize: '1.1rem',
    marginBottom: '2rem',
    color: '#555',
  },
  searchBox: {
    display: 'flex',
    marginBottom: '2rem',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    borderRadius: '6px',
    overflow: 'hidden',
  },
  searchInput: {
    flex: 1,
    padding: '0.75rem',
    border: 'none',
    outline: 'none',
    fontSize: '1rem',
  },
  searchButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#1878d9',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  section: {
    marginBottom: '2.5rem',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    borderBottom: '2px solid #1878d9',
    paddingBottom: '0.3rem',
  },
  mainCategories: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  mainCategoryCard: {
    flex: '1 1 150px',
    padding: '1rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  },
  categoryImage: {
    width: '100px',
    height: '100px',
    borderRadius: '8px',
    objectFit: 'cover',
    marginBottom: '0.5rem',
  },
  categories: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  category: {
    padding: '1rem',
    backgroundColor: '#4CAF50',
    color: '#fff',
    borderRadius: '8px',
    textAlign: 'center',
    minWidth: '120px',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
  steps: {
    lineHeight: '1.8',
  },
  cta: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#3183cb',
    borderRadius: '8px',
    color: '#fff',
  },
  registerBtn: {
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    marginTop: '1rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
};

export default Home;
