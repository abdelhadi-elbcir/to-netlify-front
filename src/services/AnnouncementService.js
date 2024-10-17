import apiClient from "./ApiConfig";


// Function to create an announcement
export const createAnnouncement = async (announcementData) => {
  try {
    const response = await apiClient.post("/announcement", announcementData);
    return response.data;
  } catch (error) {
    console.error("Error creating announcement:", error);
    throw error;
  }
};

// Function to update an announcement
export const updateAnnouncement = async (id, announcementData) => {
  try {
    const response = await apiClient.put(`/announcement/${id}`, announcementData);
    return response.data;
  } catch (error) {
    console.error("Error updating announcement:", error);
    throw error;
  }
};

// Function to delete an announcement
export const deleteAnnouncement = async (id) => {
  try {
    const response = await apiClient.delete(`/announcement/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting announcement:", error);
    throw error;
  }
};

// Function to get all announcements
export const getAllAnnouncements = async () => {
  try {
    const response = await apiClient.get("/announcement");
    return response.data;
  } catch (error) {
    console.error("Error fetching announcements:", error);
    throw error;
  }
};

// Function to get announcements by criteria (with pagination)
export const getAnnouncementsByCriteria = async (page, size) => {
  try {
    const response = await apiClient.get(`/announcement`, {
      params: { page, size },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching announcements by criteria:", error);
    throw error;
  }
};

// Function to get a specific announcement by ID
export const getAnnouncementById = async (id) => {
  try {
    const response = await apiClient.get(`/announcement/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching announcement by ID:", error);
    throw error;
  }
};

// Function to change the status of an announcement
export const changeAnnouncementStatus = async (id, status) => {
  try {
    const response = await apiClient.put(`/announcement/change-status/${id}`, null, {
      params: { status },
    });
    return response.data;
  } catch (error) {
    console.error("Error changing announcement status:", error);
    throw error;
  }
};
