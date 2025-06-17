import axios from "axios";

const BACKEND_URL = "http://localhost:8000"; 

export const addBooking = async (trip, userId) => {
  try {
    const payload = {
      user_id: userId,
      bookings: [trip],
    };

    const res = await axios.post(`${BACKEND_URL}/api/bookings`, payload);
    return res.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
