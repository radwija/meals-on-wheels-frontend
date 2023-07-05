import axios from "./axios";

export const getAdminMealAPI = async (token) => {
  return await axios.get("/admin/meal", {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  });
};

export const postAdminOrderDeliverAPI = async (token, orderId, driverId) => {
  return await axios.post(`/admin/order/${orderId}/deliver/${driverId}`, null, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  });
};

export const postAdminOrderPrepareAPI = async (token, orderId, partnerId) => {
  return await axios.post(`/admin/order/${orderId}/prepare/${partnerId}`, null, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  });
};

export const getAdminOrderAllAPI = async (token) => {
  return await axios.get("/admin/order/all", {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  });
};

export const getAdminOrderCompleteAPI = async (token) => {
  return await axios.get("/admin/order/complete", {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  });
};

export const getAdminOrderDeliveryCompleteAPI = async (token) => {
  return await axios.get("/admin/order/delivery-complete", {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  });
};

export const getAdminOrderOnDeliveryAPI = async (token) => {
  return await axios.get("/admin/order/on-delivery", {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  });
};

export const getAdminOrderPendingAPI = async (token) => {
  return await axios.get("/admin/order/pending", {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  });
};


export const getAdminOrderReadyToDeliverAPI = async (token) => {
  return await axios.get("/admin/order/ready-to-deliver", {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  });
};

export const getAdminUserCountAPI = async (token) => {
  return await axios.get("/admin/user/count", {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials : true 
  });
};

export const getAdminUserAPI = async (token) => {
  return await axios.get("/admin/user", {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  });
};

export const getAdminUserActiveAPI = async (token, id) => {
  return await axios.get(`/admin/user/${id}/activate`, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  });
};

export const getAdminPartnerAPI = async (token) => {
  return await axios.get("/admin/partner", {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  });
};

export const getAdminPartnerActiveAPI = async (token, id) => {
  return await axios.get(`/admin/partner/${id}/activate`, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  });
};

export const getPartnersAPI = async (token) => {
  return await axios.get("/admin/partner", {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true 
  });
};

export const getDriversAPI = async (token) => {
  return await axios.get("/admin/driver", {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  });
};

export const assignVolunteerAPI = async (token, id, rolecode) => {
  return await axios.get(`/admin/user/${id}/${rolecode}`, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  });
};

export const getMemberOrderAPI = async (token) => {
  return await axios.get("/member/order", {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    withCredentials: true
  });
};

export const getMemberOrderAllAPI = async (token) => {
  return await axios.get("/member/order/all", {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  });
};

export const postMemberOrderCreateAPI = async (token, id) => {
  return await axios.post(`/member/order/${id}/create`, null, {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  });
};

export const postMemberOrderCompleteAPI = async (token, id) => {
  return await axios.post(`/member/order/${id}/complete`, null, {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    withCredentials: true
  });
};

export const getPartnerOrderAPI = async (token) => {
  return await axios.get("/partner/order", {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    withCredentials: true
  });
};

export const getPartnerOrderAllAPI = async (token) => {
  return await axios.get("/partner/order/all", {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    withCredentials: true
  });
};

export const postPartnerOrderCreateAPI = async (token, id) => {
  return await axios.post(`/partner/order/${id}/create`, null, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  });
};

export const postPartnerOrderCompleteAPI = async (token, id) => {
  return await axios.post(`/partner/${id}/complete`, null, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  });
};

export const getDriverOrderAPI = async (token) => {
  return await axios.get("/driver/order", {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  });
};

export const postDriverOrderCreateAPI = async (token, id) => {
  return await axios.post(`/driver/order/${id}/deliver`, null, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  });
};

export const getDriverOrderAllAPI = async (token) => {
  return await axios.get("/driver/order/all", {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  });
};

export const postDriverOrderCompleteAPI = async (token, id) => {
  return await axios.post(`/driver/order/${id}/complete`, null, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  });
};

export const setStatusAPI = async (token, statusCode) => {
  return await axios.get(`/driver/status/${statusCode}`, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  });
};
