import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Home.css';
import logo from '../assets/images/image.png';

function Home() {
  const heroRef = useRef(null);
  const [formStatus, setFormStatus] = useState({ message: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.classList.add('animate-in');
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      if (heroElement) {
        heroElement.classList.remove('animate-in');
      }
      observer.disconnect();
    };
  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ message: '', type: '' });

    const nom = e.target.nom.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    try {
      const contactapi = await fetch('http://localhost:3002/api/contact/', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ nom, email, message })
      });

      if (contactapi.ok) {
        setFormStatus({ message: 'Message envoyé avec succès !', type: 'success' });
        e.target.reset();
      } else {
        setFormStatus({ message: 'Erreur lors de l\'envoi du message', type: 'error' });
      }
    } catch (error) {
      setFormStatus({ message: 'Erreur de connexion au serveur', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const stats = [
    { number: '15+', label: 'Années d\'expérience' },
    { number: '50+', label: 'Projets réalisés' },
    { number: '100K+', label: 'Bénéficiaires' },
    { number: '20+', label: 'Partenaires' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 hero-content">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="hero-badge">Depuis 2003</div>
                <h1 className="hero-title">ADIRAM</h1>
                <h2 className="hero-subtitle">
                  Association pour le Développement Intégré des Régions Arides du Mali
                </h2>
                <p className="hero-text">
                  Œuvrer pour un développement durable et inclusif dans les régions arides du Mali
                </p>
                <div className="hero-buttons">
                  <Link to="/signup" className="btn btn-primary btn-hero">
                    Rejoignez-nous
                    <span className="btn-arrow">→</span>
                  </Link>
                  <Link to="/realisations" className="btn btn-hero-outline">
                    Nos réalisations
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-6 hero-image-container">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="hero-image-wrapper">
                  <img src={logo} alt="ADIRAM Logo" className="hero-image" />
                  <div className="image-glow"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-arrow"></div>
          <span>Découvrir</span>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <motion.div 
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="stat-item"
                variants={itemVariants}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission et Vision Section */}
      <section className="mission-vision-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Notre engagement</div>
            <h2 className="section-title">Mission & Vision</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <motion.div 
                className="mission-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3>Notre Mission</h3>
                <p>
                  ADIRAM a pour mission de militer pour un développement durable inclusif apportant 
                  appui et assistance techniques aux communautés les plus vulnérables du Mali en général 
                  et en particulier des régions du Nord afin de jouer un rôle visible, efficace et central 
                  dans les domaines du développement, de l'aide humanitaire, la protection et de la 
                  consolidation de la paix.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div 
                className="vision-card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3>Notre Vision</h3>
                <p>
                  Les communautés des Régions du Nord intègrent les dimensions de développement durable 
                  dans toutes les actions entreprises; avec l'implication des groupes vulnérables 
                  (jeunes et femmes) dans les prises des décisions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="values-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Ce qui nous guide</div>
            <h2 className="section-title">Nos Valeurs et Éthiques</h2>
            <p className="section-description">
              Des principes fondamentaux qui orientent toutes nos actions sur le terrain
            </p>
          </div>
          <motion.div 
            className="values-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="value-card" variants={itemVariants}>
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="8.5" cy="7" r="4"/>
                  <polyline points="17 11 19 13 23 9"/>
                </svg>
              </div>
              <h4>Respect de l'éthique</h4>
              <p>Respect des principes fondamentaux de l'action humanitaire.</p>
            </motion.div>

            <motion.div className="value-card" variants={itemVariants}>
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h4>Bonne gouvernance</h4>
              <p>La bonne gouvernance et la redevabilité envers les bénéficiaires et les donateurs.</p>
            </motion.div>

            <motion.div className="value-card" variants={itemVariants}>
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h4>Intelligence collective</h4>
              <p>Développement de l'intelligence collective et favoriser la cohésion dans un contexte de crise humanitaire.</p>
            </motion.div>

            <motion.div className="value-card" variants={itemVariants}>
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h4>Esprit critique</h4>
              <p>Cultiver un esprit critique où règne la confiance et le respect de la diversité.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Restons en contact</div>
            <h2 className="section-title">Contactez-nous</h2>
            <p className="section-description">
              Une question ? Un projet ? N'hésitez pas à nous contacter
            </p>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="contact-info-wrapper">
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h4>Adresse</h4>
                    <p>Gao, château Sud Extension près du terrain Bahia</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h4>Téléphone</h4>
                    <p>(+223) 76129581 / 76357593</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <p>adiram2003@yahoo.fr</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-form-wrapper">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Votre nom</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Jean Dupont" 
                      name="nom"
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Votre email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="jean.dupont@example.com" 
                      name="email"
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Votre message</label>
                    <textarea 
                      className="form-control" 
                      rows="5" 
                      placeholder="Comment pouvons-nous vous aider ?" 
                      name="message"
                      required
                    ></textarea>
                  </div>
                  
                  {formStatus.message && (
                    <div className={`form-status ${formStatus.type}`}>
                      {formStatus.message}
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                    <span className="btn-arrow">→</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;