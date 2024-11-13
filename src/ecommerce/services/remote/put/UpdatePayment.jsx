import axios from "axios";

export function UpdatePayment(payment) {
    console.log("<<EJECUTA>>  API <<UpdatePayment>>")
    console.log("🚀 ~ returnnewPromise ~ import.meta.env.VITE_REST_API", import.meta.env.VITE_REST_API + "/" + payment.IdPagoOK)
    return new Promise((resolve, reject) => {
        axios.put(import.meta.env.VITE_REST_API + "/" + payment.IdPagoOK, payment)
            .then((response) => {
                console.log("<<RESPONSE>>", response)
                const data = response.data;

                if (!data) {
                    console.error("<<ERROR>> <<NO>> se ejecuto la API <<UpdatePayment>> de forma correcta")
                    reject(data)
                } else if (data) {
                    console.log("<<SUCCESS>> <<UpdatePayment>>")
                    resolve(data)
                }
            })
            .catch((error) => {
                console.error("<<ERROR>> <<UpdatePayment>>", error)
                reject(error)
            })
    })
}