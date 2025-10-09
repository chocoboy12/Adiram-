import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>ADIRAM</h5>
            <p>Association pour le Développement Intégré des Régions Arides du Mali</p>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <p>Gao, château Sud Extension près du terrain Bahia</p>
            <p>Tel: (+223) 76129581/76357593</p>
            <p>Email: adiram2003@yahoo.fr</p>
          </div>
          <div className="col-md-4">
            <h5>Liens Rapides</h5>
            <ul className="list-unstyled">
              <li><a href="/">Accueil</a></li>
              <li><a href="/realisations">Réalisations</a></li>
              <li><a href="/login">Connexion</a></li>
              <li><a href="/signup">Inscription</a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <p>&copy; {new Date().getFullYear()} ADIRAM - Tous droits réservés</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;