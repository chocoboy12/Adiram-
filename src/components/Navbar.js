import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/images/image.png';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/a-propos', label: 'À propos' },
    { path: '/notre-equipe', label: 'Notre équipe' },
    { path: '/nos-programmes', label: 'Nos programmes' },
    { path: '/realisations', label: 'Réalisations' },
    { path: '/login', label: 'Connexion' }
  ];

  return (
    <nav className={`navbar navbar-expand-lg ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <div className="logo-container">
            <img src={logo} alt="ADIRAM Logo" height="60" className="logo-image" />
            <span className="ms-2 logo-text">ADIRAM</span>
          </div>
        </Link>
        
        <button 
          className={`navbar-toggler ${expanded ? 'expanded' : ''}`} 
          type="button" 
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </span>
        </button>

        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item theme-toggle-item">
              <ThemeToggle />
            </li>
            
            {navItems.map((item, index) => (
              <li 
                key={item.path} 
                className="nav-item"
                style={{ '--item-index': index }}
              >
                <Link 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`} 
                  to={item.path}
                >
                  {item.label}
                  <span className="nav-indicator"></span>
                </Link>
              </li>
            ))}
            
            <li className="nav-item">
              <Link className="nav-link btn-signup" to="/signup">
                Inscription
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;