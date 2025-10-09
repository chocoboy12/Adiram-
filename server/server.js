require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

// Routes
const authRoutes = require('./routes/auth.routes');
const realisationRoutes = require('./routes/realisation.routes');
const contactRoutes = require('./routes/contact.routes');

// Initialisation de l'application
const app = express();
const PORT = 3002;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// // Connexion à MongoDB
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/adiram', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('Connexion à MongoDB établie avec succès'))
// .catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Routes API
app.use('/api/auth', authRoutes);
app.use('/api/realisations', realisationRoutes);
app.use('/api/contact', contactRoutes);

// Route pour vérifier que le serveur fonctionne
app.get('/api/status', (req, res) => {
  res.json({ status: 'Le serveur fonctionne correctement' });
});

// Servir les fichiers statiques en production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});