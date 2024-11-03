import { configureStore } from "@reduxjs/toolkit";
import commerseReducer from "../slices/commerseSlice";

// Configuración del store de Redux
const store = configureStore({
    // Definimos los reducers que manejarán el estado de la aplicación
    reducer: {
        // El reducer 'commerse' manejará el estado relacionado con el comercio
        commerse: commerseReducer,
    },
});

// Exportamos el store para que pueda ser utilizado en la aplicación
export default store;