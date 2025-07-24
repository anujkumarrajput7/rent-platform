import React from 'react';

const Home = () => {
  return (
    <div className="container" style={styles.container}>
      <h1 style={styles.heading}>🏠 Welcome to Rentify</h1>
      <p style={styles.subheading}>Rent properties, furniture, appliances, and more – all in one place!</p>

      {/* 🔍 Search */}
      <div style={styles.searchBox}>
        <input type="text" placeholder="Search for homes, furniture, vehicles..." style={styles.searchInput} />
        <button style={styles.searchButton}>Search</button>
      </div>

      {/* 🏷️ Main Categories */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Main Categories</h2>
        <div style={styles.categories}>
          <div style={styles.category}>🏠 House</div>
          <div style={styles.category}>🏢 Flat</div>
          <div style={styles.category}>🛏️ PG / Room</div>
        </div>
      </div>

      {/* 🛠️ Product Rentals */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Rent Products & Items</h2>
        <div style={styles.categories}>
          {/* Appliances */}
          <div style={styles.category}>❄️ AC</div>
          <div style={styles.category}>🧊 Fridge</div>
          <div style={styles.category}>🌀 Fan</div>
          <div style={styles.category}>🌬️ Cooler</div>

          {/* Vehicles */}
          <div style={styles.category}>🏍️ Bike</div>
          <div style={styles.category}>🚗 Car</div>

          {/* Furniture */}
          <div style={styles.category}>🪑 Chair</div>
          <div style={styles.category}>🛋️ Table</div>
          <div style={styles.category}>🪞 Mirror</div>
          <div style={styles.category}>🛏️ Bed</div>

          {/* Others */}
          <div style={styles.category}>📺 TV</div>
          <div style={styles.category}>🧺 Washing Machine</div>
          <div style={styles.category}>🖌️ Wall Color</div>
        </div>
      </div>

      {/* 📋 How It Works */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <ol>
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

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '900px',
    margin: 'auto',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#1878d9',
  },
  subheading: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  searchBox: {
    display: 'flex',
    marginBottom: '2rem',
  },
  searchInput: {
    flex: 1,
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '4px 0 0 4px',
  },
  searchButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#1878d9',
    color: 'yellow',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
  },
  section: {
    marginBottom: '2.5rem',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  categories: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  category: {
    padding: '1rem',
    backgroundColor: '#b73f3fff',
    borderRadius: '8px',
    textAlign: 'center',
    minWidth: '120px',
    cursor: 'pointer',
  },
  cta: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#3f7cc1ff',
    borderRadius: '8px',
  },
  registerBtn: {
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    backgroundColor: '#1878d9',
    color: 'red',
    border: 'none',
    borderRadius: '6px',
    marginTop: '1rem',
    cursor: 'pointer',
  },
};

export default Home;
