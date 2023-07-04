import axios, { BASE_URL } from './axios';

//GET ORDER
export const getPartnerOrderAPI = async (token) => {
    return await axios.get(`${BASE_URL}api/partner/order`, {
        headers: {'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"},
        withCredentials: true

    })
}

//GET ALL ORDERS
export const getPartnerOrderAllAPI = async (token) => {
    return await axios.get(`${BASE_URL}api/partner/order/all`, {
        headers:{Authorization:`Bearer ${token}`,
        "Content-Type": "application/json"},
        withCredentials: true
    })
}

//CREATE ORDER
export const postPartnerOrderCreateAPI = async (token, id) =>{
    return await axios.get( `${BASE_URL}api/partner/order/${id}/create`,{
        headers : {Authorization: `Bearer ${token}`},
        withCredentials: true
    })
}

//ORDER COMPLETE
export const postPartnerOrderCompleteAPI=async (token, id)=> {
    return await axios.get(`${BASE_URL}api/partner/${id}/complete`,{
        headers : {Authorization: `Bearer ${token}`},
        withCredentials : true
    })
}