import React, { useEffect } from 'react';
import './Home.css';

function Home() {
  useEffect(() => {
    // Header scroll effect
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    // Smooth scrolling for anchor links
    const smoothScroll = (e) => {
      if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Calculate offset based on header height
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', smoothScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', smoothScroll);
    };
  }, []);

  const handleWhatsAppClick = () => {
    console.log('WhatsApp inquiry initiated');
  };

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="container header-content">
          <a 
          href="#home" 
          className="logo">
            <i className="fas fa-building"></i>
            DARVESH REALTOR
          </a>
          <a href="tel:9543999997" className="call-btn">
            <i className="fas fa-phone-alt"></i>
            <span>9543 999 997</span>
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>
              COMMERCIAL <br />
              <span>LAND FOR SALE</span>
            </h1>
            <p>Premium commercial land available in the prime location of Kalapet, Puducherry. Perfect for hotels, restaurants, showrooms, and commercial complexes.</p>
            <a 
              href="https://wa.me/919543999997" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta"
              onClick={handleWhatsAppClick}
            >
              <i className="fab fa-whatsapp"></i>
              INQUIRE NOW
            </a>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="highlights" id="highlights">
        <div className="container">
          <h2>Prime Location Highlights</h2>
          <div className="highlight-items">
            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-road"></i>
              </div>
              <h3>East Coast Road</h3>
              <p>Prime location on the scenic ECR road</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Near Law College</h3>
              <p>Just 500m from Pondicherry Law College</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-umbrella-beach"></i>
              </div>
              <h3>Kalapet Beach</h3>
              <p>Only 300m from the beautiful Kalapet Beach</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3>Fully Approved</h3>
              <p>DTCP & RERA approved for hassle-free development</p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="details" id="details">
        <div className="container">
          <h2 className="section-title">Property Details</h2>
          <div className="details-content">
            <div className="location">
              <div className="location-header">
                <h2>Location Details</h2>
              </div>
              <div className="location-body">
                <p><i className="fas fa-map-marker-alt"></i> <strong>Address:</strong> Kalapet, ECR Road, Puducherry</p>
                <p><i className="fas fa-info-circle"></i> <strong>Landmark:</strong> Before RTO Checkpost</p>
                <div className="map-container">
                  <iframe 
                    title="Property Location Map"
                    src="https://maps.google.com/maps?q=Kalapet%2C%20Puducherry&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    allowFullScreen
                  >
                  </iframe>
                </div>
              </div>
            </div>
            
            <div className="usage">
              <div className="usage-header">
                <h2>Recommended Uses</h2>
              </div>
              <div className="usage-body">
                <ul className="usage-list">
                  <li><i className="fas fa-check-circle"></i> Hotels & Resorts</li>
                  <li><i className="fas fa-check-circle"></i> Restaurants & Cafes</li>
                  <li><i className="fas fa-check-circle"></i> Showrooms & Retail</li>
                  <li><i className="fas fa-check-circle"></i> Commercial Complex</li>
                  <li><i className="fas fa-check-circle"></i> Office Buildings</li>
                  <li><i className="fas fa-check-circle"></i> Educational Institutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery" id="gallery">
        <div className="container">
          <h2>Property Gallery</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Commercial Land" 
                loading="lazy"
              />
              <div className="gallery-overlay">
                <h3>Premium Commercial Land</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Location" 
                loading="lazy"
              />
              <div className="gallery-overlay">
                <h3>Prime ECR Road Location</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Area View" 
                loading="lazy"
              />
              <div className="gallery-overlay">
                <h3>Scenic Surroundings</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-about">
              <div className="footer-logo">DARVESH REALTOR</div>
              <p>Specializing in prime commercial and residential properties in Puducherry. Trusted real estate promoters with over 15 years of experience.</p>
            </div>
            
            <div className="footer-contact">
              <h3>Contact Us</h3>
              <div className="contact-item">
                <i className="fas fa-phone-alt"></i>
                <div>9543 999 997</div>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>Kalapet, ECR Road, Puducherry</div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>info@darvishrealtor.com</div>
              </div>
            </div>
            
            <div className="footer-quick-links">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#highlights">Highlights</a></li>
                <li><a href="#details">Property Details</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="tel:9543999997">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="copyright">
            <p>© 2026 DARVESH REALTOR – Plot & Flats Promoters. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;