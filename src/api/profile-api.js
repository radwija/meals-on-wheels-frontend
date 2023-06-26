import { async } from "q";
import axios from "./axios";
import { getDistance } from "./map.-api";

export const getProfile = async (email, role) => {
  try {
    const response = await axios.get("api/me/profile", {
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

export const updateProfile = async (user, role) => {
  let distance = 0;
  if (role !== "partner") {
    try {
      distance = await getDistance(user.address);
    } catch (error) {
      return error.message;
    }
  }
  try {
    const requestData = {
      name: user.fullName,
      email: user.email,
      address: user.address,
      gender: user.gender,
      birthDay: user.birthDay,
      role: role,
      distance: distance,
    };
    const response = await axios.post("api/me/update-profile", requestData, {
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.response && error.response.data.error) {
      return "Update Failed";
    } else if (error.response && error.response.data) {
      return error.response.data;
    } else {
      return "No Response From Server";
    }
  }
};
