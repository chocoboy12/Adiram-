import React from 'react';
import '../styles/About.css';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="about-container">
      <motion.div 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-overlay"></div>
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1>À propos d'ADIRAM</h1>
          <div className="about-subtitle">
            Association pour le Développement Intégré de la Région Adrar-Mauritanie
          </div>
          <div className="header-decoration"></div>
        </motion.div>
      </motion.div>

      <div className="about-content">
        <motion.section 
          className="about-section intro-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-badge">Notre Histoire</div> <br />
          <h2>Qui sommes-nous ?</h2>
          <div className="intro-content">
            <p className="lead-text">
              Nous sommes des maliens de formations différentes (enseignants, agroforestiers, sociologues) 
              anciens employés de World Vision International qui ont accepté de mettre leur 
              savoir-faire et savoir-être en synergie pour contribuer au développement du Mali en général 
              et des régions du Nord en particulier.
            </p>
            <p>
              Depuis sa création, ADIRAM a évolué d'une petite initiative locale à une organisation reconnue, 
              travaillant en étroite collaboration avec les communautés locales, les autorités régionales et 
              les partenaires internationaux pour mettre en œuvre des projets transformateurs dans toute la 
              région d'Adrar.
            </p>
          </div>
        </motion.section>

        <motion.section 
          className="about-section mission-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-badge">Notre Raison d'Être</div> <br />
          <h2>Notre Mission</h2>
          <p className="mission-intro">
            La mission d'ADIRAM est de promouvoir un développement intégré et durable de la région d'Adrar 
            en Mauritanie, en mettant l'accent sur l'amélioration des conditions de vie des populations locales, 
            la préservation de l'environnement et la valorisation du patrimoine culturel.
          </p>
          
          <motion.div 
            className="mission-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div className="mission-card" variants={itemVariants}>
              <div className="mission-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3>Développement Économique</h3>
              <p>Soutenir les initiatives économiques locales, promouvoir l'entrepreneuriat et créer des opportunités d'emploi.</p>
            </motion.div>

            <motion.div className="mission-card" variants={itemVariants}>
              <div className="mission-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <h3>Éducation et Formation</h3>
              <p>Améliorer l'accès à l'éducation et offrir des formations professionnelles adaptées aux besoins locaux.</p>
            </motion.div>

            <motion.div className="mission-card" variants={itemVariants}>
              <div className="mission-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3>Santé et Bien-être</h3>
              <p>Faciliter l'accès aux soins de santé et promouvoir des pratiques sanitaires durables.</p>
            </motion.div>

            <motion.div className="mission-card" variants={itemVariants}>
              <div className="mission-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                  <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
              </div>
              <h3>Environnement</h3>
              <p>Lutter contre la désertification, promouvoir les énergies renouvelables et la gestion durable des ressources.</p>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section 
          className="about-section values-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-badge">Ce qui nous guide</div> <br />
          <h2>Nos Valeurs</h2>
          
          <motion.div 
            className="values-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div className="value-card" variants={itemVariants}>
              <div className="value-number">01</div>
              <div className="value-content">
                <h3>Solidarité</h3>
                <p>Nous croyons en la force de la communauté et en l'importance de s'entraider pour surmonter les défis.</p>
              </div>
            </motion.div>

            <motion.div className="value-card" variants={itemVariants}>
              <div className="value-number">02</div>
              <div className="value-content">
                <h3>Durabilité</h3>
                <p>Nous nous engageons à mettre en œuvre des solutions qui répondent aux besoins actuels sans compromettre ceux des générations futures.</p>
              </div>
            </motion.div>

            <motion.div className="value-card" variants={itemVariants}>
              <div className="value-number">03</div>
              <div className="value-content">
                <h3>Innovation</h3>
                <p>Nous encourageons la créativité et l'adoption de nouvelles approches pour résoudre les problèmes complexes.</p>
              </div>
            </motion.div>

            <motion.div className="value-card" variants={itemVariants}>
              <div className="value-number">04</div>
              <div className="value-content">
                <h3>Transparence</h3>
                <p>Nous valorisons l'honnêteté, la responsabilité et la communication ouverte dans toutes nos actions.</p>
              </div>
            </motion.div>

            <motion.div className="value-card" variants={itemVariants}>
              <div className="value-number">05</div>
              <div className="value-content">
                <h3>Respect</h3>
                <p>Nous respectons la diversité culturelle, les traditions locales et la dignité de chaque individu.</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section 
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-content">
            <h2>Rejoignez Notre Mission</h2>
            <p>Ensemble, nous pouvons faire la différence dans la région d'Adrar</p>
            <div className="cta-buttons">
              <a href="/nos-programmes" className="btn-primary">Découvrir nos programmes</a>
              <a href="/contact" className="btn-secondary">Nous contacter</a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;