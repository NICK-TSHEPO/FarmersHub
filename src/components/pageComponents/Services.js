import React from "react";
import "./styles.css";

export default function FarmingServices() {
  return (
    <div>
      {/* Header */}
      <header>
        <div className="header-left">
          <h3>Here to help you find your farming needs</h3>
        </div>
        <nav className="header-right">
          <a href="#">Products</a>
          <a href="#">Environmental Information</a>
          <a href="#">Livestock Health Tips</a>
          <a href="#">Crop Recommendations</a>
        </nav>
        <div style={{ clear: "both" }}></div>
        <hr />
      </header>

      {/* Main Content */}
      <main>
        {/* Sidebar */}
        <aside className="sidebar">
          <button className="service-btn">Equipment Rentals</button>
          <button className="service-btn active">Transport Services</button>
          <button className="service-btn">Vet Services</button>
          <button className="service-btn">Labour Near You</button>
        </aside>

        {/* Content Section */}
        <section className="content">
          <h2>Transport Services</h2>
          <p>
            Need help moving your crops, livestock, or equipment? We connect you
            with trusted local transport providers who understand farming
            logistics. Our transport partners offer:
          </p>
          <ul>
            <li>Livestock transportation with proper handling</li>
            <li>Crop haulage with temperature control (where needed)</li>
            <li>Heavy machinery and equipment relocation</li>
            <li>Flexible scheduling for both short and long-distance transport</li>
          </ul>
          <p>
            Contact us to get quotes or to schedule a pickup tailored to your
            specific needs.
          </p>
        </section>
      </main>
    </div>
  );
}
