import axios, {BASE_URL} from "./axios";

 // FEEDBACK
 export const postfeedbackAPI = async (id) => {
    return await axios.post(`${BASE_URL}api/feedback`, {
      id, headers:{"Content-Type": "application/json"}
    })
  }

// GET MENU
export const getMenu = async (token) => {
  return await axios.get(`${BASE_URL}api/menu`, {
    headers: { Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"},
  })
}
// GET REQUEST MENU
export const getMenuById = async (token, id) => {
  return await axios.get(`${BASE_URL}api/menu/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}



 
