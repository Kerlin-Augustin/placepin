import './App.css'

function App() {

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <div className="logo-icon">◆</div>
            <span>PlacePin</span>
          </div>
          <nav className="nav">
            <a href="#how-it-works">How it Works</a>
            <a href="#features">Features</a>
            <a href="#use-cases">Use Cases</a>
            <a href="#pricing">Pricing</a>
            {/* <a href="#blog">Blog</a> */}
          </nav>
          <button className="cta-button">Get Started</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Better Living. Better Management.</h1>
            <p>Smart services for tenants. Smarter solutions for landlords.</p>
            <div className="hero-buttons">
              <button className="primary-button">Get Started</button>
              <button className="secondary-button">See in Action</button>
            </div>
            {/* <div className="social-proof">
              <div className="avatars">
                <div className="avatar">👤</div>
                <div className="avatar">👤</div>
                <div className="avatar">👤</div>
              </div>
              <span>100+ Happy Customers</span>
            </div> */}
          </div>
          <div className="hero-visual">
            <div className="sphere-container">
              <img className="sphere" src='/housing.jpg' alt='city' />
              <div className="ui-element theme">
                <span>🏙️</span>
                <span>Elevate Your Living</span>
              </div>
              <div className="ui-element changing">
                <span>🔑</span>
                <span>The Future of Renting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools tenants love Section */}
      <section className="launch-section">
        <div className="container">
          <div className="launch-content">
            <h2>Services Tenants Love, Tools Landlords Trust</h2>
            <p>Our platform connects tenants with curated perks and services while giving landlords powerful tools to manage their properties effortlessly. Everyone wins.</p>
          </div>
          <div className="feature-cards">
            <div className="feature-card">
              <div className="feature-visual">
                <div>
                  <img src='/tenantPerks.png' alt='tenant perks' className='tenantPerks' />
                </div>
              </div>
              <h3>Tenant Perks</h3>
              <p>Laundry, housekeeping, gym access, and exclusive discounts—your home just got an upgrade.</p>
            </div>
            <div className="feature-card">
              <div className="feature-visual">
                <img src='/charts.png' alt='charts' className='charts' />
              </div>
              <h3>Landlord Tools</h3>
              <p>Property tools, rent collection, and tenant communication all in one place for landlords.</p>
            </div>
            <div className="feature-card">
              <div className="feature-visual">
                <div className="publish-button">
                  <span>Upgrade</span>
                  <div className="cursor">👆</div>
                </div>
              </div>
              <h3>Flexible Plans</h3>
              <p>Comfort, Premium, Luxury, and Luxury Plus—tenants choose the plan that fits their lifestyle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Affordable Plans For Everyone.</h2>
            <p>Get the features you need without breaking the bank. Our flexible plans fit teams of all sizes, helping you start strong and scale effortlessly with clear, transparent pricing.</p>
          </div>
          <div className="pricing-cards single-card">
            <div className="pricing-card landlord-card">
              <div className="plan-label">LANDLORDS</div>
              <h3>Building Plan</h3>
              <div className="price">2.5%<span> of monthly building rent</span></div>
              <button className="primary-button">Start Managing &gt;</button>
              <div className="features landlord-features">
                <h4>For property owners</h4>
                <ul>
                  <li>✓ Transparent fee based on your building’s expected gross rental income</li>
                  <li>✓ Not a traditional management service (unless 10+ units)</li>
                  <li>✓ Access to tenant perks across all your units</li>
                  <li>✓ Tools to streamline rent tracking and communications</li>
                  <li>✓ Scales with property size — more units, more value</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="plan-label">COMFORT</div>
              <h3>Essential</h3>
              <div className="price">$50<span>month</span></div>
              <button className="secondary-button">Get Started &gt;</button>
              <div className="features">
                <h4>Perfect for individuals</h4>
                <ul>
                  <li>✓ Laundry service (basic)</li>
                  <li>✓ Limited housekeeping visits</li>
                  <li>✓ Discounts on food & groceries</li>
                  <li>✓ Access to partner gyms</li>
                </ul>
              </div>
            </div>
            <div className="pricing-card popular">
              <div className="popular-badge">MOST POPULAR</div>
              <div className="plan-label">PREMIUM</div>
              <h3>Balanced</h3>
              <div className="price">$120<span>month</span></div>
              <button className="primary-button">Get Started &gt;</button>
              <div className="features">
                <h4>Great for small households</h4>
                <ul>
                  <li>✓ Everything in Comfort</li>
                  <li>✓ More frequent laundry</li>
                  <li>✓ Higher partner discounts</li>
                  <li>✓ Early access to new perks</li>
                </ul>
              </div>
            </div>
            <div className="pricing-card">
              <div className="plan-label">LUXURY</div>
              <h3>Platinum</h3>
              <div className="price">$200<span>month</span></div>
              <button className="secondary-button">Get Started &gt;</button>
              <div className="features">
                <h4>Made for premium living</h4>
                <ul>
                  <li>✓ Everything in Premium</li>
                  <li>✓ Concierge services</li>
                  <li>✓ Priority scheduling</li>
                  <li>✓ VIP experiences & events</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <p>Need more free templates like this? Submit your email and we'll let you know.</p>
          </div>
          <div className="cta-form">
            <p>Just send us your contact email and we will contact you.</p>
            <div className="email-input">
              <input type="email" placeholder="Your@email.com" />
              <button className="submit-button">→</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-brand">
            <div className='logo'>
              <div className="logo-icon">◆</div>
              <span className="footer-logo"> PlacePin</span>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>INFORMATION</h4>
              <a href="#how-it-works">How it Works</a>
              <a href="#features">Features</a>
              <a href="#use-cases">Use Cases</a>
              <a href="#pricing">Pricing</a>
              <a href="#blog">Blog</a>
            </div>
            <div className="footer-column">
              <h4>MORE TEMPLATES</h4>
              <a href="#">NajmAl</a>
              <a href="#">Revo</a>
              <a href="#">Bayt</a>
              <a href="#">Sawad</a>
              <a href="#">Get Template</a>
            </div>
          </div>
          <div className="footer-cta">
            <button className="primary-button">Get Started →</button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
