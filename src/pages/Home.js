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
              ROYAL REALTOR       </a>
          <a href="tel:9543999997" className="call-btn">
            <i className="fas fa-phone-alt"></i>
            <span>96034 47633</span>
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-slider">
          <div className="slide slide1"></div>
          <div className="slide slide2"></div>
          <div className="slide slide3"></div>
        </div>

        <div className="hero-overlay"></div>

        <div className="container">
          <div className="hero-content">
            <h1>
              PREMIUM COMMERCIAL <br />
              <span>LAND FOR LEASE</span>
            </h1>

            <p>
              Premium commercial land available in the prime location of Nellore,
              Andhra Pradesh. Perfect for Shoping Complex, hotels, restaurants, showrooms, and commercial
              complexes.
            </p>

            <a
              href="https://wa.me/919603447633"
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

      <section className="highlights">
        <div className="container">
          <h2>Property Highlights</h2>

          <div className="prime-slider">
            <div className="prime-slide-track">

              {/* ORIGINAL SLIDES */}
              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-ruler-combined"></i>
                </div>
                <h3>Total Land Area</h3>
                <p>13,000 Sq.Ft</p>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>High Footfall</h3>
                <p>Excellent visibility & crowd movement</p>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-elevator"></i>
                </div>
                <h3>Lift Facility</h3>
                <p>Modern lift access</p>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-parking"></i>
                </div>
                <h3>Ample Parking</h3>
                <p>Spacious parking</p>
              </div>

              {/* DUPLICATE SLIDES (same order) */}
              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-ruler-combined"></i>
                </div>
                <h3>Total Land Area</h3>
                <p>13,000 Sq.Ft</p>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>High Footfall</h3>
                <p>Excellent visibility & crowd movement</p>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-elevator"></i>
                </div>
                <h3>Lift Facility</h3>
                <p>Modern lift access</p>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-parking"></i>
                </div>
                <h3>Ample Parking</h3>
                <p>Spacious parking</p>
              </div>

            </div>
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
              <h3>Opposite CMR Shopping Mall</h3>
              <p>High-visibility commercial land located directly opposite CMR Shopping Mall</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-train"></i>
              </div>
              <h3>Nellore Railway Station</h3>
              <p>Just 3km from Nellore Railway Station</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-water"></i>
              </div>
              <h3>Penna River</h3>
              <p>Only 1.5km from the beautiful Penna River</p>
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



      {/* LEASING DETAILS */}
      <section className="lease-details" id="lease-details">
        <div className="container">
          <h2>Leasing Details</h2>

          <div className="lease-grid">

            <div className="lease-card">
              <i className="fas fa-rupee-sign"></i>
              <h3>Lease Price</h3>
              <p>
                <strong>₹90 – ₹130</strong> <span>per Sq.Ft</span>
              </p>
            </div>

            <div className="lease-card">
              <i className="fas fa-building"></i>
              <h3>Total Built-up Area</h3>
              <p>
                <strong>23,400</strong> <span>Sq.Ft</span>
              </p>
            </div>

            <div className="lease-card">
              <i className="fas fa-layer-group"></i>
              <h3>Available Floors</h3>
              <p>
                Ground Floor<br />
                First Floor<br />
                Second Floor
              </p>
            </div>

          </div>

          <div className="lease-cta">
            <a href="tel:9618875158">
              <i className="fas fa-phone-alt"></i>
              CALL / WHATSAPP NOW
            </a>
            <p>Serious Business Enquiries Only</p>
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
                <p><i className="fas fa-map-marker-alt"></i> <strong>Address:</strong>Andhra Pradesh 524001</p>
                <p><i className="fas fa-info-circle"></i> <strong>Landmark:</strong> Brindavan Colony, Nellore</p>
                <div className="map-container">
                  <iframe
                    title="Property Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3863.51599970602!2d79.9826552!3d14.455034!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8cc8181d1ad1%3A0x55b95d08d24068c8!2sKanakaMahal!5e0!3m2!1sen!2sin!4v1769592454809!5m2!1sen!2sin"
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
                <div className="usage-slider">

                  <div className="usage-slide uslide1">
                    <div className="usage-overlay">
                      <h3>Hotels & Resorts</h3>
                    </div>
                  </div>

                  <div className="usage-slide uslide2">
                    <div className="usage-overlay">
                      <h3>Restaurants & Cafes</h3>
                    </div>
                  </div>

                  <div className="usage-slide uslide3">
                    <div className="usage-overlay">
                      <h3>Showrooms & Retail</h3>
                    </div>
                  </div>

                  <div className="usage-slide uslide4">
                    <div className="usage-overlay">
                      <h3>Commercial Complex</h3>
                    </div>
                  </div>

                  <div className="usage-slide uslide5">
                    <div className="usage-overlay">
                      <h3>Office Buildings</h3>
                    </div>
                  </div>

                  <div className="usage-slide uslide6">
                    <div className="usage-overlay">
                      <h3>Educational Institutions</h3>
                    </div>
                  </div>

                </div>
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
              <div className="footer-logo">Royal realtor</div>
              <p>Specializing in prime commercial and residential properties in Andhra Pradesh. Trusted real estate promoters with over 15 years of experience.</p>
            </div>

            <div className="footer-contact">
              <h3>Contact Us</h3>
              <div className="contact-item">
                <i className="fas fa-phone-alt"></i>
                <div>96034 47633</div>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>Brindavan Colony, Nellore, Andhra Pradesh</div>
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
            <p>© 2026 Royal realtor – Plot & Flats Promoters. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;