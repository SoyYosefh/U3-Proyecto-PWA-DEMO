import { createSlice } from '@reduxjs/toolkit';

// Estado inicial del slice, que contiene un array vacío para los datos de comercio
const initialState = {
    commerseDataArr: [],
}

// Creación del slice de Redux para manejar el estado relacionado con el comercio
const commerseSlice = createSlice({
    name: 'commerse', // Nombre del slice
    initialState, // Estado inicial definido anteriormente
    reducers: {
        // Definición del reductor para establecer los datos de comercio
        SET_DATA_COMMERSE: (state, action) => {
            console.log('<<REDUX-REDUCER>>:<<SET_DATA_INSTITUTES>>', action.payload);
            // Actualiza el estado con los datos proporcionados en la acción
            state.commerseDataArr = action.payload;
        }
    }
});

// Exporta la acción para que pueda ser utilizada en otros lugares de la aplicación
export const { SET_DATA_COMMERSE } = commerseSlice.actions;
// Exporta el reductor para que pueda ser utilizado en la configuración del store de Redux
export default commerseSlice.reducer;