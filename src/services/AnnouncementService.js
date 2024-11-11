import apiClient from "./ApiConfig";

const BASE_API_URL = 'http://localhost:8081/api/v1/announcement';

// Function to create an announcement
export const createAnnouncement = async (announcementData) => {
  try {
    const response = await apiClient.post(`${BASE_API_URL}`, announcementData);
    return response.data;
  } catch (error) {
    console.error("Error creating announcement:", error);
    throw error;
  }
};

// Function to update an announcement
export const updateAnnouncement = async (id, announcementData) => {
  try {
    const response = await apiClient.put(`${BASE_API_URL}/${id}`, announcementData);
    return response.data;
  } catch (error) {
    console.error("Error updating announcement:", error);
    throw error;
  }
};

// Function to delete an announcement
export const deleteAnnouncement = async (id) => {
  try {
    const response = await apiClient.delete(`${BASE_API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting announcement:", error);
    throw error;
  }
};

// Function to get all announcements
export const getAllAnnouncements = async () => {
  try {
    const response = await apiClient.get(`${BASE_API_URL}/getAll`);
    return response.data;
  } catch (error) {
    console.error("Error fetching announcements:", error);
    throw error;
  }
};

// Function to get announcements by criteria (with pagination)
export const getAnnouncementsByCriteria = async (page, size) => {
  try {
    const response = await apiClient.get(`/`, {
      params: { page, size },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching announcements by criteria:", error);
    throw error;
  }
};

// Function to get a specific announcement by ID
export const getVerfiedAnnouncementById = async (id) => {
  try {
    const response = await apiClient.get(`${BASE_API_URL}/verfied/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching announcement by ID:", error);
    throw error;
  }
};

// Function to change the status of an announcement
export const changeAnnouncementStatus = async (id, status) => {
  try {
    const response = await apiClient.put(`${BASE_API_URL}/change-status/${id}`, null, {
      params: { status },
    });
    return response.data;
  } catch (error) {
    console.error("Error changing announcement status:", error);
    throw error;
  }
};

// Function to get all announcements by User
export const getAllAnnouncementsByUser = async (user_id) => {
  try {
    const response = await apiClient.get(`${BASE_API_URL}/all/${user_id}`);
    console.log(user_id)
    return response.data;
  } catch (error) {
    console.error("Error fetching announcements:", error);
    throw error;
  }
};
