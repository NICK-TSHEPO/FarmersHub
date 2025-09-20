import React, { useState } from "react";

// Dummy data for crops/products by season
const seasonalData = {
  summer: {
    title: "🌞 Summer (Dec–Feb)",
    crops: [
      {
        id: 1,
        name: "Maize",
        description: "Staple summer crop, high yield.",
        price: "R150 per bag",
        image:
          "https://images.unsplash.com/photo-1592928302844-0502d6a24686?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 2,
        name: "Sorghum",
        description: "Drought-resistant and nutritious grain.",
        price: "R120 per bag",
        image:
          "https://images.unsplash.com/photo-1607305387291-eda9619e9c64?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 3,
        name: "Soybeans",
        description: "High-protein legumes for livestock and people.",
        price: "R200 per bag",
        image:
          "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 4,
        name: "Sunflower",
        description: "Popular oilseed crop with many uses.",
        price: "R180 per bag",
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  autumn: {
    title: "🍂 Autumn (Mar–May)",
    crops: [
      {
        id: 5,
        name: "Dry Beans",
        description: "Rich in protein, ideal for cooler months.",
        price: "R90 per bag",
        image:
          "https://images.unsplash.com/photo-1621413109339-fc3cfec08d48?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 6,
        name: "Broccoli",
        description: "Nutritious and frost-tolerant.",
        price: "R35 per kg",
        image:
          "https://images.unsplash.com/photo-1617196034665-58a3b16130ad?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 7,
        name: "Spinach",
        description: "Fast-growing leafy green.",
        price: "R20 per bunch",
        image:
          "https://images.unsplash.com/photo-1617191519105-cb2c0b77d85e?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 8,
        name: "Cabbage",
        description: "Hardy vegetable, thrives in cool weather.",
        price: "R25 per head",
        image:
          "https://images.unsplash.com/photo-1621939514644-fb7458ebc2c1?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  winter: {
    title: "❄️ Winter (Jun–Aug)",
    crops: [
      {
        id: 9,
        name: "Carrots",
        description: "Root crop rich in Vitamin A.",
        price: "R30 per kg",
        image:
          "https://images.unsplash.com/photo-1567303311878-22fbef1ff9f3?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 10,
        name: "Onions",
        description: "Essential kitchen staple.",
        price: "R40 per bag",
        image:
          "https://images.unsplash.com/photo-1600089463319-5b4c8df29cf2?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 11,
        name: "Garlic",
        description: "Strong-flavored bulb, good for immunity.",
        price: "R50 per kg",
        image:
          "https://images.unsplash.com/photo-1603032869205-ffa6906ad43a?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 12,
        name: "Kale",
        description: "Superfood leafy green, frost-tolerant.",
        price: "R25 per bunch",
        image:
          "https://images.unsplash.com/photo-1598367815098-df8b2a88b73f?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  spring: {
    title: "🌱 Spring (Sep–Nov)",
    crops: [
      {
        id: 13,
        name: "Tomatoes",
        description: "Juicy and versatile fruit-vegetable.",
        price: "R30 per kg",
        image:
          "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 14,
        name: "Peppers",
        description: "Colorful and high in Vitamin C.",
        price: "R40 per kg",
        image:
          "https://images.unsplash.com/photo-1603052875510-4f3e3caa3a48?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 15,
        name: "Cucumbers",
        description: "Refreshing salad essential.",
        price: "R25 per kg",
        image:
          "https://images.unsplash.com/photo-1590595906687-8fd72b1e4f44?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 16,
        name: "Pumpkins",
        description: "Large, nutritious, and long-lasting.",
        price: "R60 each",
        image:
          "https://images.unsplash.com/photo-1603052875507-cb6d2ff7e94d?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
};

const FarmersHub = () => {
  const [activeTab, setActiveTab] = useState("summer");

  const handleTabClick = (season) => {
    setActiveTab(season);
  };

  const { title, crops } = seasonalData[activeTab];

  return (
    <div>
      {/* Reuse your existing styles here */}
      <style>
        {`
          /* Keeping your theme styles */
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Nunito:wght@400;600&display=swap');

          :root {
            --primary-color: #4CAF50;
            --secondary-color: #8B5E3C;
            --accent-color: #F2C94C;
            --background-color: #FAFAF0;
            --text-color: #333;
            --card-bg: #fff;
          }

          body {
            font-family: 'Nunito', sans-serif;
            background-color: var(--background-color);
            margin: 0;
            padding: 0;
            color: var(--text-color);
          }

          header {
            text-align: center;
            padding: 40px 20px;
            background: linear-gradient(
              rgba(76, 175, 80, 0.7),
              rgba(76, 175, 80, 0.7)
            ), url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80');
            background-size: cover;
            background-position: center;
            color: #fff;
            border-bottom: 4px solid var(--secondary-color);
          }

          header h1 {
            font-family: 'Montserrat', sans-serif;
            font-size: 2.5em;
            margin: 0;
          }

          header h2 {
            font-weight: 500;
            color: #f5f5dc;
          }

          .tabs {
            display: flex;
            justify-content: center;
            margin: 20px auto;
            flex-wrap: wrap;
          }

          .tab {
            padding: 12px 20px;
            cursor: pointer;
            margin: 5px;
            border-radius: 25px;
            font-weight: 600;
            background-color: var(--card-bg);
            border: 2px solid var(--primary-color);
            color: var(--primary-color);
            transition: all 0.3s ease;
          }

          .tab:hover {
            background-color: var(--primary-color);
            color: #fff;
          }

          .tab.active {
            background-color: var(--primary-color);
            color: #fff;
            box-shadow: 0px 4px 10px rgba(76, 175, 80, 0.3);
          }

          .tab-content {
            max-width: 1000px;
            margin: 0 auto 30px;
            padding: 20px;
            background: var(--card-bg);
            border-radius: 12px;
            box-shadow: 0px 4px 15px rgba(0,0,0,0.08);
          }

          h3 {
            font-family: 'Montserrat', sans-serif;
            color: var(--primary-color);
          }

          .crops {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
            margin-top: 20px;
          }

          .crop-card {
            background: #fff;
            border-radius: 10px;
            box-shadow: 0px 3px 10px rgba(0,0,0,0.1);
            overflow: hidden;
            transition: transform 0.3s ease;
          }

          .crop-card:hover {
            transform: translateY(-5px);
          }

          .crop-card img {
            width: 100%;
            height: 150px;
            object-fit: cover;
          }

          .crop-card .info {
            padding: 15px;
          }

          .crop-card h4 {
            margin: 0 0 5px;
            font-family: 'Montserrat', sans-serif;
            color: var(--secondary-color);
          }

          .crop-card p {
            margin: 5px 0;
            font-size: 0.9em;
          }

          .price {
            font-weight: bold;
            color: var(--primary-color);
          }
        `}
      </style>

      {/* Hero Header */}
      <header>
        <h1><i className="fas fa-tractor"></i> FarmersHub</h1>
        <h2>Seasonal Crop Recommendations – South African Farmers</h2>
        <p>Grow smarter with seasonal insights, tips, and best practices.</p>
      </header>

      {/* Tabs */}
      <div className="tabs">
        {Object.keys(seasonalData).map((season) => (
          <div
            key={season}
            className={`tab ${activeTab === season ? "active" : ""}`}
            onClick={() => handleTabClick(season)}
          >
            {season.charAt(0).toUpperCase() + season.slice(1)}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        <h3>{title}</h3>
        <div className="crops">
          {crops.map((crop) => (
            <div key={crop.id} className="crop-card">
              <img src={crop.image} alt={crop.name} />
              <div className="info">
                <h4>{crop.name}</h4>
                <p>{crop.description}</p>
                <p className="price">{crop.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <p>&copy; {new Date().getFullYear()} FarmersHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FarmersHub;


