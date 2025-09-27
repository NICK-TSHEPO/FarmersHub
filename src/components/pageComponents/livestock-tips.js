import React, { useState } from 'react';
import milkedCow from './pictures/milked_cow.jpg';
import poultryFarm from './pictures/poultry_farm.jpeg';
import goatsFarm from './pictures/goats_farm.jpeg';
import goatCheese from './pictures/goat_cheese.jpeg';
import sheepBreeding from './pictures/sheep_breeding.jpeg';
import chickenFarming from './pictures/chicken_farming.jpeg';
import cattleRanch from './pictures/cattle_ranch.jpeg';




const LivestockPage = () => {
  const [selectedAnimal, setSelectedAnimal] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);

  const animals = ['All', 'Cattle', 'Sheep', 'Goats', 'Poultry'];

  const tips = [
    { id: 1, animal: 'Cattle', title: 'Cattle Vaccination Schedule', content: 'Vaccinate every 6 months for foot and mouth disease.' },
    { id: 2, animal: 'Sheep', title: 'Sheep Deworming', content: 'Deworm every 3 months to maintain good health.' },
    { id: 3, animal: 'Goats', title: 'Goat Care Routine', content: 'Provide clean water and check for ticks weekly.' },
    { id: 4, animal: 'Poultry', title: 'Poultry Feeding Routine', content: 'Feed layer mash daily and ensure clean water at all times.' },
    { id: 5, animal: 'Cattle', title: 'Cattle Health Check', content: 'Check temperature and appetite weekly for early illness signs.' },
  ];

  const stories = [
    { 
      id: 1, 
      title: 'Thabo Molefe\'s Dairy Success', 
      image: milkedCow,
      summary: 'Thabo increased milk production by 30% after following our vaccination tips and implementing proper nutrition.',
      location: 'North West Province',
      achievement: '30% increase in milk production',
      contact: 'thabo.molefe@gmail.com',
      phone: '+27 82 123 4567'
    },
    { 
      id: 2, 
      title: 'Lerato Mthembu\'s Poultry Empire', 
      image: poultryFarm,
      summary: 'Lerato\'s small poultry farm grew from 50 to 500 chickens using proper health management and biosecurity.',
      location: 'KwaZulu-Natal',
      achievement: '900% flock growth in 18 months',
      contact: 'lerato.poultry@outlook.com',
      phone: '+27 73 987 6543'
    },
    { 
      id: 3, 
      title: 'Community Goat Initiative', 
      image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&h=250&fit=crop', 
      summary: 'A community goat project in Limpopo now sustains 10 families through cooperative farming.',
      location: 'Limpopo Province',
      achievement: 'Supports 10 families monthly',
      contact: 'goats.coop@gmail.com',
      phone: '+27 76 555 0123'
    },
    { 
      id: 4, 
      title: 'Maria Ndaba\'s Sheep Wool Success', 
      image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?w=400&h=250&fit=crop', 
      summary: 'Maria transformed her family\'s struggling sheep farm into a profitable wool business serving textile companies.',
      location: 'Eastern Cape',
      achievement: 'R25,000 monthly wool income',
      contact: 'maria.wool@yahoo.com',
      phone: '+27 41 234 5678'
    },
    { 
      id: 5, 
      title: 'John Sithole\'s Organic Cattle Ranch', 
      image: cattleRanch,
      summary: 'John converted to organic cattle farming and now supplies premium beef to restaurants in Johannesburg.',
      location: 'Gauteng',
      achievement: 'Premium organic certification',
      contact: 'john.organic@farmmail.co.za',
      phone: '+27 11 876 5432'
    },
    { 
      id: 6, 
      title: 'Grace Mahlangu\'s Free-Range Chickens', 
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&h=250&fit=crop', 
      summary: 'Grace built a successful free-range chicken business supplying organic eggs to local markets.',
      location: 'Mpumalanga',
      achievement: '80% increase in egg prices',
      contact: 'grace.freerange@gmail.com',
      phone: '+27 13 789 0123'
    },
    { 
      id: 7, 
      title: 'Ahmed Hassan\'s Goat Cheese Business',
      image: goatCheese,
      summary: 'Ahmed started producing artisan goat cheese and now supplies high-end restaurants in Cape Town.',
      location: 'Western Cape',
      achievement: 'Artisan cheese certification',
      contact: 'ahmed.cheese@capetown.co.za',
      phone: '+27 21 456 7890'
    },
    { 
      id: 8, 
      title: 'Nomsa Khumalo\'s Sheep Breeding Program',
      image: sheepBreeding, 
      summary: 'Nomsa developed a selective breeding program that improved her flock\'s resistance to local diseases.',
      location: 'Free State',
      achievement: '50% reduction in veterinary costs',
      contact: 'nomsa.breeding@freestate.co.za',
      phone: '+27 51 234 8765'
    },
    { 
      id: 9, 
      title: 'Sipho Dlamini\'s Integrated Farming', 
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=250&fit=crop', 
      summary: 'Sipho combines cattle, chickens, and vegetable farming in an integrated system that maximizes land use.',
      location: 'Mpumalanga',
      achievement: '40% increase in total farm income',
      contact: 'sipho.integrated@farmnet.co.za',
      phone: '+27 13 567 8901'
    },
    { 
      id: 10, 
      title: 'Rebecca Mokoena\'s Poultry Processing', 
      image: chickenFarming,
      summary: 'Rebecca added value to her poultry business by starting a small-scale processing operation.',
      location: 'Northern Cape',
      achievement: 'R15,000 additional monthly income',
      contact: 'rebecca.processing@outlook.com',
      phone: '+27 53 890 1234'
    }
  ];

  const filteredTips = tips.filter((tip) => {
    const matchAnimal = selectedAnimal === 'All' || tip.animal === selectedAnimal;
    const matchSearch =
      tip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tip.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchAnimal && matchSearch;
  });

  const getCardStyle = (cardId) => ({
    ...styles.card,
    ...(hoveredCard === cardId ? styles.cardHover : {})
  });

  const getStoryCardStyle = (storyId) => ({
    ...styles.storyCard,
    ...(hoveredCard === storyId ? styles.storyCardHover : {})
  });

  return (
    <div style={styles.page}>
      <div style={styles.headerContainer}>
        <h1 style={styles.header}>Livestock Health Tips & Farmer Stories</h1>
        <p style={styles.subtitle}>Learn from successful South African farmers and improve your livestock management</p>
      </div>

      {/* Filter + Search */}
      <div style={styles.filterSearchContainer}>
        <div style={styles.filterGroup}>
          <label style={styles.label}>Filter by Animal: </label>
          <select
            value={selectedAnimal}
            onChange={(e) => setSelectedAnimal(e.target.value)}
            style={styles.dropdown}
          >
            {animals.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </div>
        <div style={styles.searchGroup}>
          <input
            type="text"
            placeholder="🔍 Search health tips..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchBar}
          />
        </div>
      </div>

      {/* Health Tips */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>
          <span style={styles.sectionIcon}></span>
          Livestock Health Tips
        </h2>
        <div style={styles.cardContainer}>
          {filteredTips.length > 0 ? (
            filteredTips.map((tip) => (
              <div
                key={tip.id}
                style={getCardStyle(tip.id)}
                onMouseEnter={() => setHoveredCard(tip.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <h3 style={styles.cardTitle}>{tip.title}</h3>
                <p style={styles.cardText}>{tip.content}</p>
                <div style={styles.cardFooter}>
                  <span style={styles.cardAnimal}>🐾 {tip.animal}</span>
                </div>
              </div>
            ))
          ) : (
            <div style={styles.noResults}>
              <div style={styles.noResultsIcon}>🔍</div>
              <p>No tips found for your search.</p>
              <button 
                style={styles.clearButton}
                onClick={() => {setSearchQuery(''); setSelectedAnimal('All');}}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Farmer Stories */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>
          <span style={styles.sectionIcon}>🌟</span>
          Farmer Success Stories
        </h2>
        <div style={styles.storyContainer}>
          {stories.map((story) => (
            <div
              key={story.id}
              style={getStoryCardStyle(`story-${story.id}`)}
              onMouseEnter={() => setHoveredCard(`story-${story.id}`)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.storyImageContainer}>
                <img src={story.image} alt={story.title} style={styles.storyImage} />
                <div style={styles.storyOverlay}>
                  <span style={styles.storyLocation}>📍 {story.location}</span>
                </div>
              </div>
              <div style={styles.storyContent}>
                <h3 style={styles.storyTitle}>{story.title}</h3>
                <p style={styles.storySummary}>{story.summary}</p>
                
                <div style={styles.achievementBadge}>
                  <span style={styles.achievementIcon}>🏆</span>
                  <span style={styles.achievementText}>{story.achievement}</span>
                </div>

                <div style={styles.contactSection}>
                  <div style={styles.contactItem}>
                    <span style={styles.contactIcon}>📧</span>
                    <a 
                      href={`mailto:${story.contact}`} 
                      style={styles.contactLink}
                      title="Send email to this farmer"
                    >
                      {story.contact}
                    </a>
                  </div>
                  <div style={styles.contactItem}>
                    <span style={styles.contactIcon}>📱</span>
                    <a 
                      href={`tel:${story.phone}`} 
                      style={styles.contactLink}
                      title="Call this farmer"
                    >
                      {story.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div style={styles.ctaSection}>
        <h3 style={styles.ctaTitle}>Have Your Own Success Story?</h3>
        <p style={styles.ctaText}>Share your farming journey and inspire other livestock farmers across South Africa</p>
        <a 
          href="mailto:farmstories@farmerhub.co.za"
          //?subject=My%20Livestock%20Success%20Story&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20share%20my%20success%20story:%0D%0A%0D%0AFarm%20Location:%20%0D%0AAnimal%20Type:%20%0D%0ASuccess%20Achievement:%20%0D%0AMy%20Story:%20%0D%0A%0D%0AContact%20Details:%0D%0AName:%20%0D%0AEmail:%20%0D%0APhone:%20%0D%0A%0D%0AThank%20you!"
          style={styles.ctaButton}
          title="Send us your success story via email"
        >
          Share Your Story
        </a>
      </div>
    </div>
  );
};

// Enhanced Styling with better visual hierarchy and modern design
const styles = {
  page: {
    fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
    background: 'linear-gradient(135deg, #f0f9f0 0%, #ffffff 50%, #f9f9f9 100%)',
    color: '#2d3748',
    padding: '0',
    minHeight: '100vh',
    lineHeight: '1.6',
  },
  headerContainer: {
    textAlign: 'center',
    padding: '60px 20px 40px',
    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
    color: 'white',
    marginBottom: '40px',
  },
  header: {
    fontSize: '2.75rem',
    fontWeight: '700',
    marginBottom: '16px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  },
  subtitle: {
    fontSize: '1.2rem',
    opacity: '0.9',
    maxWidth: '600px',
    margin: '0 auto',
    fontWeight: '300',
  },
  filterSearchContainer: {
    margin: '0 20px 40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px',
    flexWrap: 'wrap',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  },
  filterGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  searchGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    fontWeight: '600',
    color: '#16a34a',
    fontSize: '0.95rem',
  },
  dropdown: {
    padding: '12px 16px',
    borderRadius: '12px',
    border: '2px solid #e2e8f0',
    backgroundColor: '#fff',
    color: '#2d3748',
    fontSize: '0.95rem',
    fontWeight: '500',
    outline: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    minWidth: '140px',
  },
  searchBar: {
    padding: '12px 20px',
    borderRadius: '12px',
    border: '2px solid #e2e8f0',
    width: '280px',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'all 0.3s ease',
    backgroundColor: '#fff',
  },
  section: {
    margin: '0 20px 60px',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '32px',
    color: '#16a34a',
    fontSize: '2.2rem',
    fontWeight: '700',
    borderBottom: '3px solid #22c55e',
    paddingBottom: '12px',
  },
  sectionIcon: {
    fontSize: '2rem',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    border: '1px solid #f0f0f0',
    position: 'relative',
    overflow: 'hidden',
  },
  cardHover: {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
    borderColor: '#22c55e',
  },
  cardTitle: {
    color: '#16a34a',
    marginBottom: '16px',
    fontSize: '1.3rem',
    fontWeight: '600',
    lineHeight: '1.3',
  },
  cardText: {
    fontSize: '1rem',
    lineHeight: '1.7',
    color: '#4a5568',
    marginBottom: '16px',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardAnimal: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#8b4513',
    backgroundColor: '#fef5e7',
    padding: '6px 12px',
    borderRadius: '20px',
    border: '1px solid #f6e05e',
  },
  noResults: {
    textAlign: 'center',
    color: '#718096',
    gridColumn: '1 / -1',
    padding: '60px 20px',
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  },
  noResultsIcon: {
    fontSize: '4rem',
    marginBottom: '16px',
  },
  clearButton: {
    marginTop: '16px',
    padding: '12px 24px',
    backgroundColor: '#22c55e',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  storyContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
    gap: '32px',
  },
  storyCard: {
    backgroundColor: '#fff',
    borderRadius: '20px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '1px solid #f0f0f0',
  },
  storyCardHover: {
    transform: 'translateY(-12px)',
    boxShadow: '0 24px 48px rgba(0,0,0,0.2)',
  },
  storyImageContainer: {
    position: 'relative',
    height: '220px',
    overflow: 'hidden',
  },
  storyImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  storyOverlay: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '500',
  },
  storyLocation: {
    color: 'white',
  },
  storyContent: {
    padding: '24px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  storyTitle: {
    margin: '0 0 16px 0',
    color: '#16a34a',
    fontSize: '1.4rem',
    fontWeight: '700',
    lineHeight: '1.3',
  },
  storySummary: {
    fontSize: '1rem',
    lineHeight: '1.7',
    color: '#4a5568',
    marginBottom: '20px',
    flex: 1,
  },
  achievementBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#f0fff4',
    border: '2px solid #9ae6b4',
    borderRadius: '12px',
    padding: '12px 16px',
    marginBottom: '20px',
  },
  achievementIcon: {
    fontSize: '1.2rem',
  },
  achievementText: {
    fontWeight: '600',
    color: '#2f855a',
    fontSize: '0.95rem',
  },
  contactSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    paddingTop: '20px',
    borderTop: '1px solid #e2e8f0',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  contactIcon: {
    fontSize: '1rem',
    width: '20px',
  },
  contactLink: {
    color: '#22c55e',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  },
  ctaSection: {
    textAlign: 'center',
    padding: '60px 20px',
    backgroundColor: '#16a34a',
    color: 'white',
    margin: '60px 20px 0',
    borderRadius: '20px',
  },
  ctaTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '16px',
  },
  ctaText: {
    fontSize: '1.1rem',
    marginBottom: '32px',
    opacity: '0.9',
    maxWidth: '600px',
    margin: '0 auto 32px',
  },
  ctaButton: {
    display: 'inline-block',
    backgroundColor: '#22c55e',
    color: 'white',
    textDecoration: 'none',
    padding: '16px 32px',
    fontSize: '1.1rem',
    fontWeight: '600',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
  },
};

export default LivestockPage;