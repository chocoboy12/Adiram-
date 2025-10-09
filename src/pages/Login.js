import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous implémenteriez la logique d'authentification
    console.log('Login attempt:', formData);
    // Simuler une connexion réussie
    alert('Connexion réussie! Découvrez plus sur ADIRAM');
    // Rediriger vers la page À propos
    navigate('/a-propos');
  };

  return (
    <div className="auth-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="auth-card">
              <div className="text-center mb-4">
                <img src="/logo-adiram.svg" alt="ADIRAM Logo" height="80" />
                <h2 className="mt-3">Connexion</h2>
                <p>Accédez à votre compte ADIRAM</p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Se souvenir de moi</label>
                </div>
                
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">Se connecter</button>
                </div>
                
                <div className="text-center mt-3">
                  <p>Vous n'avez pas de compte? <Link to="/signup">Inscrivez-vous</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;