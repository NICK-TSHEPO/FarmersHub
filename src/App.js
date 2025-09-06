import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Importing your components
import Home from "./components/pageComponents/home-page";
import Header from './components/sectionComponents/header';
import Footer from './components/sectionComponents/footer';
import ServicesPage from './components/pageComponents/services.js';
import ProductsPage from './components/pageComponents/products.js';
import SeasonalPage from './components/pageComponents/seasonal-crop.js';
import LivestockPage from './components/pageComponents/livestock-tips.js';

function App() {
  return (
      <Router>

        <div className="App">
          <div className="header">
            <Header />
          </div>

          <div className="body">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/season" element={<SeasonalPage />} />
                <Route path="/livestock" element={<LivestockPage />} />
              </Routes>
          </div>

          <div className="footer">
            <Footer />
          </div>
        </div>
      </Router>
  );
}

export default App;
