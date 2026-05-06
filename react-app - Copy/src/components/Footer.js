import { NavLink } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">My<span>App</span></span>
          <p className="footer-tagline">Building great things, one page at a time.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <NavLink to="/" className="footer-link">Home</NavLink>
          <NavLink to="/about" className="footer-link">About</NavLink>
          <NavLink to="/contact" className="footer-link">Contact</NavLink>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MyApp. Built with React & React Router.</p>
      </div>
    </footer>
  );
}
