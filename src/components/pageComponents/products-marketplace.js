import React, { useState } from "react";

export default function FarmersHub() {
  const categories = ["All", "Seeds", "Fertilizers", "Machinery", "Tools"];

  const products = [
    { name: "Maize Seeds", price: "R280", category: "Seeds", img: "https://via.placeholder.com/100" },
    { name: "Wheat Seeds", price: "R220", category: "Seeds", img: "https://via.placeholder.com/100" },
    { name: "Rice Seeds", price: "R330", category: "Seeds", img: "https://via.placeholder.com/100" },
    { name: "Organic Fertilizer", price: "R450", category: "Fertilizers", img: "https://via.placeholder.com/100" },
    { name: "NPK Fertilizer", price: "R550", category: "Fertilizers", img: "https://via.placeholder.com/100" },
    { name: "Compost Fertilizer", price: "R380", category: "Fertilizers", img: "https://via.placeholder.com/100" },
    { name: "Tractor", price: "R28,000", category: "Machinery", img: "https://via.placeholder.com/100" },
    { name: "Plough Machine", price: "R13,000", category: "Machinery", img: "https://via.placeholder.com/100" },
    { name: "Hand Tools Set", price: "R950", category: "Tools", img: "https://via.placeholder.com/100" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="container" style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{ backgroundColor: "#ff99cc", padding: "20px", width: "200px" }}
      >
        <h3 style={{ color: "#ffffff", marginBottom: "15px" }}>Categories</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {categories.map((cat) => (
            <li
              key={cat}
              style={{
                ...liStyle,
                fontWeight: selectedCategory === cat ? "bold" : "normal",
              }}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="main-content" style={{ flex: 1, padding: "20px" }}>
        <h2 style={{ color: "#b30059", marginBottom: "20px" }}>
          {selectedCategory} Marketplace
        </h2>

        <div style={gridStyle}>
          {filteredProducts.map((product) => (
            <div key={product.name} style={tdStyle}>
              <img src={product.img} alt={product.name} style={imgStyle} />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

// Inline styles
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
  borderRadius: "8px",
};

const imgStyle = {
  marginBottom: "10px",
  borderRadius: "8px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
  gap: "20px",
};
