import React from 'react';
import '../styles/Team.css';
import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Amadou Diallo',
      role: 'Président',
      bio: 'Fondateur d\'ADIRAM avec plus de 15 ans d\'expérience dans le développement communautaire.',
      image: '/team/president.jpg'
    },
    {
      id: 2,
      name: 'Fatima Sy',
      role: 'Directrice des Programmes',
      bio: 'Spécialiste en gestion de projets avec une expertise en développement durable.',
      image: '/team/director.jpg'
    },
    {
      id: 3,
      name: 'Mohamed Camara',
      role: 'Responsable Financier',
      bio: 'Expert comptable avec une passion pour la transparence financière dans le secteur associatif.',
      image: '/team/finance.jpg'
    },
    {
      id: 4,
      name: 'Aïcha Mint',
      role: 'Coordinatrice Terrain',
      bio: 'Experte en mobilisation communautaire avec une connaissance approfondie de la région d\'Adrar.',
      image: '/team/coordinator.jpg'
    },
    {
      id: 5,
      name: 'Ibrahim Touré',
      role: 'Responsable Communication',
      bio: 'Journaliste de formation avec une expertise en communication pour le développement.',
      image: '/team/communication.jpg'
    },
    {
      id: 6,
      name: 'Mariam Sow',
      role: 'Chargée de Projets Éducatifs',
      bio: 'Enseignante de formation avec une passion pour l\'innovation pédagogique.',
      image: '/team/education.jpg'
    }
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="team-container">
      <motion.div 
        className="team-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1>Notre Équipe</h1>
        <p className="team-intro">
          Découvrez les personnes passionnées qui travaillent chaque jour pour réaliser la mission d'ADIRAM.
          Notre équipe diversifiée combine expertise technique, connaissance locale et engagement communautaire.
        </p>
      </motion.div>

      <motion.div 
        className="org-structure"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <h2>Structure Organisationnelle</h2>
        <div className="structure-content">
          <div className="structure-item">
            <h3>Conseil d'Administration</h3>
            <p>Composé de 7 membres élus pour un mandat de 3 ans, le conseil définit les orientations stratégiques de l'association.</p>
          </div>
          <div className="structure-item">
            <h3>Direction Exécutive</h3>
            <p>Responsable de la mise en œuvre des programmes et de la gestion quotidienne de l'association.</p>
          </div>
          <div className="structure-item">
            <h3>Équipes Terrain</h3>
            <p>Nos équipes locales travaillent directement avec les communautés pour mettre en œuvre nos projets.</p>
          </div>
          <div className="structure-item">
            <h3>Bénévoles</h3>
            <p>Plus de 50 bénévoles actifs soutiennent nos actions et contribuent à notre impact sur le terrain.</p>
          </div>
        </div>
      </motion.div>

      <h2 className="team-section-title">Membres Clés</h2>
      <motion.div 
        className="team-members"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {teamMembers.map(member => (
          <motion.div 
            key={member.id} 
            className="team-member-card"
            variants={itemVariants}
          >
            <div className="member-image-container">
              <div className="member-image-placeholder" aria-label={`Photo de ${member.name}`}>
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <p>{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="join-team-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <h2>Rejoignez Notre Équipe</h2>
        <p>
          Vous êtes passionné par le développement communautaire et souhaitez contribuer à notre mission ?
          Nous sommes toujours à la recherche de personnes talentueuses et engagées pour rejoindre notre équipe.
        </p>
        <button className="join-button">Voir les opportunités</button>
      </motion.div>
    </div>
  );
};

export default Team;