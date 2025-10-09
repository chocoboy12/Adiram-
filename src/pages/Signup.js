import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();

  // Validation des champs
  const validate = () => {
    const newErrors = {};
    
    // Validation du prénom
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est requis';
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = 'Le prénom doit contenir au moins 2 caractères';
    }
    
    // Validation du nom
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est requis';
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = 'Le nom doit contenir au moins 2 caractères';
    }
    
    // Validation de l'email
    if (!formData.email) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'email est invalide';
    }
    
    // Validation du mot de passe
    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre';
    }
    
    // Validation de la confirmation du mot de passe
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Veuillez confirmer votre mot de passe';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }
    
    return newErrors;
  };

  // Vérification de la validité du formulaire à chaque changement
  useEffect(() => {
    const errors = validate();
    const isValid = Object.keys(errors).length === 0;
    setFormValid(isValid);
    
    // Mettre à jour les erreurs uniquement pour les champs touchés
    const touchedErrors = {};
    Object.keys(touched).forEach(field => {
      if (touched[field] && errors[field]) {
        touchedErrors[field] = errors[field];
      }
    });
    
    setErrors(touchedErrors);
  }, [formData, touched]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      password: true,
      confirmPassword: true
    });
    
    const validationErrors = validate();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simuler une requête d'inscription
      setTimeout(() => {
        console.log('Signup data:', formData);
        setIsSubmitting(false);
        alert('Inscription réussie! Vous allez être redirigé vers la page Notre équipe.');
        // Réinitialiser le formulaire
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        setTouched({});
        // Redirection vers la page Notre équipe
        navigate('/notre-equipe');
      }, 1000);
    }
  };

  return (
    <div className="auth-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="auth-card">
              <div className="text-center mb-4">
                <img src="/logo-adiram.svg" alt="ADIRAM Logo" height="80" />
                <h2 className="mt-3">Inscription</h2>
                <p>Rejoignez ADIRAM pour contribuer au développement des régions arides du Mali</p>
              </div>
              
              <form onSubmit={handleSubmit} noValidate>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName" className="form-label">Prénom</label>
                    <input
                      type="text"
                      className={`form-control ${touched.firstName ? (errors.firstName ? 'is-invalid' : 'is-valid') : ''}`}
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                    {touched.firstName && !errors.firstName && <div className="valid-feedback">Parfait!</div>}
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName" className="form-label">Nom</label>
                    <input
                      type="text"
                      className={`form-control ${touched.lastName ? (errors.lastName ? 'is-invalid' : 'is-valid') : ''}`}
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                    {touched.lastName && !errors.lastName && <div className="valid-feedback">Parfait!</div>}
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className={`form-control ${touched.email ? (errors.email ? 'is-invalid' : 'is-valid') : ''}`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  {touched.email && !errors.email && <div className="valid-feedback">Email valide!</div>}
                </div>
                
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Mot de passe</label>
                  <input
                    type="password"
                    className={`form-control ${touched.password ? (errors.password ? 'is-invalid' : 'is-valid') : ''}`}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  {touched.password && !errors.password && <div className="valid-feedback">Mot de passe sécurisé!</div>}
                  {!touched.password && (
                    <div className="password-strength-info mt-1">
                      <small className="text-muted">Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre</small>
                    </div>
                  )}
                </div>
                
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirmer le mot de passe</label>
                  <input
                    type="password"
                    className={`form-control ${touched.confirmPassword ? (errors.confirmPassword ? 'is-invalid' : 'is-valid') : ''}`}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                  {touched.confirmPassword && !errors.confirmPassword && <div className="valid-feedback">Les mots de passe correspondent!</div>}
                </div>
                
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="terms" required />
                  <label className="form-check-label" htmlFor="terms">
                    J'accepte les <a href="#">termes et conditions</a>
                  </label>
                </div>
                
                <div className="d-grid gap-2">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-signup" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Inscription en cours...
                      </>
                    ) : 'S\'inscrire'}
                  </button>
                </div>
                
                <div className="text-center mt-3">
                  <p>Vous avez déjà un compte? <Link to="/login">Connectez-vous</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;