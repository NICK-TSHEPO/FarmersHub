import React, { useState } from 'react';

const FarmersHub = () => {
  const [activeTab, setActiveTab] = useState('summer');

  const handleTabClick = (season) => {
    setActiveTab(season);
  };

  return (
    <div>
      {/* Embedded styling */}
      <style>
        {`
          :root {
            --primary-color: #2e7d32;
            --secondary-color: #a5d6a7;
            --background-color: #f0f4f3;
            --tab-color: #c8e6c9;
            --tab-active-color: #81c784;
            --alert-color: #d32f2f;
          }

          body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: var(--background-color);
            color: #333;
          }

          header, footer {
            text-align: center;
            margin-bottom: 20px;
          }

          header h1 {
            color: var(--primary-color);
          }

          header h2 {
            color: var(--secondary-color);
          }

          .tabs {
            display: flex;
            margin-bottom: 10px;
          }

          .tab {
            padding: 10px 15px;
            border: 1px solid #333;
            cursor: pointer;
            margin-right: 5px;
            background-color: var(--tab-color);
            border-radius: 5px;
            display: flex;
            align-items: center;
            transition: background 0.3s;
          }

          .tab:hover {
            background-color: var(--tab-active-color);
          }

          .tab i {
            margin-right: 5px;
          }

          .tab.active {
            background-color: var(--tab-active-color);
            font-weight: bold;
          }

          .tab-content {
            border: 1px solid #333;
            padding: 15px;
            display: none;
            border-radius: 5px;
            background-color: #fff;
          }

          .tab-content.active {
            display: block;
          }

          h3 {
            margin-top: 0;
            color: var(--primary-color);
          }

          h4 {
            margin-bottom: 5px;
            color: var(--secondary-color);
          }

          img {
            max-width: 100%;
            height: auto;
            margin-top: 10px;
            border-radius: 5px;
          }

          ul {
            margin-top: 0;
          }

          .section {
            margin-bottom: 15px;
          }

          .alert {
            color: var(--alert-color);
            font-weight: bold;
          }

          footer {
            font-size: 0.9em;
            color: #555;
          }

          .more-btn {
            margin-top: 10px;
            padding: 8px 12px;
            background-color: var(--primary-color);
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          .more-btn:hover {
            background-color: var(--tab-active-color);
          }
        `}
      </style>

      <header>
        <h1><i className="fas fa-seedling"></i> FarmersHub</h1>
        <h2>Seasonal Crop Recommendations – South African Farmers</h2>
        <p>Select a season to view crops, pests/diseases, and farming tips.</p>
      </header>

      <div className="tabs">
        <div
          className={`tab ${activeTab === 'summer' ? 'active' : ''}`}
          onClick={() => handleTabClick('summer')}
        >
          <i className="fas fa-sun"></i> Summer
        </div>
        <div
          className={`tab ${activeTab === 'autumn' ? 'active' : ''}`}
          onClick={() => handleTabClick('autumn')}
        >
          <i className="fas fa-leaf"></i> Autumn
        </div>
        <div
          className={`tab ${activeTab === 'winter' ? 'active' : ''}`}
          onClick={() => handleTabClick('winter')}
        >
          <i className="fas fa-snowflake"></i> Winter
        </div>
        <div
          className={`tab ${activeTab === 'spring' ? 'active' : ''}`}
          onClick={() => handleTabClick('spring')}
        >
          <i className="fas fa-cloud-sun"></i> Spring
        </div>
      </div>

      {/* Content Sections */}
      <div className={`tab-content ${activeTab === 'summer' ? 'active' : ''}`}>
        <h3><i className="fas fa-sun"></i> Summer (Dec–Feb)</h3>
        <div className="section">
          <h4>Best Crops to Plant</h4>
          <ul>
            <li>Maize, sorghum, soybeans, sunflower</li>
          </ul>
        </div>
      </div>

      <div className={`tab-content ${activeTab === 'autumn' ? 'active' : ''}`}>
        <h3><i className="fas fa-leaf"></i> Autumn (Mar–May)</h3>
        <div className="section">
          <h4>Best Crops to Plant</h4>
          <ul>
            <li>Dry beans, broccoli, spinach, cabbage</li>
          </ul>
        </div>
      </div>

      <div className={`tab-content ${activeTab === 'winter' ? 'active' : ''}`}>
        <h3><i className="fas fa-snowflake"></i> Winter (Jun–Aug)</h3>
        <div className="section">
          <h4>Best Crops to Plant</h4>
          <ul>
            <li>Carrots, onions, garlic, kale</li>
          </ul>
        </div>
      </div>

      <div className={`tab-content ${activeTab === 'spring' ? 'active' : ''}`}>
        <h3><i className="fas fa-cloud-sun"></i> Spring (Sep–Nov)</h3>
        <div className="section">
          <h4>Best Crops to Plant</h4>
          <ul>
            <li>Tomatoes, peppers, cucumbers, pumpkins</li>
          </ul>
        </div>
      </div>

      <footer>
        <p>&copy; {new Date().getFullYear()} FarmersHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FarmersHub;
