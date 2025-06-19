import React, { useState, useEffect } from 'react';
import '../Brands.css';

const brands = [
  {
    name: 'Puma',
    icon: (
      <span className="brand-icon" style={{ background: '#00e676' }}>
        <svg width="28" height="28" viewBox="0 0 28 28"><circle cx="14" cy="14" r="14" fill="#00e676" /></svg>
      </span>
    ),
    about: `Puma is a leading sportswear brand known for its athletic and casual footwear, apparel, and accessories. 
Founded in 1948, Puma has consistently pushed the boundaries of innovation in sports technology and design. 
The brand collaborates with top athletes and designers to create products that blend performance and style. 
Puma's global presence spans over 120 countries, making it a household name in sports and fashion. 
Their commitment to sustainability and social responsibility is reflected in their ongoing initiatives worldwide.`,
    charging: `Puma offers fast and reliable charging for its smart wearables and e-shoes, ensuring athletes stay powered during intense activities. 
Their charging solutions are designed for efficiency and convenience, supporting both wireless and USB-C options. 
Puma's smart products feature long-lasting batteries and quick recharge times, minimizing downtime for users. 
The brand also provides eco-friendly charging accessories made from recycled materials. 
Customer support is available 24/7 for troubleshooting and guidance on all charging-related queries.`,
    catalog: `Explore Puma’s latest collection of shoes, sportswear, and accessories, featuring cutting-edge designs and advanced materials. 
The catalog includes exclusive collaborations with renowned designers and athletes, offering limited-edition releases. 
Puma's product range caters to men, women, and children, covering running, training, football, and lifestyle segments. 
Detailed product descriptions, size guides, and customer reviews help shoppers make informed decisions. 
Seasonal sales and loyalty programs provide additional value to Puma's dedicated customer base.`,
    events: `Upcoming: Puma Marathon 2024, Sneaker Expo, and more. 
Puma regularly hosts global events, including sports tournaments, product launches, and community outreach programs. 
The brand partners with local organizations to promote fitness and healthy living through workshops and challenges. 
Exclusive previews and meet-and-greet sessions with Puma ambassadors are highlights of these events. 
Stay updated on the latest happenings by subscribing to Puma's event newsletter and social media channels.`,
  },
  {
    name: 'Apple',
    icon: (
      <span className="brand-icon" style={{ background: '#fff' }}>
        <svg width="28" height="28" viewBox="0 0 28 28"><circle cx="14" cy="14" r="14" fill="#fff" /></svg>
      </span>
    ),
    about: `Apple Inc. is a global technology company that designs, manufactures, and markets smartphones, computers, and more. 
Founded in 1976, Apple is renowned for its innovation, quality, and user-centric design philosophy. 
The company’s ecosystem includes hardware, software, and services that seamlessly integrate for a superior user experience. 
Apple's commitment to privacy, security, and sustainability sets industry standards. 
With a loyal customer base and a vast network of retail stores, Apple continues to shape the future of technology.`,
    charging: `Apple’s MagSafe and Lightning charging solutions are industry-leading, offering fast and secure connections for all devices. 
MagSafe technology enables wireless charging with precise alignment and compatibility with a range of accessories. 
Apple’s chargers are engineered for safety, efficiency, and minimal environmental impact. 
The company provides detailed guides and customer support for troubleshooting charging issues. 
Apple’s ongoing research focuses on enhancing battery life and developing next-generation charging technologies.`,
    catalog: `Browse iPhones, iPads, Macs, Watches, and accessories in Apple’s extensive product catalog. 
Each product is crafted with attention to detail, featuring the latest advancements in hardware and software. 
Apple’s online store offers customization options, trade-in programs, and financing plans. 
Comprehensive product information, customer reviews, and comparison tools assist buyers in making informed choices. 
Regular updates introduce new models, features, and limited-edition collaborations with artists and brands.`,
    events: `Upcoming: WWDC 2024, iPhone Launch Event, and more. 
Apple’s events are highly anticipated, showcasing the latest innovations in hardware, software, and services. 
Developers and enthusiasts worldwide tune in for keynote presentations, workshops, and hands-on sessions. 
Apple also hosts educational programs, coding challenges, and community initiatives throughout the year. 
Stay informed about upcoming events by visiting Apple’s official website and subscribing to event notifications.`,
  },
  {
    name: 'Mercedes Benz',
    icon: (
      <span className="brand-icon" style={{ background: '#e53935' }}>
        <svg width="28" height="28" viewBox="0 0 28 28"><circle cx="14" cy="14" r="14" fill="#e53935" /></svg>
      </span>
    ),
    about: `Mercedes Benz is a luxury automobile manufacturer known for innovation, performance, and design. 
With a legacy spanning over a century, Mercedes Benz has set benchmarks in automotive engineering and safety. 
The brand’s lineup includes sedans, SUVs, coupes, and electric vehicles, each embodying elegance and advanced technology. 
Mercedes Benz is committed to sustainability, investing heavily in electric mobility and green manufacturing. 
Their global network of dealerships and service centers ensures premium customer support and satisfaction.`,
    charging: `Mercedes Benz offers advanced charging for its electric vehicles, supporting both home and public charging stations. 
Their EQ line features rapid charging capabilities, enabling long-distance travel with minimal downtime. 
Mercedes Benz provides a user-friendly app for locating charging stations and monitoring battery status. 
The brand collaborates with leading energy providers to expand charging infrastructure worldwide. 
Comprehensive customer support and educational resources are available for new EV owners.`,
    catalog: `Discover luxury sedans, SUVs, and electric vehicles in the Mercedes Benz catalog, each crafted with precision and attention to detail. 
The catalog highlights innovative features such as MBUX infotainment, advanced driver assistance, and customizable interiors. 
Mercedes Benz offers exclusive editions and bespoke customization for discerning customers. 
Detailed specifications, virtual tours, and customer testimonials enhance the online shopping experience. 
Seasonal promotions and loyalty programs reward long-term Mercedes Benz enthusiasts.`,
    events: `Upcoming: Auto Expo 2024, Electric Drive Tour, and more. 
Mercedes Benz organizes global events, including car launches, test drive experiences, and motorsport competitions. 
The brand’s events emphasize innovation, luxury, and sustainability, attracting automotive enthusiasts worldwide. 
Exclusive previews, workshops, and networking opportunities are integral to these gatherings. 
Follow Mercedes Benz on social media and subscribe to newsletters for the latest event updates and invitations.`,
  },
];

