import apiClient from "./ApiConfig";
const BASE_URL = 'http://localhost:8081/api/v1/stop'; 

  // Créer un nouvel stop
  export const createStop = async (stopReq) => {
    try {
      const response = await apiClient.post(BASE_URL, stopReq);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création de l\'arrêt:', error);
      throw error;
    }
  };

  // Ajouter plusieurs stops à un annonce existant
  export const addStops = async (stops) => {
    const formData = new FormData();

    // Prepare stops data
    formData.append('stops', new Blob([JSON.stringify(stops.map(stop => ({
        title: stop.title,
        description: stop.description,
        location: stop.location,
        date: stop.date,
        duration: stop.duration,
        announcement_id: stop.announcement_id
    })))], { type: 'application/json' }));

    // Prepare images
    stops.forEach((stop, index) => {
        if (stop.picture) {
            formData.append('images', stop.picture);  
        }
    });

    try {
        const response = await apiClient.post(`${BASE_URL}/add/multiple`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'ajout des arrêts:', error);
        throw error;
    }
};

  

  // Mettre à jour un stop existant
  export const updateStop = async (id, stopReq) => {
    try {
      const response = await apiClient.put(`${BASE_URL}/${id}`, stopReq);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'arrêt:', error);
      throw error;
    }
  };

  // Supprimer un stop par son ID
  export const deleteStop = async (id) => {
    try {
      const response = await apiClient.delete(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'arrêt:', error);
      throw error;
    }
  };

  // Récupérer tous les stops
  export const getAllStops =async (page = 0, size = 10) => {
    try {
      const response = await apiClient.get(`${BASE_URL}?page=${page}&size=${size}`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des arrêts:', error);
      throw error;
    }
  };

  // Récupérer un stop par son ID
  export const getStopById = async (id) => {
    try {
      const response = await apiClient.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'arrêt:', error);
      throw error;
    }
  };
