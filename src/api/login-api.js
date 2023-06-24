import axios from "./axios";
export const authenticate = async (email, password) => {
  try {
    const response = await axios.post("api/auth/login", { email, password });
    if (response.data) {
      return response.data;
    }
  } catch (err) {
    if (err.response && err.response.data) {
      return err.response.data;
    } else {
      return "No response from server";
    }
  }
};
