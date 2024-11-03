/* eslint-disable no-unused-vars */
import { getCommerseAll } from './actions/actions'; // Importa la función getCommerseAll desde el archivo de acciones
import { SET_DATA_COMMERSE } from './slices/commerseSlice'; // Importa la acción SET_DATA_COMMERSE desde el slice de comercio

// Define una constante GET_DATA_START que es una función asíncrona
export const GET_DATA_START = () => {
    return async (dispatch, getState) => {
        // Despacha la acción SET_DATA_COMMERSE con los datos obtenidos de getCommerseAll
        dispatch(
            SET_DATA_COMMERSE(
                await getCommerseAll(), // Llama a la función getCommerseAll y espera su resultado
            )
        )
    };
};