import { useState, useEffect, useMemo, useCallback } from "react";
import "./shared.css"; // external CSS

export default function LivestockPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="livestock-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">🚜 FarmPro</div>
          <div className="nav-links">
            <button
              className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`tab-btn ${activeTab === "animals" ? "active" : ""}`}
              onClick={() => setActiveTab("animals")}
            >
              Animals
            </button>
            <button
              className={`tab-btn ${activeTab === "tasks" ? "active" : ""}`}
              onClick={() => setActiveTab("tasks")}
            >
              Tasks
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="content">
        {activeTab === "overview" && (
          <section className="section">
            <h2>📊 Overview</h2>
            <p>This is the overview section styled only by CSS.</p>
          </section>
        )}

        {activeTab === "animals" && (
          <section className="section">
            <h2>🐄 Animals</h2>
            <p>Animal details will be styled externally.</p>
          </section>
        )}

        {activeTab === "tasks" && (
          <section className="section">
            <h2>📋 Tasks</h2>
            <p>Tasks content styled via CSS.</p>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        &copy; 2025 FarmHub. Empowering farmers with better livestock management.
      </footer>
    </div>
  );
}
