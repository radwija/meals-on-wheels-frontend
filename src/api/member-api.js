import axios, { BASE_URL } from './axios'

//GET ORDER 
export const getMemberOrderAPI = async (token) => {
    return await axios.get(`${BASE_URL}api/member/order`, {
        headers: {Authorization:  `Bearer ${token}`,
        "Content-Type": "application/json"},
        withCredentials: true
    })
}

//GET ALL ORDERS
export const getMemberOrderAllAPI = async (token) => {
    return await axios.get(`${BASE_URL}api/member/order/all`, {
        headers:{Authorization:`Bearer ${token}`,
        "Content-Type": "application/json"},
        withCredentials: true
    })
}

//ORDER CREATE 
export const postMemberOrderCreateAPI = async (token, id) =>{
    return await axios.get( `${BASE_URL}api/member/order/${id}/create`,{
        headers : {Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"},
        withCredentials : true
    })
}

//ORDER COMPLETE
export const postMemberOrderCompleteAPI = async (token,id) => {
    return await axios.get(`${BASE_URL}api/member/order/${id}/complete`, {
        headers: { Authorization: `Bearer ${token}` ,
        "Content-Type": "application/json"},
        withCredentials: true 
    })
}

