import { async } from "q";
import axios from "./axios";

export const getProfile = async (email, role) => {
  try {
    const response = await axios.get("api/profile", {
      withCredentials: true,
      params: {
        email: email,
        role: role,
      },
    });
    if (response?.data) return response.data;
  } catch (error) {
    console.log(error.response.data);
    return null;
  }
};