const sections = [
  { key: 'about', label: 'About the Brand', icon: '🏷️' },
  { key: 'charging', label: 'Charging', icon: '⚡' },
  { key: 'catalog', label: 'Catalog', icon: '📚' },
  { key: 'events', label: 'Events', icon: '🎉' },
];

export default function Brands() {
  const [selectedBrand, setSelectedBrand] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [loading, setLoading] = useState(true);

  // Section loading simulation (slower loader)
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      if (activeSection < sections.length - 1) {
        setTimeout(() => setActiveSection((s) => s + 1), 1400); // slower transition
      }
    }, 2200); // loader visible for 2.2s
    return () => clearTimeout(timer);
  }, [activeSection, selectedBrand]);

  // Reset to first section on brand change
  useEffect(() => {
    setActiveSection(0);
    setLoading(true);
  }, [selectedBrand]);

  return (
    <div className="brands-page">
      {/* Top Dynamic Brand Selector */}
      <div className="brands-feature-selector">
        <h1 className="brands-feature-title">
          <span className="brands-feature-unparalleled">Unparalleled</span>
          <br />
          <span className="brands-feature-main">Brand Capabilities</span>
        </h1>
        <div className="brands-feature-tabs">
          {brands.map((brand, idx) => (
            <button
              key={brand.name}
              className={`brands-feature-tab${selectedBrand === idx ? ' selected' : ''}`}
              onClick={() => setSelectedBrand(idx)}
            >
              {brand.icon}
              <span>{brand.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Brand Kits Section */}
      <div className="brand-kits-section">
        <div className="brand-kits-title">Brand Kits</div>
        <div className="brand-kits-list">
          {brands.map((brand, idx) => (
            <div
              key={brand.name}
              className={`brand-kit-card${selectedBrand === idx ? ' active' : ''}`}
              onClick={() => setSelectedBrand(idx)}
            >
              <span className={`brand-kit-checkbox${selectedBrand === idx ? ' checked' : ''}`}>
                {selectedBrand === idx ? (
                  <svg width="22" height="22" viewBox="0 0 22 22">
                    <rect width="22" height="22" rx="6" fill="#6c63ff" />
                    <polyline points="6,12 10,16 16,7" fill="none" stroke="#fff" strokeWidth="2.5" />
                  </svg>
                ) : (
                  <span />
                )}
              </span>
              <span className="brand-kit-logo">{brand.icon}</span>
              <span className="brand-kit-name">{brand.name}</span>
              <span className="brand-kit-settings">
                <svg width="22" height="22" viewBox="0 0 22 22">
                  <g stroke="#fff" strokeWidth="2" fill="none">
                    <circle cx="11" cy="11" r="7" />
                    <line x1="11" y1="7" x2="11" y2="15" />
                    <line x1="7" y1="11" x2="15" y2="11" />
                  </g>
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Sections with Loading Bar */}
      <div className="brand-sections">
        {sections.map((section, idx) => (
          <div className={`brand-section${activeSection === idx ? ' active' : ''}`} key={section.key}>
            <div className="brand-section-header">
              <span className="brand-section-icon">{section.icon}</span>
              <span className="brand-section-title">{section.label}</span>
              {activeSection === idx && loading && (
                <span className="brand-section-loader">
                  <span className="brand-section-loading-bar">
                    <span
                      className="brand-section-loading-bar-inner"
                      style={{ animationDuration: '2.2s' }}
                    />
                  </span>
                  <span className="brand-section-loading-text">Loading...</span>
                </span>
              )}
            </div>
            {activeSection === idx && (
              <div className="brand-section-content">
                {brands[selectedBrand][section.key]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}