import axios, { BASE_URL } from "./axios";


// GET MEAL
export const getAdminMealAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/meal`, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true
  })
}

// ADD MENU
export const addMenu = async (token, formData) => {
  return await axios.post(`${BASE_URL}/admin/menu/add`, formData, {
    headers: { 
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data" },
      withCredentials: true
     })
  }

// POST ORDER DELIVER
//assign driver ito order
export const postAdminOrderDeliverAPI = async (token, orderId, driverId) => {
  return await axios.get(
    `${BASE_URL}/admin/order/${orderId}/deliver/${driverId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true
    }
  )
}

// POST ORDER PREPARE
//assign partner into order
export const postAdminOrderPrepareAPI = async (token, orderId, partnerId) => {
  return await axios.get(
    `${BASE_URL}/admin/order/${orderId}/prepare/${partnerId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true
    }
  )
}

// ORDER ALL
export const getAdminOrderAllAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/order/all`, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials : true
  })
}

// ORDER COMPLETE
//list all complete order
export const getAdminOrderCompleteAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/order/complete`, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials : true
  })
}

// ORDER DELIVERY COMPLETE
export const getAdminOrderDeliveryCompleteAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/order/delivery-complete`, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials : true
  })
}

// ORDER ON DELIVERY
export const getAdminOrderOnDeliveryAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/order/on-delivery`, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials : true
  })
}

// ORDER PENDING
export const getAdminOrderPendingAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/order/pending`, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials : true
  })
}

// ORDER PREPARED
export const getAdminUserCountAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/user/count`, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials : true
  })
}

// ORDER READY TO DELIVER
export const getAdminOrderReadyToDeliverAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/order/ready-to-deliver`, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials : true
  })
}

// ADMIN USER
export const getAdminUserAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/user`, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials : true
  })
}

export const getAdminUserActiveAPI = async (token, id) => {
  return await axios.get(`${BASE_URL}/admin/user/${id}/activate`, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials : true
  })
}
export const getAdminPartnerAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/partner`, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials : true
  })
}

export const getAdminPartnerActiveAPI = async (token, id) => {
  return await axios.get(`${BASE_URL}/admin/partner/${id}/activate`, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials : true
  })
}

export const getPartnersAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/partner`, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials : true
  })
}

export const getDriversAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/driver`, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials : true
  })
}

export const assignVolunteerAPI = async (token, id, rolecode) => {
  return await axios.get(`${BASE_URL}/admin/user/${id}/${rolecode}`, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials : true
  })
}

// Function to get total volunteer count
export const getTotalVolunteerCount = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/admin/volunteer/count`, {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching total volunteer count:', error);
    throw error;
  }
};

// Function to get total partner count
export const getTotalPartnerCount = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/admin/partner/count`, {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching total partner count:', error);
    throw error;
  }
};

// Function to get total driver count
export const getTotalDriverCount = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/admin/driver/count`, {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching total driver count:', error);
    throw error;
  }
};
