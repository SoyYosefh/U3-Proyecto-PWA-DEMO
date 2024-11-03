import axios from 'axios';

export async function getCommerseAll() {
    let result = await axios.get(`${import.meta.env.VITE_REST_API_SECURITY_EDUCATION}/ecommerse`);
    console.log('<<AXIOS-COMMERSE>>: ', result.data);
    return result.data;
}