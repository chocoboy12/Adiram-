const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const auth = require('../middleware/auth');
const emailService = require('../services/emailService');

// Envoyer un message de contact
router.post('/', async (req, res) => {
  try {
    const { nom, email, message } = req.body;
    console.log(req.body);
    const data={
      nom: nom,
      email: email,
      message: message
    }
    await emailService.sendtest({ data });
    console.log('Email sent');
    // const newContact = new Contact({
    //   nom,
    //   email,
    //   message
    // });
    
    // const contact = await newContact.save();
    // res.json({ success: true, message: 'Votre message a été envoyé avec succès' });
    res.status(200).send({ success: true, message: 'Votre message a été envoyé avec succès' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur serveur');
  }
});

// Obtenir tous les messages (protégé, admin seulement)
router.get('/', auth, async (req, res) => {
  try {
    // Vérifier si l'utilisateur est admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Accès non autorisé' });
    }
    
    const messages = await Contact.find().sort({ dateEnvoi: -1 });
    res.json(messages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur serveur');
  }
});

// Marquer un message comme lu (protégé, admin seulement)
router.put('/:id', auth, async (req, res) => {
  try {
    // Vérifier si l'utilisateur est admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Accès non autorisé' });
    }
    
    let contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({ message: 'Message non trouvé' });
    }
    
    // Mettre à jour
    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: { lu: true } },
      { new: true }
    );
    
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Message non trouvé' });
    }
    res.status(500).send('Erreur serveur');
  }
});

// Supprimer un message (protégé, admin seulement)
router.delete('/:id', auth, async (req, res) => {
  try {
    // Vérifier si l'utilisateur est admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Accès non autorisé' });
    }
    
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({ message: 'Message non trouvé' });
    }
    
    await Contact.findByIdAndRemove(req.params.id);
    
    res.json({ message: 'Message supprimé' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Message non trouvé' });
    }
    res.status(500).send('Erreur serveur');
  }
});

module.exports = router;