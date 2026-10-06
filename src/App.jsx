import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';
import './App.css';

// Mock Data for Products and Servicing Places
const PRODUCTS = [
  { id: 1, name: "Truffle Ribeye Steak", price: "\$48", desc: "Prime ribeye infused with black truffle butter.", img: "https://unsplash.com" },
  { id: 2, name: "Caviar & Seafood Platter", price: "\$85", desc: "Fresh Atlantic oysters, lobster tails, and premium caviar.", img: "https://unsplash.com" },
  { id: 3, name: "Saffron Infused Risotto", price: "\$32", desc: "Arborio rice cooked slowly with real Iranian saffron.", img: "https://unsplash.com" }
];

const PLACES = [
  { id: 1, title: "The Grand Dining Hall", desc: "Elegant architecture suited for family celebrations and formal events.", img: "https://unsplash.com" },
  { id: 2, title: "The Skyline Lounge", desc: "Rooftop lounge experience featuring signature craft mixology.", img: "https://unsplash.com" }
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">LUXE<span>EATS</span></div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#products" onClick={() => setMenuOpen(false)}>Menu</a></li>
          <li><a href="#places" onClick={() => setMenuOpen(false)}>Ambiance</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Culinary Mastery & <br/><span>Sophisticated Ambiance</span></h1>
            <p>Experience exquisite delicacies paired beautifully with unforgettable servicing lounges designed just for you.</p>
            <div className="hero-cta">
              <a href="#products" className="btn btn-primary">Explore Menu</a>
              <a href="tel:+1234567890" className="btn btn-secondary"><FaPhoneAlt /> Call to Reserve</a>
            </div>
          </div>
        </div>
      </header>

      {/* Showcase Products Section */}
      <section id="products" className="section">
        <h2 className="section-title">Signature Deliveries</h2>
        <p className="section-subtitle">Handcrafted dishes using the finest global ingredients</p>
        <div className="grid grid-products">
          {PRODUCTS.map(product => (
            <div key={product.id} className="card product-card">
              <div className="card-img-wrapper">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="card-body">
                <div className="card-header-row">
                  <h3>{product.name}</h3>
                  <span className="price">{product.price}</span>
                </div>
                <p>{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Servicing Places Section */}
      <section id="places" className="section bg-light">
        <h2 className="section-title">Our Servicing Spaces</h2>
        <p className="section-subtitle">Immerse yourself in carefully designed dining architectural layouts</p>
        <div className="grid grid-places">
          {PLACES.map(place => (
            <div key={place.id} className="card place-card">
              <div className="card-img-wrapper large">
                <img src={place.img} alt={place.title} />
              </div>
              <div className="card-body">
                <h3>{place.title}</h3>
                <p>{place.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <h2 className="section-title">Connect With Us</h2>
        <div className="contact-wrapper">
          <div className="contact-info-card">
            <h3>Reservations & Orders</h3>
            <p>Ready to experience true luxury? Tap below to call our hosting managers directly or visit us.</p>
            <div className="contact-links">
              <a href="tel:+1234567890" className="contact-item highlight">
                <FaPhoneAlt /> <span>+1 (234) 567-890</span>
              </a>
              <div className="contact-item">
                <FaEnvelope /> <span>concierge@luxeeats.com</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt /> <span>742 Evergreen Terrace, Luxury District</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} LUXEEATS. Beautifully designed for hospitality.</p>
      </footer>
    </div>
  );
}
