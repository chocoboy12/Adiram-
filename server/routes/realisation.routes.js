const express = require('express');
const router = express.Router();
const Realisation = require('../models/Realisation');
const auth = require('../middleware/auth');

// Obtenir toutes les réalisations
router.get('/', async (req, res) => {
  try {
    const realisations = await Realisation.find().sort({ date: -1 });
    res.json(realisations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur serveur');
  }
});

// Obtenir une réalisation par ID
router.get('/:id', async (req, res) => {
  try {
    const realisation = await Realisation.findById(req.params.id);
    
    if (!realisation) {
      return res.status(404).json({ message: 'Réalisation non trouvée' });
    }
    
    res.json(realisation);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Réalisation non trouvée' });
    }
    res.status(500).send('Erreur serveur');
  }
});

// Créer une nouvelle réalisation (protégé)
router.post('/', auth, async (req, res) => {
  try {
    // Vérifier si l'utilisateur est admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Accès non autorisé' });
    }
    
    const { titre, description, image, lieu, categorie, impact } = req.body;
    
    const newRealisation = new Realisation({
      titre,
      description,
      image,
      lieu,
      categorie,
      impact
    });
    
    const realisation = await newRealisation.save();
    res.json(realisation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur serveur');
  }
});

// Mettre à jour une réalisation (protégé)
router.put('/:id', auth, async (req, res) => {
  try {
    // Vérifier si l'utilisateur est admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Accès non autorisé' });
    }
    
    const { titre, description, image, lieu, categorie, impact } = req.body;
    
    // Construire l'objet de mise à jour
    const realisationFields = {};
    if (titre) realisationFields.titre = titre;
    if (description) realisationFields.description = description;
    if (image) realisationFields.image = image;
    if (lieu) realisationFields.lieu = lieu;
    if (categorie) realisationFields.categorie = categorie;
    if (impact) realisationFields.impact = impact;
    
    let realisation = await Realisation.findById(req.params.id);
    
    if (!realisation) {
      return res.status(404).json({ message: 'Réalisation non trouvée' });
    }
    
    // Mettre à jour
    realisation = await Realisation.findByIdAndUpdate(
      req.params.id,
      { $set: realisationFields },
      { new: true }
    );
    
    res.json(realisation);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Réalisation non trouvée' });
    }
    res.status(500).send('Erreur serveur');
  }
});

// Supprimer une réalisation (protégé)
router.delete('/:id', auth, async (req, res) => {
  try {
    // Vérifier si l'utilisateur est admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Accès non autorisé' });
    }
    
    const realisation = await Realisation.findById(req.params.id);
    
    if (!realisation) {
      return res.status(404).json({ message: 'Réalisation non trouvée' });
    }
    
    await realisation.remove();
    
    res.json({ message: 'Réalisation supprimée' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Réalisation non trouvée' });
    }
    res.status(500).send('Erreur serveur');
  }
});

module.exports = router;