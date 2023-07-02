import axios from "./axios";

export const getAdminMealAPI = async (token) => {
  return await axios.get("/admin/meal", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const postAdminOrderDeliverAPI = async (token, orderId, riderId) => {
  return await axios.get(`/admin/order/${orderId}/deliver/${riderId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const postAdminOrderPrepareAPI = async (token, orderId, partnerId) => {
  return await axios.get(`/admin/order/${orderId}/prepare/${partnerId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getAdminOrderAllAPI = async (token) => {
  return await axios.get("/admin/order/all", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getAdminOrderCompleteAPI = async (token) => {
  return await axios.get("/admin/order/complete", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getAdminOrderDeliveryCompleteAPI = async (token) => {
  return await axios.get("/admin/order/delivery-complete", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getAdminOrderOnDeliveryAPI = async (token) => {
  return await axios.get("/admin/order/on-delivery", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getAdminOrderPendingAPI = async (token) => {
  return await axios.get("/admin/order/pending", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getAdminUserCountAPI = async (token) => {
  return await axios.get("/admin/user/count", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getAdminOrderReadyToDeliverAPI = async (token) => {
  return await axios.get("/admin/order/ready-to-deliver", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getAdminUserAPI = async (token) => {
  return await axios.get("/admin/user", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getAdminUserActiveAPI = async (token, id) => {
  return await axios.get(`/admin/user/${id}/activate`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getAdminPartnerAPI = async (token) => {
  return await axios.get("/admin/partner", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getAdminPartnerActiveAPI = async (token, id) => {
  return await axios.get(`/admin/partner/${id}/activate`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getPartnersAPI = async (token) => {
  return await axios.get("/admin/partner", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getDriversAPI = async (token) => {
  return await axios.get("/admin/driver", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const assignVolunteerAPI = async (token, id, rolecode) => {
  return await axios.get(`/admin/user/${id}/${rolecode}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getMemberOrderAPI = async (token) => {
  return await axios.get("/member/order", {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  });
};

export const getMemberOrderAllAPI = async (token) => {
  return await axios.get("/member/order/all", {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  });
};

export const postMemberOrderCreateAPI = async (token, id) => {
  return await axios.get(`/member/order/${id}/create`, {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  });
};

export const postMemberOrderCompleteAPI = async (token, id) => {
  return await axios.get(`/member/order/${id}/complete`, {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  });
};

export const getPartnerOrderAPI = async (token) => {
  return await axios.get("/partner/order", {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  });
};

export const getPartnerOrderAllAPI = async (token) => {
  return await axios.get("/partner/order/all", {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  });
};

export const postPartnerOrderCreateAPI = async (token, id) => {
  return await axios.get(`/partner/order/${id}/create`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const postPartnerOrderCompleteAPI = async (token, id) => {
  return await axios.get(`/partner/${id}/complete`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getDriverOrderAPI = async (token) => {
  return await axios.get("/driver/order", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const postDriverOrderCreateAPI = async (token, id) => {
  return await axios.get(`/driver/order/${id}/deliver`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getDriverOrderAllAPI = async (token) => {
  return await axios.get("/driver/order/all", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const postDriverOrderCompleteAPI = async (token, id) => {
  return await axios.get(`/driver/order/${id}/complete`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const setStatusAPI = async (token, statusCode) => {
  return await axios.get(`/driver/status/${statusCode}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
