import React, { useState } from 'react';
import '../styles/Programs.css';
import { motion, AnimatePresence } from 'framer-motion';

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      id: 1,
      title: "Éducation pour Tous",
      description: "Programme visant à améliorer l'accès à l'éducation dans les zones rurales d'Adrar.",
      activities: [
        "Construction et rénovation d'écoles",
        "Formation des enseignants",
        "Fourniture de matériel scolaire",
        "Bourses d'études pour les élèves défavorisés"
      ],
      impact: "Plus de 2000 enfants scolarisés et 15 écoles construites depuis 2015.",
      stats: { beneficiaries: "2000+", projects: "15", years: "2015" }
    },
    {
      id: 2,
      title: "Eau et Assainissement",
      description: "Initiative pour garantir l'accès à l'eau potable et améliorer les conditions sanitaires.",
      activities: [
        "Construction de puits et forages",
        "Installation de systèmes de filtration d'eau",
        "Sensibilisation aux pratiques d'hygiène",
        "Formation à la gestion des ressources en eau"
      ],
      impact: "30 villages équipés en points d'eau potable, bénéficiant à plus de 15 000 personnes.",
      stats: { beneficiaries: "15 000+", projects: "30", years: "2016" }
    },
    {
      id: 3,
      title: "Agriculture Durable",
      description: "Programme de soutien aux agriculteurs locaux pour développer des pratiques agricoles durables.",
      activities: [
        "Formation aux techniques agroécologiques",
        "Distribution de semences adaptées au climat local",
        "Création de coopératives agricoles",
        "Mise en place de systèmes d'irrigation économes en eau"
      ],
      impact: "500 agriculteurs formés et augmentation de 40% des rendements agricoles dans les zones ciblées.",
      stats: { beneficiaries: "500+", projects: "40%", years: "2017" }
    },
    {
      id: 4,
      title: "Santé Communautaire",
      description: "Initiative pour améliorer l'accès aux soins de santé de base dans les zones isolées.",
      activities: [
        "Cliniques mobiles dans les villages reculés",
        "Formation d'agents de santé communautaire",
        "Campagnes de vaccination",
        "Sensibilisation à la santé maternelle et infantile"
      ],
      impact: "Réduction de 35% de la mortalité infantile dans les zones d'intervention.",
      stats: { beneficiaries: "20 000+", projects: "35%", years: "2018" }
    },
    {
      id: 5,
      title: "Énergies Renouvelables",
      description: "Programme de promotion des énergies propres et accessibles pour les communautés rurales.",
      activities: [
        "Installation de panneaux solaires dans les villages",
        "Formation à la maintenance des équipements solaires",
        "Électrification des écoles et centres de santé",
        "Développement de cuiseurs économes en énergie"
      ],
      impact: "25 villages électrifiés grâce à l'énergie solaire, améliorant la qualité de vie de plus de 10 000 personnes.",
      stats: { beneficiaries: "10 000+", projects: "25", years: "2019" }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="programs-container">
      <motion.div 
        className="programs-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-overlay"></div>
        <motion.div 
          className="programs-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="header-badge">Nos Actions</div>
          <h1>Nos Programmes</h1>
          <p className="programs-intro">
            Découvrez les initiatives transformatrices d'ADIRAM qui contribuent au développement durable 
            de la région d'Adrar en Mauritanie. Nos programmes sont conçus en collaboration avec les 
            communautés locales pour répondre à leurs besoins spécifiques.
          </p>
        </motion.div>
      </motion.div>

      <div className="programs-content">
        <motion.div 
          className="programs-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {programs.map((program, index) => (
            <motion.div 
              key={program.id} 
              className="program-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              style={{ '--card-index': index }}
            >
              <div className="program-header">
                <div className="program-number">0{program.id}</div>
              </div>

              <h2>{program.title}</h2>
              <p className="program-description">{program.description}</p>
              
              <div className="program-stats">
                <div className="stat-item">
                  <div className="stat-value">{program.stats.beneficiaries}</div>
                  <div className="stat-label">Bénéficiaires</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{program.stats.projects}</div>
                  <div className="stat-label">Projets</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{program.stats.years}</div>
                  <div className="stat-label">Depuis</div>
                </div>
              </div>

              <div className="program-activities">
                <h3>Activités principales</h3>
                <ul>
                  {program.activities.map((activity, idx) => (
                    <li key={idx}>
                      <span className="activity-bullet">→</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="program-impact">
                <div className="impact-badge">Impact</div>
                <p>{program.impact}</p>
              </div>
              
              <button 
                className="program-details-btn"
                onClick={() => setSelectedProgram(program)}
              >
                En savoir plus
                <span className="btn-arrow">→</span>
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="get-involved"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="involved-header">
            <div className="header-badge">Agissez avec nous</div>
            <h2>Comment s'impliquer</h2>
            <p className="involved-subtitle">
              Ensemble, nous pouvons créer un impact durable dans la région d'Adrar
            </p>
          </div>

          <div className="involvement-options">
            <motion.div 
              className="involvement-option"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="option-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Devenir bénévole</h3>
              <p>Rejoignez notre équipe de bénévoles et contribuez directement à nos programmes sur le terrain.</p>
              <button className="option-btn">
                Postuler
                <span className="btn-arrow">→</span>
              </button>
            </motion.div>

            <motion.div 
              className="involvement-option featured"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="featured-badge">Populaire</div>
              <div className="option-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3>Faire un don</h3>
              <p>Soutenez financièrement nos programmes pour amplifier notre impact dans la région.</p>
              <button className="option-btn primary">
                Donner
                <span className="btn-arrow">→</span>
              </button>
            </motion.div>

            <motion.div 
              className="involvement-option"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="option-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <polyline points="17 11 19 13 23 9"/>
                </svg>
              </div>
              <h3>Devenir partenaire</h3>
              <p>Établissez un partenariat avec ADIRAM pour développer des initiatives conjointes.</p>
              <button className="option-btn">
                Nous contacter
                <span className="btn-arrow">→</span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Modal pour plus de détails */}
      <AnimatePresence>
        {selectedProgram && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProgram(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setSelectedProgram(null)}
              >
                ×
              </button>
              <h2>{selectedProgram.title}</h2>
              <p className="modal-description">{selectedProgram.description}</p>
              <div className="modal-impact">
                <strong>Impact:</strong> {selectedProgram.impact}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Programs;