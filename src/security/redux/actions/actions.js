import axios from 'axios';

export async function getCommerseAll() {
    let result = await axios.get(`${import.meta.env.VITE_REST_API}/`);
    console.log('<<AXIOS-COMMERSE>>: ', result.data);
    return result.data;
}