import React from "react";
import {
  FaSun,
  FaCloudSun,
  FaTemperatureHigh,
  FaLeaf,
  FaCalendarAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

// Example banner image URL (free-use stock)
const bannerImage = "https://tse2.mm.bing.net/th/id/OIP.XDOmzMoOxqzFn6PfD98HXQHaEQ?w=474&h=474&c=7&p=0";

const ClimateHub = () => {
  // Dummy weather data
  const weatherData = {
    temperature: 26,
    condition: "Sunny",
    conditionIcon: <FaSun color="#F2C94C" size={24} />,
    location: "Mahikeng",
  };

  // Forecast dummy data
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

  // Crop guidance dummy
  const cropGuidance = {
    crop: "Strawberries",
    plantingWindow: "June – July",
    harvestTime: "November – January",
  };

  // Dummy strawberry harvest calendar data
  const strawberryHarvestDays = [3, 7, 12, 18, 21, 25, 28]; // Days with harvest events

  const insightsTips = [
    "Water crops early in the morning to reduce evaporation.",
    "Rotate crops each season to maintain healthy soil.",
    "Mulching helps retain soil moisture and suppress weeds.",
  ];

  return (
    <div
      style={{
        fontFamily: "'Nunito', sans-serif",
        background: "#FAFAF0",
        color: "#333",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Banner Header */}
      <div style={{ position: "relative", width: "100%", height: "250px", overflow: "hidden" }}>
        <img
          src={bannerImage}
          alt="Farm landscape"
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.7)" }}
        />
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "2.8rem",
            letterSpacing: "1px",
            textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
            margin: 0,
          }}
        >
          Farmer&apos;s Climate Hub
        </h1>
      </div>

      {/* Weather Dashboard */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>
          <FaTemperatureHigh style={{ marginRight: "8px", color: "#4CAF50" }} />
          Weather Dashboard
        </h2>
        <form id="weather-search" style={formInlineStyle}>
          <div style={formGroupStyle}>
            <label htmlFor="location" style={labelStyle}>
              Enter Location:
            </label>
            <input type="text" id="location" name="location" placeholder="e.g. Mahikeng" style={inputStyle} />
          </div>
          <button type="submit" style={buttonStyle}>
            Search
          </button>
        </form>
        <div style={cardStyle}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {weatherData.conditionIcon}
            <h3 style={{ marginLeft: "10px", color: "#8B5E3C" }}>{weatherData.condition}</h3>
          </div>
          <p>
            <strong>Location:</strong> {weatherData.location}
          </p>
          <p style={{ fontSize: "2rem", fontWeight: "700", color: "#4CAF50" }}>
            {weatherData.temperature} °C
          </p>
        </div>
      </section>

      <hr style={hrStyle} />

      {/* Real-Time Forecast */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>
          <FaLeaf style={{ marginRight: "8px", color: "#8B5E3C" }} />
          Real-Time Forecast
        </h2>
        <form id="forecast-location" style={formInlineStyle}>
          <div style={formGroupStyle}>
            <label htmlFor="forecast-location" style={labelStyle}>
              Choose Location:
            </label>
            <input type="text" id="forecast-location" name="forecast-location" placeholder="e.g. Rustenburg" style={inputStyle} />
          </div>
          <button type="button" style={buttonStyle}>
            Update
          </button>
        </form>

        <div style={cardStyle}>
          <p>
            <strong>Today:</strong> {forecastData.today}
          </p>
          <div style={weeklyContainerStyle}>
            {forecastData.weekly.map((day, i) => (
              <div key={i} style={weeklyCardStyle}>
                {day.icon}
                <p style={{ margin: "6px 0 0 0", fontWeight: "600" }}>{day.day}</p>
                <p style={{ margin: "2px 0 0 0", fontSize: "0.9rem", color: "#555" }}>{day.forecast}</p>
              </div>
            ))}
          </div>
        </div>

        <h3 style={{ fontFamily: "'Poppins', sans-serif", color: "#8B5E3C" }}>Alerts & Warnings</h3>
        <div style={alertBoxStyle}>
          <FaExclamationTriangle style={{ marginRight: "6px", verticalAlign: "middle", color: "#F2C94C" }} />
          {forecastData.alerts}
        </div>
      </section>

      <hr style={hrStyle} />

      {/* Crop Guidance */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>
          <FaCalendarAlt style={{ marginRight: "8px", color: "#4CAF50" }} />
          Crop Guidance
        </h2>
        <div style={cardStyle}>
          <p>
            <strong>Crop:</strong> {cropGuidance.crop}
          </p>
          <p>
            <strong>Planting Window:</strong> {cropGuidance.plantingWindow}
          </p>
          <p>
            <strong>Harvest Time:</strong> {cropGuidance.harvestTime}
          </p>
        </div>

        <h3 style={{ fontFamily: "'Poppins', sans-serif", color: "#8B5E3C" }}>Interactive Calendar</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Sun</th>
              <th style={thStyle}>Mon</th>
              <th style={thStyle}>Tue</th>
              <th style={thStyle}>Wed</th>
              <th style={thStyle}>Thu</th>
              <th style={thStyle}>Fri</th>
              <th style={thStyle}>Sat</th>
            </tr>
          </thead>
          <tbody>
            {[
              [1, 2, 3, 4, 5, 6, 7],
              [8, 9, 10, 11, 12, 13, 14],
              [15, 16, 17, 18, 19, 20, 21],
              [22, 23, 24, 25, 26, 27, 28],
              [29, 30, 31, "", "", "", ""],
            ].map((week, i) => (
              <tr key={i}>
                {week.map((day, j) => {
                  const isHarvestDay = strawberryHarvestDays.includes(day);
                  return (
                    <td
                      key={j}
                      style={{
                        ...tdStyle,
                        background: isHarvestDay ? "#FFEBEE" : tdStyle.background,
                        fontWeight: isHarvestDay ? "700" : "normal",
                        color: isHarvestDay ? "#C62828" : "#333",
                      }}
                    >
                      {day}
                      {isHarvestDay && <div style={{ fontSize: "0.8rem" }}>🍓 Harvest</div>}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={hrStyle} />

      {/* Insights */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>
          <FaLeaf style={{ marginRight: "8px", color: "#4CAF50" }} />
          Insights & Tips
        </h2>
        <div style={cardStyle}>
          <ul>
            {insightsTips.map((tip, i) => (
              <li key={i} style={{ marginBottom: "8px" }}>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

/* ----- Styles ----- */
const sectionStyle = {
  padding: "20px",
  margin: "30px auto",
  maxWidth: "900px",
  background: "white",
  borderRadius: "12px",
  boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
};

const h2Style = {
  color: "#4CAF50",
  borderBottom: "2px solid #F2C94C",
  paddingBottom: "8px",
  fontFamily: "'Poppins', sans-serif",
  display: "flex",
  alignItems: "center",
  fontSize: "1.6rem",
};

const formInlineStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "15px",
};

const formGroupStyle = {
  display: "flex",
  flexDirection: "column",
  marginRight: "10px",
};

const labelStyle = {
  fontWeight: "600",
  color: "#8B5E3C",
};

const inputStyle = {
  padding: "10px",
  margin: "5px 0",
  border: "1px solid #ccc",
  borderRadius: "6px",
  width: "220px",
  fontFamily: "'Nunito', sans-serif",
};

const buttonStyle = {
  background: "#4CAF50",
  color: "white",
  border: "none",
  padding: "10px 18px",
  borderRadius: "6px",
  cursor: "pointer",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "600",
  transition: "background 0.3s",
};

const cardStyle = {
  background: "#F5F5DC",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
  marginTop: "15px",
};

const weeklyContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "10px",
};

const weeklyCardStyle = {
  flex: "1",
  background: "#FAFAF0",
  padding: "10px",
  margin: "0 5px",
  borderRadius: "8px",
  textAlign: "center",
  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
};

const alertBoxStyle = {
  background: "#FFF4E5",
  borderLeft: "5px solid #F2C94C",
  padding: "12px",
  marginTop: "10px",
  borderRadius: "6px",
  display: "flex",
  alignItems: "center",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "15px",
};

const thStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "center",
  background: "#4CAF50",
  color: "white",
  fontFamily: "'Poppins', sans-serif",
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "center",
  background: "#FAFAF0",
  cursor: "pointer",
  transition: "background 0.2s",
};

const hrStyle = {
  border: "none",
  borderTop: "2px dashed #F2C94C",
  margin: "50px auto",
  width: "80%",
};

export default ClimateHub;
