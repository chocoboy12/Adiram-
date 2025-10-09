import api from './api';

// Service pour les contacts
const contactService = {
  // Envoyer un message de contact
  sendMessage: async (contactData) => {
    try {
      const response = await api.post('/contacts', contactData);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      throw error;
    }
  },

  // Obtenir tous les messages (admin seulement)
  getAll: async () => {
    try {
      const response = await api.get('/contacts');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des messages:', error);
      throw error;
    }
  },

  // Marquer un message comme lu (admin seulement)
  markAsRead: async (id) => {
    try {
      const response = await api.put(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors du marquage du message ${id}:`, error);
      throw error;
    }
  },

  // Supprimer un message (admin seulement)
  delete: async (id) => {
    try {
      const response = await api.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la suppression du message ${id}:`, error);
      throw error;
    }
  }
};

export default contactService;