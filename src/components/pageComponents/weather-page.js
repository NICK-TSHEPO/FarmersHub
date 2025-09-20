import React from "react";
import {
  FaSun,
  FaCloudSun,
  FaTemperatureHigh,
  FaLeaf,
  FaCalendarAlt,
  FaExclamationTriangle,
} from "react-icons/fa";
import "./shared.css";

const bannerImage = "https://tse2.mm.bing.net/th/id/OIP.XDOmzMoOxqzFn6PfD98HXQHaEQ?w=474&h=474&c=7&p=0";

const ClimateHub = () => {
  const weatherData = {
    temperature: 26,
    condition: "Sunny",
    conditionIcon: <FaSun color="#F2C94C" size={24} />,
    location: "Mahikeng",
  };

  const forecastData = {
    today: "Clear skies with a high of 28°C and light winds.",
    weekly: [
      { day: "Mon", forecast: "Sunny, 27°C", icon: <FaSun color="#4CAF50" /> },
      { day: "Tue", forecast: "Partly cloudy, 25°C", icon: <FaCloudSun color="#8B5E3C" /> },
      { day: "Wed", forecast: "Showers, 23°C", icon: <FaCloudSun color="#8B5E3C" /> },
      { day: "Thu", forecast: "Sunny, 28°C", icon: <FaSun color="#4CAF50" /> },
      { day: "Fri", forecast: "Thunderstorms, 21°C", icon: <FaExclamationTriangle color="#F2C94C" /> },
    ],
    alerts: "Heat advisory for Thursday afternoon.",
  };

  const cropGuidance = {
    crop: "Strawberries",
    plantingWindow: "June – July",
    harvestTime: "November – January",
  };

  const strawberryHarvestDays = [3, 7, 12, 18, 21, 25, 28];

  const insightsTips = [
    "Water crops early in the morning to reduce evaporation.",
    "Rotate crops each season to maintain healthy soil.",
    "Mulching helps retain soil moisture and suppress weeds.",
  ];

  return (
    <div>
      <div className="banner">
        <img src={bannerImage} alt="Farm landscape" />
        <h1>Farmer&apos;s Climate Hub</h1>
      </div>

      {/* Weather Dashboard */}
      <section className="section">
        <h2>
          <FaTemperatureHigh style={{ marginRight: "8px", color: "var(--primary-color)" }} />
          Weather Dashboard – {weatherData.location}
        </h2>
        <div className="card">
          <p>
            <strong>{weatherData.temperature}°C</strong> – {weatherData.condition} {weatherData.conditionIcon}
          </p>
        </div>
      </section>

      {/* Forecast */}
      <section className="section">
        <h2>
          <FaCalendarAlt style={{ marginRight: "8px", color: "var(--accent-color)" }} />
          5-Day Forecast
        </h2>
        <p>{forecastData.today}</p>
        <div className="weekly-container">
          {forecastData.weekly.map((day, idx) => (
            <div key={idx} className="weekly-card">
              <p><strong>{day.day}</strong></p>
              <p>{day.forecast}</p>
              {day.icon}
            </div>
          ))}
        </div>
        <div className="alert-box">
          <FaExclamationTriangle color="var(--accent-color)" style={{ marginRight: "10px" }} />
          {forecastData.alerts}
        </div>
      </section>

      {/* Crop Guidance */}
      <section className="section">
        <h2>
          <FaLeaf style={{ marginRight: "8px", color: "var(--secondary-color)" }} />
          Crop Guidance
        </h2>
        <p>
          Best planting window for <strong>{cropGuidance.crop}</strong>: {cropGuidance.plantingWindow}.<br />
          Expected harvest: {cropGuidance.harvestTime}.
        </p>
        <table className="calendar">
          <thead>
            <tr>
              <th colSpan="7">September 2025</th>
            </tr>
            <tr>
              <th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th>
              <th>Thu</th><th>Fri</th><th>Sat</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, rowIdx) => (
              <tr key={rowIdx}>
                {[...Array(7)].map((_, colIdx) => {
                  const dayNum = rowIdx * 7 + colIdx + 1;
                  return (
                    <td
                      key={colIdx}
                      className={strawberryHarvestDays.includes(dayNum) ? "harvest" : ""}
                    >
                      {dayNum <= 30 ? dayNum : ""}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr className="divider" />

      {/* Tips Section */}
      <section className="section">
        <h2>🌿 Climate-Smart Tips</h2>
        <ul>
          {insightsTips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Farmer&apos;s Climate Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ClimateHub;
