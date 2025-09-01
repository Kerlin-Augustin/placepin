import { useState } from 'react'
import './App.css'

function App() {
  const [activeAccordion, setActiveAccordion] = useState('ai-tools')
  const [pricingToggle, setPricingToggle] = useState('monthly')
  const [expandedFaq, setExpandedFaq] = useState(null)

  const toggleAccordion = (id: any) => {
    setActiveAccordion(activeAccordion === id ? null : id)
  }

  const toggleFaq = (id: any) => {
    setExpandedFaq(expandedFaq === id ? null : id)
  }

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
            <div className="social-proof">
              <div className="avatars">
                <div className="avatar">👤</div>
                <div className="avatar">👤</div>
                <div className="avatar">👤</div>
              </div>
              <span>100+ Happy Customers</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="sphere-container">
              <img className="sphere" src='/housing.jpg' alt='city' />
              {/* <div className="ui-element percentage">%</div> */}
              {/* <div className="ui-element background">
                <span>Background</span>
                <div className="color-swatches">
                  <div className="swatch purple"></div>
                  <div className="swatch red"></div>
                </div>
                <div className="slider"></div>
              </div> */}
              <div className="ui-element theme">
                <span>🏙️</span>
                <span>Elevate Your Living</span>
              </div>
              {/* <div className="ui-element generating">
                <span>✨</span>
                <span>Generating Homepage</span>
              </div> */}
              <div className="ui-element changing">
                <span>🔑</span>
                <span>The Future of Renting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Figma File Section */}
      {/* <section className="figma-section">
        <div className="container">
          <button className="figma-button">
            <span>🎨</span>
            Figma File
          </button>
          <div className="right-buttons">
            <button className="primary-button">Use for Free &gt;</button>
            <a href="#" className="more-templates">More Templates</a>
          </div>
        </div>
      </section> */}

      {/* Launch in Minutes Section */}
      <section className="launch-section">
        <div className="container">
          <div className="launch-content">
            <h2>Services Tenants Love, Tools Landlords Trust</h2>
            <p>Our platform connects tenants with curated perks and services while giving landlords powerful tools to manage their properties effortlessly. Everyone wins.</p>
          </div>
          <div className="feature-cards">
            <div className="feature-card">
              <div className="feature-visual">
                <div className="wireframe">
                  <div className="title-placeholder">Title</div>
                  <div className="content-block">You</div>
                </div>
              </div>
              <h3>Tenant Perks</h3>
              <p>Laundry, housekeeping, gym access, and exclusive discounts—your home just got an upgrade.</p>
            </div>
            <div className="feature-card">
              <div className="feature-visual">
                <div className="alignment-ui">
                  <div className="align-options">
                    <span>Align Center</span>
                  </div>
                  <div className="centered-element"></div>
                </div>
              </div>
              <h3>Landlord Tools</h3>
              <p>Property tools, rent collection, and tenant communication all in one place for landlords.</p>
            </div>
            <div className="feature-card">
              <div className="feature-visual">
                <div className="publish-button">
                  <span>Publish</span>
                  <div className="cursor">👆</div>
                </div>
              </div>
              <h3>Flexible Plans</h3>
              <p>Comfort, Premium, Luxury, and Luxury Plus—tenants choose the plan that fits their lifestyle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Everything You Need Section */}
      <section className="everything-section">
        <div className="container">
          <div className="section-header">
            <h2>Everything You Need. Nothing You Don't.</h2>
            <p>This template comes packed with modern features and clean layouts tailored for AI products, dev tools, and fast-growing SaaS platforms.</p>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-illustration">
                <div className="card-ui">
                  <div className="g-icon">G</div>
                  <div className="jpeg-card">JPEG</div>
                  <div className="cursor-pointer">👆</div>
                  <div className="toggle-switch"></div>
                </div>
              </div>
              <div className="feature-subtitle">
                <span>⚡</span>
                AI-Ready Design
              </div>
              <h3>Smart Layouts</h3>
              <p>Pre-built sections for AI tools and SaaS startups - just plug in your content and go live.</p>
            </div>
            <div className="feature-item">
              <div className="feature-illustration">
                <div className="speedometer">
                  <div className="gauge-arc"></div>
                  <div className="needle"></div>
                </div>
              </div>
              <div className="feature-subtitle">
                <span>⚡</span>
                Built for Speed
              </div>
              <h3>Optimized for performance</h3>
              <p>Clean structure, global styles, and fast loading ensure your site delivers a seamless experience on any device.</p>
            </div>
            <div className="feature-item">
              <div className="feature-illustration">
                <div className="control-panel">
                  <div className="buttons">
                    <button className="black-btn">Get Started</button>
                    <button className="gradient-btn">Get Started</button>
                  </div>
                  <div className="inputs">
                    <div className="input-group">
                      <span>Fill</span>
                      <label><input type="checkbox" /> Linear</label>
                    </div>
                    <div className="input-group">
                      <span>Border</span>
                      <label><input type="checkbox" /> #ffff</label>
                    </div>
                    <div className="input-group">
                      <span>Radius</span>
                      <input type="text" defaultValue="12" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-subtitle">
                <span>🔧</span>
                Easy Customization
              </div>
              <h3>No-code. No compromise.</h3>
              <p>Make edits fast with reusable components and symbols - everything is structured for scalability and simplicity.</p>
            </div>
            <div className="feature-item">
              <div className="feature-illustration">
                <div className="devices">
                  <div className="device mobile">📱</div>
                  <div className="device tablet">📱</div>
                  <div className="device laptop">💻</div>
                  <div className="device desktop">🖥️</div>
                  <div className="cursor">👆</div>
                  <span className="desktop-label">Desktop</span>
                </div>
              </div>
              <div className="feature-subtitle">
                <span>🖥️</span>
                Responsive by Default
              </div>
              <h3>Looks great on every screen</h3>
              <p>Fully responsive layouts ensure your site is pretty and functional on desktop, tablet, and mobile.</p>
            </div>
            <div className="feature-item">
              <div className="feature-illustration">
                <div className="form-ui">
                  <div className="input-field">
                    <span className="pink-icon">◆</span>
                    <span>Title</span>
                  </div>
                  <div className="select-amount">
                    <span>Select amount</span>
                    <input type="text" defaultValue="010" />
                    <span className="info-icon">ℹ️</span>
                  </div>
                  <button className="tooltip-btn">Tooltip</button>
                </div>
              </div>
              <div className="feature-subtitle">
                <span>🧱</span>
                Built with Best Practices
              </div>
              <h3>Design meets structure</h3>
              <p>Modern UX patterns, accessibility, and semantic layers - So you impress users and Google alike.</p>
            </div>
            <div className="feature-item">
              <div className="feature-illustration">
                <div className="ui-components">
                  <div className="component pink-header"></div>
                  <div className="component calendar"></div>
                  <div className="component profile">
                    <div className="avatar-placeholder"></div>
                    <button>Sign In</button>
                  </div>
                </div>
              </div>
              <div className="feature-subtitle">
                <span>🚀</span>
                Ready-to-Launch Pages
              </div>
              <h3>Skip the setup. Ship faster.</h3>
              <p>All the essentials you need: landing pages, pricing sections, contact forms, and more - just customize, tweak to fit your brand, and publish in minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Designed for Any SaaS Section */}
      <section className="saas-section">
        <div className="container">
          <div className="section-header">
            <h2>Designed for Any SaaS, Built to Convert.</h2>
            <p>Whether you're launching an AI tool, developer platform, or marketing service — this template adapts to your vision with ease.</p>
          </div>
          <div className="accordion">
            <div className={`accordion-item ${activeAccordion === 'ai-tools' ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleAccordion('ai-tools')}>
                <span>AI Tools</span>
                <span className="toggle-icon">{activeAccordion === 'ai-tools' ? '×' : '+'}</span>
              </div>
              {activeAccordion === 'ai-tools' && (
                <div className="accordion-content">
                  <p>Whether you're launching an AI tool, developer platform, or marketing service, this template adapts to your vision with ease.</p>
                  <div className="key-features">
                    <h4>Key Features</h4>
                    <ul>
                      <li>Built for speed and scale</li>
                      <li>Clean, focused layout</li>
                      <li>Smart animations</li>
                      <li>Easy customization</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div className={`accordion-item ${activeAccordion === 'developer-platforms' ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleAccordion('developer-platforms')}>
                <span>Developer Platforms</span>
                <span className="toggle-icon">+</span>
              </div>
            </div>
            <div className={`accordion-item ${activeAccordion === 'productivity-startups' ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleAccordion('productivity-startups')}>
                <span>Productivity Startups</span>
                <span className="toggle-icon">+</span>
              </div>
            </div>
            <div className={`accordion-item ${activeAccordion === 'marketing-tools' ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleAccordion('marketing-tools')}>
                <span>Marketing Tools</span>
                <span className="toggle-icon">+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready-Made Pages Section */}
      <section className="ready-pages-section">
        <div className="container">
          <div className="section-header">
            <h2>Ready-Made, Beautifully Designed Pages.</h2>
            <p>From landing pages to pricing and blog layouts, every page is crafted to impress and optimized for performance.</p>
            <button className="primary-button">Get Started &gt;</button>
          </div>
          <div className="video-thumbnail">
            <div className="video-placeholder">
              <div className="play-button">▶</div>
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
          <div className="pricing-toggle">
            <span>Monthly</span>
            <div className="toggle-switch" onClick={() => setPricingToggle(pricingToggle === 'monthly' ? 'yearly' : 'monthly')}>
              <div className={`toggle-handle ${pricingToggle === 'yearly' ? 'yearly' : ''}`}></div>
            </div>
            <span>Yearly <span className="discount">20% Off</span></span>
          </div>
          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="plan-label">STARTUP</div>
              <h3>Free</h3>
              <div className="price">$0<span>/user/month</span></div>
              <button className="secondary-button">Get Started &gt;</button>
              <div className="features">
                <h4>For individuals</h4>
                <ul>
                  <li>✓ Access to core features</li>
                  <li>✓ Up to users included</li>
                  <li>✓ 10GB cloud storage</li>
                  <li>✓ Standard email support</li>
                </ul>
              </div>
            </div>
            <div className="pricing-card popular">
              <div className="popular-badge">MOST POPULAR</div>
              <div className="plan-label">COMMERCIAL</div>
              <h3>Premium</h3>
              <div className="price">$45<span>/user/month</span></div>
              <button className="primary-button">Get Started &gt;</button>
              <div className="features">
                <h4>Best for small teams</h4>
                <ul>
                  <li>✓ Everything in free</li>
                  <li>✓ Up to 50 users</li>
                  <li>✓ 100GB cloud storage</li>
                  <li>✓ Priority support with chat</li>
                  <li>✓ Access to advanced integrations</li>
                </ul>
              </div>
            </div>
            <div className="pricing-card">
              <div className="plan-label">ENTERPRISE</div>
              <h3>Platinum</h3>
              <div className="price">$75<span>/user/month</span></div>
              <button className="secondary-button">Get Started &gt;</button>
              <div className="features">
                <h4>Designed for companies</h4>
                <ul>
                  <li>✓ Everything in premium</li>
                  <li>✓ Unlimited users</li>
                  <li>✓ Customizable storage options</li>
                  <li>✓ Dedicated account manager</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Got Questions?</h2>
            <p>We've got answers—here's everything you need to know before getting started.</p>
          </div>
          <div className="faq-content">
            <div className="faq-visual">
              <div className="question-mark">?</div>
            </div>
            <div className="faq-list">
              <div className={`faq-item ${expandedFaq === 'free-template' ? 'expanded' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq('free-template')}>
                  <span>Is this really a free template?</span>
                  <span className="toggle-icon">{expandedFaq === 'free-template' ? '−' : '+'}</span>
                </div>
                {expandedFaq === 'free-template' && (
                  <div className="faq-answer">
                    <p>Yes, this template is completely free to use for personal and commercial projects.</p>
                  </div>
                )}
              </div>
              <div className={`faq-item ${expandedFaq === 'customize' ? 'expanded' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq('customize')}>
                  <span>Can I customize it without code?</span>
                  <span className="toggle-icon">{expandedFaq === 'customize' ? '−' : '+'}</span>
                </div>
                {expandedFaq === 'customize' && (
                  <div className="faq-answer">
                    <p>Absolutely! The template is designed to be easily customizable through visual editors.</p>
                  </div>
                )}
              </div>
              <div className={`faq-item ${expandedFaq === 'responsive' ? 'expanded' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq('responsive')}>
                  <span>Is it mobile responsive?</span>
                  <span className="toggle-icon">{expandedFaq === 'responsive' ? '−' : '+'}</span>
                </div>
                {expandedFaq === 'responsive' && (
                  <div className="faq-answer">
                    <p>Yes, the template is fully responsive and works perfectly on all devices.</p>
                  </div>
                )}
              </div>
              <div className={`faq-item ${expandedFaq === 'client-work' ? 'expanded' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq('client-work')}>
                  <span>Can I use it for client work?</span>
                  <span className="toggle-icon">{expandedFaq === 'client-work' ? '−' : '+'}</span>
                </div>
                {expandedFaq === 'client-work' && (
                  <div className="faq-answer">
                    <p>Yes, you can use this template for client projects and commercial work.</p>
                  </div>
                )}
              </div>
              <div className={`faq-item ${expandedFaq === 'framer-account' ? 'expanded' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq('framer-account')}>
                  <span>Do I need a Framer account to use it?</span>
                  <span className="toggle-icon">{expandedFaq === 'framer-account' ? '−' : '+'}</span>
                </div>
                {expandedFaq === 'framer-account' && (
                  <div className="faq-answer">
                    <p>No, you can use this template with any web development platform or framework.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <div className="container">
          <div className="section-header">
            <h2>Insights, Tips, and Product Updates.</h2>
            <p>Stay ahead with practical advice, behind-the-scenes updates, and the latest in SaaS and AI. Everything you need to grow—right here.</p>
          </div>
          <div className="blog-cards">
            <div className="blog-card">
              <div className="blog-image">
                <div className="image-placeholder">📸</div>
              </div>
              <h3>How Can Designers Prepare for the Future?</h3>
              <p>Designing for AI means blending logic with human insight, focusing on UX maturity, and meeting real user needs.</p>
              <a href="#" className="read-more">Read more →</a>
            </div>
            <div className="blog-card">
              <div className="blog-image">
                <div className="image-placeholder">📸</div>
              </div>
              <h3>Create a Landing Page That Performs Great</h3>
              <p>A landing page is a focused site made to drive leads or sales with a clear, strong CTA.</p>
              <a href="#" className="read-more">Read more →</a>
            </div>
            <div className="blog-card">
              <div className="blog-image">
                <div className="image-placeholder">📸</div>
              </div>
              <h3>Why Every Business Needs a Professional Website in 2025</h3>
              <p>A professional website is essential in today's digital economy—here's why every business should invest in one.</p>
              <a href="#" className="read-more">Read more →</a>
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
            <div className="footer-logo">⭐ PlacePin</div>
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
