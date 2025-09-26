import React, { useState } from 'react';

// Mock data
const livestockData = {
  cows: {
    name: 'Cows',
    image: 'https://images.unsplash.com/photo-1500595046743-ddf4d4d31597?w=800&q=80',
    healthTips: 'Ensure regular hoof trimming to prevent lameness. Monitor for signs of mastitis, such as udder swelling or abnormal milk. Provide clean water and a balanced diet with sufficient roughage.',
    vaccinations: 'Administer vaccines for bovine respiratory disease and clostridial infections annually. Deworm regularly and consult a vet for a tailored vaccination schedule.',
    byProducts: 'Cow milk can be processed into cheese, yogurt, or butter. Manure can be composted for organic fertilizer, enhancing soil fertility for crop production.',
    alerts: 'Set reminders for annual vaccinations (e.g., IBR, BVD). Check for parasites monthly and schedule vet check-ups every 6 months to maintain herd health.'
  },
  chickens: {
    name: 'Chickens',
    image: 'https://images.unsplash.com/photo-1585704032915-c281c0913357?w=800&q=80',
    healthTips: 'Maintain clean coops to prevent respiratory issues. Provide calcium supplements for strong eggshells. Watch for signs of feather pecking or lethargy.',
    vaccinations: 'Vaccinate against Newcastle disease and Marek\'s disease at hatching. Regularly clean waterers to prevent bacterial infections like coccidiosis.',
    byProducts: 'Eggs can be sold fresh or used in baking. Chicken manure is rich in nitrogen and can be composted for garden fertilizer.',
    alerts: 'Schedule vaccinations every 6 months. Monitor flock behavior weekly for early signs of illness. Replace bedding monthly to maintain hygiene.'
  },
  sheep: {
    name: 'Sheep',
    image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?w=800&q=80',
    healthTips: 'Check for foot rot regularly, especially in wet conditions. Provide mineral supplements to prevent deficiencies. Shear annually to prevent overheating.',
    vaccinations: 'Vaccinate against clostridial diseases and tetanus. Deworm every 3-4 months based on fecal egg counts. Consult a vet for tailored care plans.',
    byProducts: 'Wool can be spun into yarn for textiles. Sheep milk can be used for specialty cheeses. Lanolin from wool is valuable for cosmetics.',
    alerts: 'Schedule shearing in spring. Monitor for parasites bi-monthly. Set reminders for booster shots and annual health checks with a vet.'
  }
};

const successStories = [
  {
    title: "John's Dairy Triumph",
    content: "John, a third-generation dairy farmer, transformed his small herd into a thriving business by implementing regular health checks and a strict vaccination schedule. By using cow manure as fertilizer, he boosted crop yields by 30%, creating a sustainable cycle. His innovative approach to milk processing led to a popular local yogurt brand, now sold in regional markets."
  },
  {
    title: "Maria's Egg Empire",
    content: "Maria started with just 50 chickens and faced challenges with disease outbreaks. After adopting rigorous coop hygiene and vaccination protocols, her flock grew to 500. She now supplies eggs to local restaurants and uses chicken manure to fertilize her organic vegetable garden, doubling her farm's income."
  },
  {
    title: "Ahmed's Wool Venture",
    content: "Ahmed revived his family's sheep farm by focusing on wool quality. Regular shearing and parasite control improved his flock's health, leading to premium wool sales. He also started producing lanolin-based skincare products, creating a new revenue stream that funded farm expansion."
  }
];

