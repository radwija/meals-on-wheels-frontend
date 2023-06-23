import axios from "../api/axios";

export const applyPartnership = async (partner) => {
  const formData = new FormData();
  formData.append("companyName", partner.companyName);
  formData.append("companyEmail", partner.companyEmail);
  formData.append("companyAddress", partner.companyAddress);
  formData.append("password", partner.password);
  formData.append("photo", partner.photo);

  try {
    const response = await axios.post("api/partner/apply", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response?.data?.status) return response.data.status;
  } catch (error) {
    if (error.response && error.response.data.error) {
      return "File size too big, make sure it's under 1 MB";
    } else if (error.response && error.response.data) {
      return error.response.data;
    } else {
      return "No Response From Server";
    }
  }
};
