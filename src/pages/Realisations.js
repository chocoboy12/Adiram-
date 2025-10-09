import React, { useEffect, useRef, useState } from 'react';
import '../styles/Realisations.css';
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";

function Realisations() {
  const [selectedCard, setSelectedCard] = useState(null);
  const cardsRef = useRef([]);

  // Images des réalisations (normalement chargées depuis une API)
  const realisations = [
    {
      id: 1,
      title: "Formation sur les droits humains",
      description: "Atelier de formation sur les droits humains dans la commune de Gounzoureye, Août 2024",
      image: image1
    },
    {
      id: 2,
      title: "Sensibilisation communautaire",
      description: "Session de sensibilisation avec les leaders communautaires sur les droits humains",
      image: image2
    },
    {
      id: 3,
      title: "Distribution de t-shirts éducatifs",
      description: "Distribution de t-shirts portant des messages sur les droits humains",
      image: image3
    },
    {
      id: 4,
      title: "Rencontre avec les autorités locales",
      description: "Réunion avec les autorités locales pour discuter des initiatives de développement",
      image: image4
    }
  ];

  // Animation d'entrée des cartes au chargement
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    // Copy ref values into a stable variable
    const currentCards = cardsRef.current;

    currentCards.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      currentCards.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  // Gestion du clic sur une carte
  const handleCardClick = (id) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  return (
    <div className="realisations-page">
      <div className="container">
        <div className="page-header text-center">
          <h1 className="animate-title">Nos Réalisations</h1>
          <p className="lead animate-subtitle">
            Découvrez les actions menées par ADIRAM pour le développement des régions arides du Mali
          </p>
        </div>

        <div className="row mt-5">
          {realisations.map((realisation, index) => (
            <div key={realisation.id} className="col-md-6 col-lg-4 mb-4">
              <div
                ref={(el) => (cardsRef.current[index] = el)}
                className={`realisation-card card-animation ${selectedCard === realisation.id ? 'card-expanded' : ''}`}
                onClick={() => handleCardClick(realisation.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="realisation-image">
                  <img src={realisation.image} alt={realisation.title} className="img-fluid" />
                  <div className="image-overlay">
                    <span className="view-project">Voir le projet</span>
                  </div>
                </div>
                <div className="realisation-content">
                  <h3>{realisation.title}</h3>
                  <p>{realisation.description}</p>
                  <button
                    className="btn btn-outline-primary btn-animated"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Action spécifique au bouton
                    }}
                  >
                    Voir plus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4 mb-5">
          <button className="btn btn-primary">Voir toutes nos réalisations</button>
        </div>

        <div className="impact-section">
          <h2 className="text-center mb-4">Notre Impact</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="impact-stat">
                <h3>1000+</h3>
                <p>Personnes formées</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="impact-stat">
                <h3>20+</h3>
                <p>Communautés touchées</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="impact-stat">
                <h3>50+</h3>
                <p>Projets réalisés</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Realisations;