const HealthTips = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAnimalSelect = (animal) => {
    setSelectedAnimal(animal);
    setDropdownOpen(false);
  };

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideDown {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 300px; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .grid-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }
        
        .dropdown-menu {
          animation: slideDown 0.3s ease-out;
        }
        
        .animal-section {
          animation: fadeIn 0.6s ease-out;
        }
        
        .success-story:hover {
          transform: translateX(10px);
          box-shadow: 0 8px 16px rgba(76, 175, 80, 0.2);
        }
        
        .nav-link:hover {
          transform: translateY(-2px);
        }
        
        .search-input:focus {
          width: 250px;
        }
        
        .btn-primary:hover {
          background: linear-gradient(135deg, #43a047, #2e7d32);
          transform: scale(1.05);
        }
      `}</style>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>
            <span style={styles.logoIcon}>🌾</span>
            FarmersHub
          </div>
          
          <div style={styles.menu}>
            <a href="#" style={styles.navLink} className="nav-link">Home</a>
            
            {/* Dropdown */}
            <div 
              style={styles.dropdownContainer}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button style={styles.dropdownButton}>
                Livestock <span style={styles.arrow}>▼</span>
              </button>
              {dropdownOpen && (
                <div style={styles.dropdownMenu} className="dropdown-menu">
                  <a 
                    onClick={() => handleAnimalSelect('cows')}
                    style={{
                      ...styles.dropdownItem,
                      ...(selectedAnimal === 'cows' ? styles.dropdownItemActive : {})
                    }}
                  >
                    🐄 Cows
                  </a>
                  <a 
                    onClick={() => handleAnimalSelect('chickens')}
                    style={{
                      ...styles.dropdownItem,
                      ...(selectedAnimal === 'chickens' ? styles.dropdownItemActive : {})
                    }}
                  >
                    🐔 Chickens
                  </a>
                  <a 
                    onClick={() => handleAnimalSelect('sheep')}
                    style={{
                      ...styles.dropdownItem,
                      ...(selectedAnimal === 'sheep' ? styles.dropdownItemActive : {})
                    }}
                  >
                    🐑 Sheep
                  </a>
                </div>
              )}
            </div>
            
            <a href="#" style={styles.navLink} className="nav-link">Contact</a>
            <a href="#" style={styles.navLink} className="nav-link">About Us</a>
            
            <div style={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={styles.searchInput}
                className="search-input"
              />
              <span style={styles.searchIcon}>🔍</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={styles.main}>
        {/* Hero Section */}
        <div style={styles.heroSection}>
          <h1 style={styles.heroTitle}>Livestock Health Tips</h1>
          <p style={styles.heroSubtitle}>
            Your comprehensive guide to maintaining healthy and productive livestock
          </p>
        </div>

        {/* Instructions or Animal Details */}
        {!selectedAnimal ? (
          <div style={styles.instructionSection}>
            <div style={styles.instructionCard}>
              <h2 style={styles.instructionTitle}>Welcome to FarmersHub</h2>
              <p style={styles.instructionText}>
                Select an animal from the Livestock dropdown menu above to view comprehensive health tips, 
                vaccination schedules, by-product uses, and important alerts.
              </p>
              <div style={styles.featureGrid}>
                <div style={styles.featureCard}>
                  <span style={styles.featureIcon}>💊</span>
                  <h3>Health Management</h3>
                  <p>Expert tips for maintaining optimal livestock health</p>
                </div>
                <div style={styles.featureCard}>
                  <span style={styles.featureIcon}>💉</span>
                  <h3>Vaccination Schedules</h3>
                  <p>Stay on top of important immunizations</p>
                </div>
                <div style={styles.featureCard}>
                  <span style={styles.featureIcon}>📦</span>
                  <h3>By-Product Uses</h3>
                  <p>Maximize value from your livestock</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <section style={styles.animalSection} className="animal-section">
            <h2 style={styles.animalTitle}>{livestockData[selectedAnimal].name}</h2>
            <img 
              src={livestockData[selectedAnimal].image} 
              alt={livestockData[selectedAnimal].name}
              style={styles.animalImage}
            />
            
            <div style={styles.gridContainer}>
              <div style={styles.gridCard} className="grid-card">
                <div style={styles.cardIcon}>🏥</div>
                <h3 style={styles.cardTitle}>Health Tips</h3>
                <p style={styles.cardContent}>{livestockData[selectedAnimal].healthTips}</p>
              </div>
              
              <div style={styles.gridCard} className="grid-card">
                <div style={styles.cardIcon}>💉</div>
                <h3 style={styles.cardTitle}>Vaccinations & Care</h3>
                <p style={styles.cardContent}>{livestockData[selectedAnimal].vaccinations}</p>
              </div>
              
              <div style={styles.gridCard} className="grid-card">
                <div style={styles.cardIcon}>📦</div>
                <h3 style={styles.cardTitle}>By-product Uses</h3>
                <p style={styles.cardContent}>{livestockData[selectedAnimal].byProducts}</p>
              </div>
              
              <div style={styles.gridCard} className="grid-card">
                <div style={styles.cardIcon}>🔔</div>
                <h3 style={styles.cardTitle}>Alerts & Reminders</h3>
                <p style={styles.cardContent}>{livestockData[selectedAnimal].alerts}</p>
              </div>
            </div>
          </section>
        )}

        {/* Success Stories */}
        <section style={styles.successSection}>
          <h2 style={styles.sectionTitle}>Farmer Success Stories</h2>
          <div style={styles.storiesContainer}>
            {successStories.map((story, index) => (
              <div key={index} style={styles.successStory} className="success-story">
                <div style={styles.storyIcon}>🌟</div>
                <h3 style={styles.storyTitle}>{story.title}</h3>
                <p style={styles.storyContent}>{story.content}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p>© 2025 FarmersHub. All rights reserved.</p>
          <p style={styles.footerTagline}>Growing Together, Thriving Together 🌱</p>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    background: 'linear-gradient(to bottom, #f0f9f0, #ffffff)',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
  },
  nav: {
    background: 'linear-gradient(135deg, #4CAF50, #388E3C)',
    color: 'white',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  logoIcon: {
    fontSize: '2rem',
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  dropdownContainer: {
    position: 'relative',
  },
  dropdownButton: {
    background: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  arrow: {
    fontSize: '0.8rem',
    transition: 'transform 0.3s ease',
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    background: 'white',
    borderRadius: '8px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
    marginTop: '0.5rem',
    overflow: 'hidden',
    minWidth: '180px',
  },
  dropdownItem: {
    display: 'block',
    padding: '0.75rem 1.5rem',
    color: '#333',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    borderBottom: '1px solid #f0f0f0',
  },
  dropdownItemActive: {
    background: 'linear-gradient(135deg, #4CAF50, #66BB6A)',
    color: 'white',
  },
  searchContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    padding: '0.5rem 2.5rem 0.5rem 1rem',
    borderRadius: '25px',
    border: 'none',
    width: '200px',
    transition: 'width 0.3s ease',
    fontSize: '0.9rem',
  },
  searchIcon: {
    position: 'absolute',
    right: '10px',
    fontSize: '1rem',
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  },
  heroSection: {
    textAlign: 'center',
    padding: '3rem 0',
    background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(139, 195, 74, 0.1))',
    borderRadius: '15px',
    marginBottom: '2rem',
  },
  heroTitle: {
    fontSize: '3rem',
    color: '#2E7D32',
    marginBottom: '1rem',
    fontWeight: 'bold',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    color: '#558B2F',
  },
  instructionSection: {
    marginBottom: '3rem',
  },
  instructionCard: {
    background: 'white',
    padding: '3rem',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
    textAlign: 'center',
  },
  instructionTitle: {
    fontSize: '2rem',
    color: '#2E7D32',
    marginBottom: '1rem',
  },
  instructionText: {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '2rem',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
  },
  featureCard: {
    padding: '2rem',
    background: 'linear-gradient(135deg, #f5f5f5, #fafafa)',
    borderRadius: '10px',
    transition: 'transform 0.3s ease',
  },
  featureIcon: {
    fontSize: '3rem',
    display: 'block',
    marginBottom: '1rem',
  },
  animalSection: {
    marginBottom: '3rem',
  },
  animalTitle: {
    fontSize: '2.5rem',
    color: '#2E7D32',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  animalImage: {
    width: '100%',
    maxWidth: '800px',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '15px',
    margin: '0 auto 3rem',
    display: 'block',
    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  gridCard: {
    background: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
  },
  cardIcon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    display: 'block',
  },
  cardTitle: {
    fontSize: '1.3rem',
    color: '#2E7D32',
    marginBottom: '1rem',
    fontWeight: '600',
  },
  cardContent: {
    color: '#555',
    lineHeight: '1.6',
    fontSize: '0.95rem',
  },
  successSection: {
    marginTop: '4rem',
    marginBottom: '2rem',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    color: '#2E7D32',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  storiesContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  successStory: {
    background: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    borderLeft: '4px solid #4CAF50',
    transition: 'all 0.3s ease',
    position: 'relative',
    paddingLeft: '4rem',
  },
  storyIcon: {
    position: 'absolute',
    left: '1.5rem',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '2rem',
  },
  storyTitle: {
    fontSize: '1.4rem',
    color: '#2E7D32',
    marginBottom: '1rem',
    fontWeight: '600',
  },
  storyContent: {
    color: '#555',
    lineHeight: '1.7',
  },
  footer: {
    background: 'linear-gradient(135deg, #4CAF50, #388E3C)',
    color: 'white',
    padding: '2rem 0',
    marginTop: '4rem',
  },
  footerContent: {
    textAlign: 'center',
  },
  footerTagline: {
    marginTop: '0.5rem',
    fontSize: '0.9rem',
    opacity: '0.9',
  },
};

export default HealthTips;