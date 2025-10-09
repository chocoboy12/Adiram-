const mongoose = require('mongoose');

const RealisationSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  lieu: {
    type: String,
    required: true
  },
  categorie: {
    type: String,
    enum: ['education', 'sante', 'agriculture', 'environnement', 'autre'],
    default: 'autre'
  },
  impact: {
    beneficiaires: {
      type: Number,
      default: 0
    },
    details: {
      type: String
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Realisation', RealisationSchema);