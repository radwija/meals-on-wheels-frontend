import axios from "./axios";

export const register = async (user) => {
  return await axios.post(
    "api/auth/register",
    {
      name: user.name,
      email: user.email,
      address: user.address,
      gender: user.gender,
      role: user.role,
      qualification: user.qualification,
      photo: user.photo,
      password: user.password,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};
