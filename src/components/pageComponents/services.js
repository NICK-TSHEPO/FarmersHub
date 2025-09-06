import React, { useState } from "react";
import "./styles.css";

const services = [
  {
    name: "Equipment Rentals",
    content: (
      <>
        <h2>Equipment Rentals</h2>
        <p>
          Find and rent the latest farming equipment from trusted providers. We offer:
        </p>
        <ul>
          <li>Tractors, ploughs, and harvesters</li>
          <li>Irrigation systems</li>
          <li>Specialized machinery for all crop types</li>
        </ul>
        <p>
          Contact us for availability and pricing.
        </p>
      </>
    ),
  },
  {
    name: "Transport Services",
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
    content: (
      <>
        <h2>Vet Services</h2>
        <p>
          Access professional veterinary services for your livestock. We provide:
        </p>
        <ul>
          <li>On-site animal health checks</li>
          <li>Vaccinations and treatments</li>
          <li>Emergency care and consultations</li>
        </ul>
        <p>
          Book an appointment with a local vet today.
        </p>
      </>
    ),
  },
  {
    name: "Labour Near You",
    content: (
      <>
        <h2>Labour Near You</h2>
        <p>
          Find skilled farm workers in your area for seasonal or ongoing work. Services include:
        </p>
        <ul>
          <li>Planting and harvesting assistance</li>
          <li>Equipment operation</li>
          <li>General farm maintenance</li>
        </ul>
        <p>
          Post a job or browse available workers.
        </p>
      </>
    ),
  },
];

export default function FarmingServices() {
  const [selectedService, setSelectedService] = useState(1); // Default to Transport Services

  return (
    <div>
      {/* Header */}
      <header>

      </header>

      {/* Main Content */}
      <main>
        {/* Sidebar */}
        <aside className="sidebar">
          {services.map((service, idx) => (
            <button
              key={service.name}
              className={`service-btn${selectedService === idx ? " active" : ""}`}
              onClick={() => setSelectedService(idx)}
            >
              {service.name}
            </button>
          ))}
        </aside>

        {/* Content Section */}
        <section className="content">
          {services[selectedService].content}
        </section>
      </main>
    </div>
  );
}