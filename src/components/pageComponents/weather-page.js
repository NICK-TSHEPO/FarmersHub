import React from "react";

const ClimateHub = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f4fdf6", color: "#333", margin: 0, padding: 0 }}>
      {/* Header */}
      <h1
        style={{
          background: "linear-gradient(90deg, #2c7a7b, #68d391)",
          color: "white",
          margin: 0,
          padding: "20px",
          textAlign: "center",
        }}
      >
        Farmer&apos;s Climate Hub
      </h1>

      {/* Weather Dashboard */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Weather Dashboard</h2>
        <form id="weather-search" style={{ marginBottom: "15px" }}>
          <label htmlFor="location" style={labelStyle}>
            Enter Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="e.g. Mahikeng"
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            Search
          </button>
        </form>
        <div style={resultBoxStyle}>
          <p>Current Temperature: -- °C</p>
          <p>Condition: --</p>
        </div>
      </section>

      <hr style={hrStyle} />

      {/* Real-Time Forecast */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Real-Time Forecast</h2>
        <label htmlFor="forecast-location" style={labelStyle}>
          Choose Location:
        </label>
        <input
          type="text"
          id="forecast-location"
          name="forecast-location"
          placeholder="e.g. Rustenburg"
          style={inputStyle}
        />

        <div style={{ marginTop: "10px" }}>
          <button style={buttonStyle}>Today&apos;s Update</button>
          <button style={buttonStyle}>Weekly Forecast</button>
          <button style={buttonStyle}>Monthly Outlook</button>
        </div>

        <div style={resultBoxStyle}>
          <p>No forecast data yet.</p>
        </div>

        <h3>Alerts & Warnings</h3>
        <div style={resultBoxStyle}>
          <p>No active alerts.</p>
        </div>
      </section>

      <hr style={hrStyle} />

      {/* Crop Guidance */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Crop Guidance</h2>
        <form id="crop-search" style={{ marginBottom: "15px" }}>
          <label htmlFor="crop-type" style={labelStyle}>
            Enter Crop Type:
          </label>
          <input
            type="text"
            id="crop-type"
            name="crop-type"
            placeholder="e.g. Maize"
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            Search
          </button>
        </form>

        <div style={resultBoxStyle}>
          <p>Recommended Planting Window: --</p>
          <p>Expected Harvest Time: --</p>
        </div>

        <h3>Interactive Calendar</h3>
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
                {week.map((day, j) => (
                  <td key={j} style={tdStyle}>
                    {day}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={hrStyle} />

      {/* Insights */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Insights & Tips</h2>
        <div style={resultBoxStyle}>
          <p>No tips available yet. Search a crop to get insights.</p>
        </div>
      </section>
    </div>
  );
};

/* ----- Styles ----- */
const sectionStyle = {
  padding: "20px",
  margin: "20px auto",
  maxWidth: "900px",
  background: "white",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
};

const h2Style = {
  color: "#2c7a7b",
  borderBottom: "2px solid #68d391",
  paddingBottom: "5px",
};

const labelStyle = {
  fontWeight: "bold",
  color: "#2f855a",
};

const inputStyle = {
  padding: "8px",
  margin: "5px 0",
  border: "1px solid #ccc",
  borderRadius: "5px",
  width: "60%",
};

const buttonStyle = {
  background: "#2f855a",
  color: "white",
  border: "none",
  padding: "8px 15px",
  borderRadius: "5px",
  cursor: "pointer",
  marginLeft: "5px",
};

const resultBoxStyle = {
  background: "#e6fffa",
  borderLeft: "5px solid #38b2ac",
  padding: "10px",
  marginTop: "10px",
  borderRadius: "5px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "10px",
};

const thStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "center",
  background: "#38b2ac",
  color: "white",
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "center",
  background: "#f0fff4",
  cursor: "pointer",
};

const hrStyle = {
  border: "none",
  borderTop: "2px dashed #68d391",
  margin: "40px auto",
  width: "80%",
};

export default ClimateHub;
