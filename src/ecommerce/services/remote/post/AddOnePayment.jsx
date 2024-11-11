import axios from "axios";

export function AddOnePayment(payment) {
    console.log("<<EJECUTA>>  API <<AddOnePayment>>")
    return new Promise((resolve, reject) => {
        axios.post(import.meta.env.VITE_REST_API, payment)
            .then((response) => {
                console.log("<<RESPONSE>>", response)
                const data = response.data;

                if (!data) {
                    console.error("<<ERROR>> <<NO>> se ejecuto la API <<AddOnePayment>> de forma correcta")
                    reject(data)
                } else if (data) {
                    console.log("<<SUCCESS>> <<AddOnePayment>>")
                    resolve(data)
                }
            })
            .catch((error) => {
                console.error("<<ERROR>> <<AddOnePayment>>", error)
                reject(error)
            })
    })
}