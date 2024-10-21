import apiClient from "./ApiConfig";

const BASE_API_URL = '/booking';

// Function to create an booking
export const createBooking = async (bookingData) => {
  try {
    const response = await apiClient.post(`${BASE_API_URL}`, bookingData);
    return response.data;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};

// Function to update an booking
export const updateBooking = async (id, bookingData) => {
  try {
    const response = await apiClient.put(`${BASE_API_URL}/${id}`, bookingData);
    return response.data;
  } catch (error) {
    console.error("Error updating booking:", error);
    throw error;
  }
};

// Function to delete an booking
export const deleteBooking = async (id) => {
  try {
    const response = await apiClient.delete(`${BASE_API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting booking:", error);
    throw error;
  }
};

// Function to get all bookings
export const getAllBookings = async () => {
  try {
    const response = await apiClient.get("/");
    return response.data;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw error;
  }
};

// Function to get bookings by criteria (with pagination)
export const getBookingsByCriteria = async (page, size) => {
  try {
    const response = await apiClient.get(`/`, {
      params: { page, size },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching bookings by criteria:", error);
    throw error;
  }
};

// Function to get a specific booking by ID
export const getVerfiedBookingById = async (id) => {
  try {
    const response = await apiClient.get(`${BASE_API_URL}/verfied/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching booking by ID:", error);
    throw error;
  }
};

// Function to change the status of an booking
export const changeBookingStatus = async (id, status) => {
  try {
    const response = await apiClient.put(`${BASE_API_URL}/change-status/${id}`, null, {
      params: { status },
    });
    return response.data;
  } catch (error) {
    console.error("Error changing booking status:", error);
    throw error;
  }
};

// Function to get all bookings by User
export const getAllBookingsByUser = async (user_id) => {
  try {
    const response = await apiClient.get(`${BASE_API_URL}/all/${user_id}`);
    console.log(user_id)
    return response.data;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw error;
  }
};
