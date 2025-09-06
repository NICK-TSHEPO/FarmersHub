import React from 'react';

const FarmersHub = () => {
  return (
    <div>
      <header>
        <h1><i className="fas fa-seedling"></i> FarmersHub</h1>
        <h2>Seasonal Crop Recommendations – South African Farmers</h2>
        <p>Select a season to view crops, pests/diseases, and farming tips.</p>
      </header>

      <div className="tabs">
        <div className="tab active"><i className="fas fa-sun"></i> Summer</div>
        <div className="tab"><i className="fas fa-leaf"></i> Autumn</div>
        <div className="tab"><i className="fas fa-snowflake"></i> Winter</div>
        <div className="tab"><i className="fas fa-cloud-sun"></i> Spring</div>
      </div>

      <div id="summer" className="tab-content active">
        <h3><i className="fas fa-sun"></i> Summer (Dec–Feb)</h3>
        <div className="section">
          <h4>Best Crops to Plant</h4>
          <ul>
            <li>Maize, sorghum, soybeans, sunflower</li>
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

