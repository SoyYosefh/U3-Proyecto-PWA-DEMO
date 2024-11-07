import axios from 'axios';

export async function getAllPagos() {
    return new Promise((resolve, reject) => {
        axios.get(`${import.meta.env.VITE_REST_API}/`)
            .then((response) => {
                const data = response.data;

                if (!data) {
                    console.log('<<AXIOS-ERROR>>: No se pudo obtener la información de << GetAllPagos >>');
                    reject(data)
                } else if (data.length === 0) {
                    console.log('<<AXIOS-ERROR>>: No se encontraron datos en << GetAllPagos >>');
                    resolve([])
                } else if (data.length > 0) {
                    console.log('<<AXIOS-GET>>: ', data);
                    resolve(JSON.parse(JSON.stringify(data)))
                }
            })
            .catch((error) => {
                console.log('<<AXIOS-ERROR>>: ', error);
                reject(error)
            })
    })
}