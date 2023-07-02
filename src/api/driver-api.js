import axios,{BASE_URL} from "./axios";

// GET ORDER
export const getDriverOrderAPI = async (token) => {
    return await axios.get(`${BASE_URL}api/driver/order`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  }

   // DELIVERY ORDER CREATE 
   export const postDriverOrderCreateAPI = async (token, id) => {
    return await axios.get(`${BASE_URL}api/driver/order/${id}/deliver`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  }

   // GET ALL ORDER
   export const getDriverOrderAllAPI = async (token, id) => {
    return await axios.get(`${BASE_URL}api/driver/order/all`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  }
  
  // ORDER COMPLETE
  export const postDriverOrderCompleteAPI = async (token, id) => {
    return await axios.get(`${BASE_URL}api/driver/order/${id}/complete`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  }
  
 
  // SET STATUS
  export const setStatusAPI = async (token, statusCode) => {
    return await axios.get(`${BASE_URL}api/driver/status/${statusCode}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  }