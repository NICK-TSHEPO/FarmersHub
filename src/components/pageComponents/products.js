import React from "react";

export default function FarmersHub() {
  return (
    <div className="container" style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside
        className="sidebar"
        style={{ backgroundColor: "#ff99cc", padding: "20px", width: "200px" }}
      >
        <h3 style={{ color: "#ffffff", marginBottom: "15px" }}>Categories</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={liStyle}>Seeds</li>
          <li style={liStyle}>Fertilizers</li>
          <li style={liStyle}>Machinery</li>
          <li style={liStyle}>Tools</li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="main-content" style={{ flex: 1, padding: "20px" }}>
        <h2 style={{ color: "#b30059", marginBottom: "20px" }}>Products Marketplace</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={tdStyle}>
                <img src="https://via.placeholder.com/100" alt="Maize Seeds" style={imgStyle} /><br />
                Maize Seeds - R280
              </td>
              <td style={tdStyle}>
                <img src="https://via.placeholder.com/100" alt="Wheat Seeds" style={imgStyle} /><br />
                Wheat Seeds - R220
              </td>
              <td style={tdStyle}>
                <img src="https://via.placeholder.com/100" alt="Rice Seeds" style={imgStyle} /><br />
                Rice Seeds - R330
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>
                <img src="https://via.placeholder.com/100" alt="Organic Fertilizer" style={imgStyle} /><br />
                Organic Fertilizer - R450
              </td>
              <td style={tdStyle}>
                <img src="https://via.placeholder.com/100" alt="NPK Fertilizer" style={imgStyle} /><br />
                NPK Fertilizer - R550
              </td>
              <td style={tdStyle}>
                <img src="https://via.placeholder.com/100" alt="Compost Fertilizer" style={imgStyle} /><br />
                Compost Fertilizer - R380
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>
                <img src="https://via.placeholder.com/100" alt="Tractor" style={imgStyle} /><br />
                Tractor - R28,000
              </td>
              <td style={tdStyle}>
                <img src="https://via.placeholder.com/100" alt="Plough Machine" style={imgStyle} /><br />
                Plough Machine - R13,000
              </td>
              <td style={tdStyle}>
                <img src="https://via.placeholder.com/100" alt="Hand Tools Set" style={imgStyle} /><br />
                Hand Tools Set - R950
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

// Inline styles for list items, table cells, and images
const liStyle = {
  padding: "10px 0",
  color: "#330033",
  cursor: "pointer",
};

const tdStyle = {
  textAlign: "center",
  padding: "15px",
  border: "2px solid #ff99cc",
  backgroundColor: "#ffe6f0",
};

const imgStyle = {
  marginBottom: "10px",
  borderRadius: "8px",
};
