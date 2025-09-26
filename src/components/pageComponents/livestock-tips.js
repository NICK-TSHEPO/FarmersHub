<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from 'react';

// Simple SVG Icons
const ChevronDown = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const Search = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const Heart = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const Droplets = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5v12a4 4 0 01-4 4h-4V3h4a2 2 0 012 2z" />
  </svg>
);

const Award = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const AlertTriangle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L4.348 16.5c-.77.833.192 2.5 1.732 2.5z" />
  </svg>
);

const Calendar = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const Scissors = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1M9 16a3 3 0 110-6 3 3 0 010 6zm0 0a3 3 0 110-6 3 3 0 010 6z" />
  </svg>
);

const LivestockPage = () => {
  const [selectedAnimal, setSelectedAnimal] = useState('cows');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mock data for livestock
  const livestockData = {
    cows: {
      id: 'cows',
      name: 'Cows',
      image: 'https://images.unsplash.com/photo-1500595046743-ddf4d4d31597?w=800',
      healthTips: {
        title: 'Health Tips',
        content: 'Ensure regular hoof trimming to prevent lameness. Monitor for signs of mastitis, such as udder swelling or abnormal milk. Provide clean water and a balanced diet with sufficient roughage.',
        icon: <Heart className="w-4 h-4" />
      },
      vaccinations: {
        title: 'Vaccinations & Care',
        content: 'Administer vaccines for bovine respiratory disease and clostridial infections annually. Deworm regularly and consult a vet for a tailored vaccination schedule.',
        icon: <Droplets className="w-4 h-4" />
      },
      byproducts: {
        title: 'By-product Uses',
        content: 'Cow milk can be processed into cheese, yogurt, or butter. Manure can be composted for organic fertilizer, enhancing soil fertility for crop production.',
        icon: <Award className="w-4 h-4" />
      },
      alerts: {
        title: 'Alerts & Reminders',
        content: 'Set reminders for annual vaccinations (e.g., IBR, BVD). Check for parasites monthly and schedule vet check-ups every 6 months to maintain herd health.',
        icon: <AlertTriangle className="w-4 h-4" />
      }
    },
    chickens: {
      id: 'chickens',
      name: 'Chickens',
      image: 'https://images.unsplash.com/photo-1585704032915-c281c0913357?w=800',
      healthTips: {
        title: 'Health Tips',
        content: 'Maintain clean coops to prevent respiratory issues. Provide calcium supplements for strong eggshells. Watch for signs of feather pecking or lethargy.',
        icon: <Heart className="w-4 h-4" />
      },
      vaccinations: {
        title: 'Vaccinations & Care',
        content: 'Vaccinate against Newcastle disease and Marek\'s disease at hatching. Regularly clean waterers to prevent bacterial infections like coccidiosis.',
        icon: <Droplets className="w-4 h-4" />
      },
      byproducts: {
        title: 'By-product Uses',
        content: 'Eggs can be sold fresh or used in baking. Chicken manure is rich in nitrogen and can be composted for garden fertilizer.',
        icon: <Award className="w-4 h-4" />
      },
      alerts: {
        title: 'Alerts & Reminders',
        content: 'Schedule vaccinations every 6 months. Monitor flock behavior weekly for early signs of illness. Replace bedding monthly to maintain hygiene.',
        icon: <AlertTriangle className="w-4 h-4" />
      }
    },
    sheep: {
      id: 'sheep',
      name: 'Sheep',
      image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?w=800',
      healthTips: {
        title: 'Health Tips',
        content: 'Check for foot rot regularly, especially in wet conditions. Provide mineral supplements to prevent deficiencies. Shear annually to prevent overheating.',
        icon: <Heart className="w-4 h-4" />
      },
      vaccinations: {
        title: 'Vaccinations & Care',
        content: 'Vaccinate against clostridial diseases and tetanus. Deworm every 3-4 months based on fecal egg counts. Consult a vet for tailored care plans.',
        icon: <Droplets className="w-4 h-4" />
      },
      byproducts: {
        title: 'By-product Uses',
        content: 'Wool can be spun into yarn for textiles. Sheep milk can be used for specialty cheeses. Lanolin from wool is valuable for cosmetics.',
        icon: <Scissors className="w-4 h-4" />
      },
      alerts: {
        title: 'Alerts & Reminders',
        content: 'Schedule shearing in spring. Monitor for parasites bi-monthly. Set reminders for booster shots and annual health checks with a vet.',
        icon: <Calendar className="w-4 h-4" />
      }
    }
>>>>>>> acb8a427e6ab61c594bc348070b322fe55434563
  };

  const successStories = [
    {
      id: 1,
      title: "John's Dairy Triumph",
      content: "John, a third-generation dairy farmer, transformed his small herd into a thriving business by implementing regular health checks and a strict vaccination schedule. By using cow manure as fertilizer, he boosted crop yields by 30%, creating a sustainable cycle. His innovative approach to milk processing led to a popular local yogurt brand, now sold in regional markets.",
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      id: 2,
      title: "Maria's Egg Empire",
      content: "Maria started with just 50 chickens and faced challenges with disease outbreaks. After adopting rigorous coop hygiene and vaccination protocols, her flock grew to 500. She now supplies eggs to local restaurants and uses chicken manure to fertilize her organic vegetable garden, doubling her farm's income.",
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      id: 3,
      title: "Ahmed's Wool Venture",
      content: "Ahmed revived his family's sheep farm by focusing on wool quality. Regular shearing and parasite control improved his flock's health, leading to premium wool sales. He also started producing lanolin-based skincare products, creating a new revenue stream that funded farm expansion.",
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  const handleAnimalSelect = (animalKey) => {
    setSelectedAnimal(animalKey);
    setDropdownOpen(false);
  };

  const AnimalCard = ({ data, icon, delay = 0 }) => (
    <div 
      className={`bg-white rounded-lg shadow-md card-hover overflow-hidden group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-1 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:from-green-500 group-hover:to-emerald-600 transition-all duration-300"></div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="p-1.5 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg mr-2 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300">
            {icon}
          </div>
          <h4 className="text-base font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">{data.title}</h4>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{data.content}</p>
      </div>
    </div>
  );

  const SuccessStoryCard = ({ story, delay = 0 }) => (
    <div 
      className={`bg-white rounded-lg shadow-md card-hover overflow-hidden border-l-4 border-green-500 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-5">
        <div className="flex items-center mb-3">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${story.gradient} flex items-center justify-center mr-3`}>
            <Award className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors duration-300">{story.title}</h3>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{story.content}</p>
      </div>
    </div>
  );

  return (
<<<<<<< HEAD
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
=======
    <>
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.6s ease-out forwards;
        }
        
        .hover-scale-102:hover {
          transform: scale(1.02);
        }

        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .tab-button {
          transition: all 0.3s ease;
        }

        .tab-button:hover {
          transform: translateY(-1px);
        }

        .gradient-text {
          background: linear-gradient(45deg, #10b981, #059669);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">

        {/* Navigation */}
        <nav className="bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg sticky top-0 z-50 backdrop-blur-md">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="text-xl font-bold hover:text-green-200 transition-colors duration-300 cursor-pointer">
                FarmerHub
              </div>
              
              {/* Menu */}
              <div className="flex space-x-6 items-center">
                <a href="#" className="hover:text-green-200 transition-colors duration-300 font-medium text-sm">Home</a>
                
                {/* Dropdown */}
                <div className="relative">
                  <button 
                    className="flex items-center space-x-1 hover:text-green-200 transition-colors duration-300 font-medium text-sm"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <span>Quick Select</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden z-50 animate-fade-in-up">
                      {Object.keys(livestockData).map((key, index) => (
                        <button
                          key={key}
                          onClick={() => handleAnimalSelect(key)}
                          className={`block w-full text-left px-3 py-2 text-sm hover:bg-green-50 transition-colors duration-200 ${
                            selectedAnimal === key ? 'bg-green-100 text-green-700 font-medium' : ''
                          }`}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          {livestockData[key].name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                <a href="#" className="hover:text-green-200 transition-colors duration-300 font-medium text-sm">Contact</a>
                <a href="#" className="hover:text-green-200 transition-colors duration-300 font-medium text-sm">About Us</a>
                
                {/* Search Bar */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8 pr-3 py-1.5 text-sm rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-6">
          {/* Livestock Section */}
          <section className="mb-10">
            <div className={`text-center mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 gradient-text">
                Livestock Health Management
              </h1>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Comprehensive health tips, vaccination schedules, and care guidelines for your livestock. Select an animal type to get started.
              </p>
            </div>

            {/* Animal Selection Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg shadow-md p-1 flex space-x-1">
                {Object.keys(livestockData).map((key) => (
                  <button
                    key={key}
                    onClick={() => handleAnimalSelect(key)}
                    className={`px-4 py-2 rounded-md transition-all duration-300 tab-button ${
                      selectedAnimal === key 
                        ? 'bg-green-500 text-white shadow-md' 
                        : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                    }`}
                  >
                    {livestockData[key].name}
                  </button>
                ))}
              </div>
            </div>

            {selectedAnimal && (
              <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
                <div className="text-center mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-green-700 mb-3">
                    {livestockData[selectedAnimal].name} Care Guide
                  </h2>
                  <div className="relative inline-block">
                    <img
                      src={livestockData[selectedAnimal].image}
                      alt={livestockData[selectedAnimal].name}
                      className="w-full max-w-sm h-48 object-cover rounded-xl shadow-md mx-auto"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <AnimalCard 
                    data={livestockData[selectedAnimal].healthTips} 
                    icon={livestockData[selectedAnimal].healthTips.icon}
                    delay={100}
                  />
                  <AnimalCard 
                    data={livestockData[selectedAnimal].vaccinations} 
                    icon={livestockData[selectedAnimal].vaccinations.icon}
                    delay={200}
                  />
                  <AnimalCard 
                    data={livestockData[selectedAnimal].byproducts} 
                    icon={livestockData[selectedAnimal].byproducts.icon}
                    delay={300}
                  />
                  <AnimalCard 
                    data={livestockData[selectedAnimal].alerts} 
                    icon={livestockData[selectedAnimal].alerts.icon}
                    delay={400}
                  />
                </div>
              </div>
            )}
          </section>

          {/* Success Stories */}
          <section>
            <div className={`text-center mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                Farmer Success Stories
              </h2>
              <p className="text-base text-gray-600 max-w-xl mx-auto">
                Real stories from farmers who transformed their operations with proper livestock care.
              </p>
            </div>
            
            <div className="space-y-6">
              {successStories.map((story, index) => (
                <SuccessStoryCard 
                  key={story.id} 
                  story={story} 
                  delay={500 + index * 100}
                />
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-6 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">&copy; 2025 FarmerHub. All rights reserved.</p>
            <p className="text-green-200 mt-1 text-xs">Empowering farmers with knowledge and tools for success.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LivestockPage;
>>>>>>> acb8a427e6ab61c594bc348070b322fe55434563
