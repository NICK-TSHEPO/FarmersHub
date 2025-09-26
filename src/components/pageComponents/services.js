import React, { useState } from "react";
import "./shared.css"; // ✅ external stylesheet

const services = [
  {
    name: "Equipment Rentals",
    icon: "🚜",
    content: (
      <>
        <h2>Equipment Rentals</h2>
        <p>
          Find and rent the latest farming equipment from trusted providers. We
          offer:
        </p>
        <ul>
          <li>Tractors, ploughs, and harvesters</li>
          <li>Irrigation systems</li>
          <li>Specialized machinery for all crop types</li>
        </ul>
        <p>Contact us for availability and pricing.</p>
      </>
    ),
  },
  {
    name: "Transport Services",
    icon: "🚚",
    content: (
      <>
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
      </>
    ),
  },
  {
    name: "Vet Services",
    icon: "🐄",
    content: (
      <>
        <h2>Vet Services</h2>
        <p>
          Access professional veterinary services for your livestock. We
          provide:
        </p>
        <ul>
          <li>On-site animal health checks</li>
          <li>Vaccinations and treatments</li>
          <li>Emergency care and consultations</li>
        </ul>
        <p>Book an appointment with a local vet today.</p>
      </>
    ),
  },
  {
    name: "Labour Near You",
    icon: "👨‍🌾",
    content: (
      <>
        <h2>Labour Near You</h2>
        <p>
          Find skilled farm workers in your area for seasonal or ongoing work.
          Services include:
        </p>
        <ul>
          <li>Planting and harvesting assistance</li>
          <li>Equipment operation</li>
          <li>General farm maintenance</li>
        </ul>
        <p>Post a job or browse available workers.</p>
      </>
    ),
  },
];

export default function FarmingServices() {
  const [selectedService, setSelectedService] = useState(0);

  return (
    <div className="app">
      <header>
        <h1>Farming Services</h1>
        <h2>Connecting Farmers with Resources 🌱</h2>
      </header>

      <main className="main">
        {/* Sidebar */}
        <aside className="sidebar">
          {services.map((service, idx) => (
            <button
              key={service.name}
              className={`service-btn${selectedService === idx ? " active" : ""}`}
              onClick={() => setSelectedService(idx)}
            >
              <span className="icon">{service.icon}</span> {service.name}
            </button>
          ))}
        </aside>

        {/* Content */}
        <section className="content">{services[selectedService].content}</section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Farmer’s Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}
