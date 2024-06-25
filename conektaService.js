import axios from 'axios';

const BASE_URL = 'https://api.conekta.io';

// Get Authorization header with Bearer token
const getAuthorizationHeader = (key) => {
    return `Bearer ${key}`;
};

export const createCustomer = async (customerData) => {
    const response = await axios.post(`${BASE_URL}/customers`, customerData, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/vnd.conekta-v2.0.0+json',
            'Authorization': getAuthorizationHeader(process.env.REACT_APP_CONEKTA_PRIVATE_KEY)
        }
    });
    return response.data;
};

export const createOrder = async (orderData) => {
    const response = await axios.post(`${BASE_URL}/orders`, orderData, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/vnd.conekta-v2.0.0+json',
            'Authorization': getAuthorizationHeader(process.env.REACT_APP_CONEKTA_PRIVATE_KEY)
        }
    });
    return response.data;
};

export const createToken = async (cardData) => {
    const response = await axios.post(`${BASE_URL}/tokens`, { card: cardData }, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/vnd.conekta-v2.0.0+json',
            'Authorization': getAuthorizationHeader(process.env.REACT_APP_CONEKTA_PUBLIC_KEY)
        }
    });
    return response.data;
};
