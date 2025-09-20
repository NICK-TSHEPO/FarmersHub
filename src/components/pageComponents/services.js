import React, { useState } from "react";

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
          Access professional veterinary services for your livestock. We provide:
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
  const [selectedService, setSelectedService] = useState(1);

  return (
    <div className="app">
      {/* Main */}
      <main className="main">
        {/* Sidebar */}
        <aside className="sidebar">
          {services.map((service, idx) => (
            <button
              key={service.name}
              className={`service-btn${
                selectedService === idx ? " active" : ""
              }`}
              onClick={() => setSelectedService(idx)}
            >
              <span className="icon">{service.icon}</span> {service.name}
            </button>
          ))}
        </aside>

        {/* Content */}
        <section className="content">{services[selectedService].content}</section>
      </main>

      {/* Styles */}
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Nunito:wght@400;600&display=swap");

        body {
          margin: 0;
          font-family: 'Nunito', sans-serif;
          background: linear-gradient(-45deg, #FAFAF0, #dfffe0, #fff8d6, #f0fdf4);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
          color: #333;
        }

        .app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        /* Animated gradient */
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Decorative floating blobs */
        .app::before, .app::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.4;
          z-index: 0;
        }
        .app::before {
          width: 400px;
          height: 400px;
          background: #4CAF50;
          top: -120px;
          left: -120px;
          animation: float 8s ease-in-out infinite alternate;
        }
        .app::after {
          width: 350px;
          height: 350px;
          background: #F2C94C;
          bottom: -100px;
          right: -100px;
          animation: float 10s ease-in-out infinite alternate-reverse;
        }
        @keyframes float {
          from { transform: translateY(0px) translateX(0px); }
          to { transform: translateY(40px) translateX(30px); }
        }

        /* Layout */
        .main {
          display: flex;
          flex: 1;
          padding: 3rem;
          gap: 2rem;
          z-index: 1;
          position: relative;
        }

        /* Sidebar */
        .sidebar {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .service-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.85);
          border: 2px solid #8B5E3C;
          padding: 1.2rem;
          border-radius: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.35s ease;
          font-size: 1.05rem;
          backdrop-filter: blur(10px);
          box-shadow: 0 6px 15px rgba(0,0,0,0.1);
        }

        .service-btn:hover {
          background: #F2C94C;
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }

        .service-btn.active {
          background: linear-gradient(135deg, #4CAF50, #45a049);
          color: white;
          border-color: #4CAF50;
          box-shadow: 0 12px 25px rgba(76, 175, 80, 0.3);
        }

        .icon {
          font-size: 1.4rem;
        }

        /* Content */
        .content {
          flex: 3;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
          animation: fadeIn 0.4s ease;
          backdrop-filter: blur(12px);
        }

        .content h2 {
          font-family: 'Montserrat', sans-serif;
          color: #4CAF50;
          margin-bottom: 1.25rem;
          font-size: 2rem;
        }

        .content ul {
          margin: 1rem 0 1.5rem;
          padding-left: 1.5rem;
        }

        .content li {
          margin-bottom: 0.65rem;
        }

        /* Animation */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive */
        @media (max-width: 900px) {
          .main {
            flex-direction: column;
          }
          .sidebar {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          }
          .service-btn {
            flex: 1 1 45%;
            justify-content: center;
          }
        }

        @media (max-width: 600px) {
          .content {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
