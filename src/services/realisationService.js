import api from './api';

// Service pour les réalisations
const realisationService = {
  // Obtenir toutes les réalisations
  getAll: async () => {
    try {
      const response = await api.get('/realisations');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des réalisations:', error);
      throw error;
    }
  },

  // Obtenir une réalisation par ID
  getById: async (id) => {
    try {
      const response = await api.get(`/realisations/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération de la réalisation ${id}:`, error);
      throw error;
    }
  },

  // Créer une nouvelle réalisation (admin seulement)
  create: async (realisationData) => {
    try {
      const response = await api.post('/realisations', realisationData);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création de la réalisation:', error);
      throw error;
    }
  },

  // Mettre à jour une réalisation (admin seulement)
  update: async (id, realisationData) => {
    try {
      const response = await api.put(`/realisations/${id}`, realisationData);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de la réalisation ${id}:`, error);
      throw error;
    }
  },

  // Supprimer une réalisation (admin seulement)
  delete: async (id) => {
    try {
      const response = await api.delete(`/realisations/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la suppression de la réalisation ${id}:`, error);
      throw error;
    }
  }
};

export default realisationService;