// api.js

import axios from "axios"; // import axios library for making HTTP requests

// Define the base URL for the API
const baseURL = "https://example.com/api";

// Create an axios instance with the base URL and some default headers
const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`, // use an environment variable for the API token
  },
});

// Define the API functions for fetching and mutating data

// Fetch the karyakarthas data from the API
export const fetchKaryakarthas = async () => {
  try {
    // Make a GET request to the karyakarthas endpoint
    const response = await api.get("/karyakarthas");
    // Return the data from the response
    return response.data;
  } catch (error) {
    // Handle the error and rethrow it
    handleError(error);
    throw error;
  }
};

// Add a new karyakartha to the API
export const addKaryakartha = async (data) => {
  try {
    // Make a POST request to the karyakarthas endpoint with the data
    const response = await api.post("/karyakarthas", data);
    // Return the data from the response
    return response.data;
  } catch (error) {
    // Handle the error and rethrow it
    handleError(error);
    throw error;
  }
};

// Delete a karyakartha from the API
export const deleteKaryakartha = async (id) => {
  try {
    // Make a DELETE request to the karyakarthas endpoint with the id
    const response = await api.delete(`/karyakarthas/${id}`);
    // Return the data from the response
    return response.data;
  } catch (error) {
    // Handle the error and rethrow it
    handleError(error);
    throw error;
  }
};

// Verify a karyakartha from the API
export const verifyKaryakartha = async (id) => {
  try {
    // Make a PATCH request to the karyakarthas endpoint with the id and the verified flag
    const response = await api.patch(`/karyakarthas/${id}`, { verified: true });
    // Return the data from the response
    return response.data;
  } catch (error) {
    // Handle the error and rethrow it
    handleError(error);
    throw error;
  }
};

// Fetch the incidents data from the API
export const fetchIncidents = async () => {
  try {
    // Make a GET request to the incidents endpoint
    const response = await api.get("/incidents");
    // Return the data from the response
    return response.data;
  } catch (error) {
    // Handle the error and rethrow it
    handleError(error);
    throw error;
  }
};

// Add a new incident to the API
export const addIncident = async (data) => {
  try {
    // Make a POST request to the incidents endpoint with the data
    const response = await api.post("/incidents", data);
    // Return the data from the response
    return response.data;
  } catch (error) {
    // Handle the error and rethrow it
    handleError(error);
    throw error;
  }
};

// Delete an incident from the API
export const deleteIncident = async (id) => {
  try {
    // Make a DELETE request to the incidents endpoint with the id
    const response = await api.delete(`/incidents/${id}`);
    // Return the data from the response
    return response.data;
  } catch (error) {
    // Handle the error and rethrow it
    handleError(error);
    throw error;
  }
};

// Resolve an incident from the API
export const resolveIncident = async (id) => {
  try {
    // Make a PATCH request to the incidents endpoint with the id and the resolved flag
    const response = await api.patch(`/incidents/${id}`, { resolved: true });
    // Return the data from the response
    return response.data;
  } catch (error) {
    // Handle the error and rethrow it
    handleError(error);
    throw error;
  }
};

// Fetch the reported voters data from the API
export const fetchReportedVoters = async () => {
  try {
    // Make a GET request to the reported voters endpoint
    const response = await api.get("/reported-voters");
    // Return the data from the response
    return response.data;
  } catch (error) {
    // Handle the error and rethrow it
    handleError(error);
    throw error;
  }
};

// Respond to a reported voter from the API
export const respondToReportedVoter = async (data) => {
  try {
    // Make a PATCH request to the reported voters endpoint with the id and the response
    const response = await api.patch(`/reported-voters/${data.id}`, {
      response: data.response,
    });
    // Return the data from the response
    return response.data;
  } catch (error) {
    // Handle the error and rethrow it
    handleError(error);
    throw error;
  }
};

// Delete a reported voter from the API
export const deleteReportedVoter = async (id) => {
  try {
    // Make a DELETE request to the reported voters endpoint with the id
    const response = await api.delete(`/reported-voters/${id}`);
    // Return the data from the response
    return response.data;
  } catch (error) {
    // Handle the error and rethrow it
    handleError(error);
    throw error;
  }
};

// Define a helper function to handle the errors from the API
const handleError = (error) => {
  // Check if the error has a response from the server
  if (error.response) {
    // The request was made and the server responded with a status code that falls out of the range of 2xx
    console.error("Server error:", error.response.data);
    // You can also display a user-friendly message based on the status code or the error message
    // For example, if the status code is 401, you can redirect the user to the login page
    // Or, if the error message is "Network Error", you can inform the user to check their internet connection
  } else if (error.request) {
    // The request was made but no response was received
    console.error("Request error:", error.request);
  } else {
    // Something else happened in setting up the request that triggered an error
    console.error("Other error:", error.message);
  }
};
