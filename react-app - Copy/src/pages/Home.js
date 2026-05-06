import { Link } from 'react-router-dom';
import './Home.css';

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    desc: 'Built with React 18 and optimized for performance from the ground up.',
  },
  {
    icon: '🗺️',
    title: 'Client-Side Routing',
    desc: 'Navigate between pages instantly with React Router — zero reloads.',
  },
  {
    icon: '📱',
    title: 'Fully Responsive',
    desc: 'Works beautifully on every screen size, from mobile to widescreen.',
  },
  {
    icon: '🎨',
    title: 'Clean Design',
    desc: 'A consistent design system with CSS variables for easy theming.',
  },
];

export default function Home() {
  return (
    <div className="home page-enter">
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">React + React Router v6</div>
          <h1 className="hero-title">
            Build apps that <br />
            <span className="hero-title--accent">feel instant</span>
          </h1>
          <p className="hero-subtitle">
            A clean multi-page React application with client-side routing,
            responsive design, and a polished dark UI ready for GitHub.
          </p>
          <div className="hero-actions">
            <Link to="/about" className="btn btn--primary">
              Learn More
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Get in Touch →
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-glow" />
          <div className="hero-grid" />
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="section-inner">
          <h2 className="section-title">What's included</h2>
          <p className="section-sub">
            Everything you need to start a new React project and push it to GitHub.
          </p>

          <div className="features-grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2 className="cta-title">Ready to explore?</h2>
          <p className="cta-sub">Check out the About and Contact pages to see routing in action.</p>
          <div className="hero-actions">
            <Link to="/about" className="btn btn--primary">About Us</Link>
            <Link to="/contact" className="btn btn--ghost">Contact →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
