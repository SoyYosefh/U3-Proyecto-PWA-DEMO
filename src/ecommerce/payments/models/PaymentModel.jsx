import { getDetailRow } from "../helpers/Utils";

export function PaymentModel() {
    let Payment = {
        idpago: { type: Number },
        IdInstitutoOK: { type: String },
        IdNegocioOK: { type: String },
        IdPagoOK: { type: String },
        IdPagoBK: { type: String },
        IdOrdenOK: { type: String },
        MontoTotal: { type: Number },
        Observacion: { type: String },
        // info_ad: [{
        //     IdEtiquetaOK: { type: String },
        //     IdEtiqueta: { type: String },
        //     Etiqueta: { type: String },
        //     Valor: { type: String },
        //     IdTipoSeccionOK: { type: String },
        //     Secuencia: { type: Number },
        //     detail_row: {
        //         Activo: { type: String },
        //         Borrado: { type: String },
        //         detail_row_reg: [{
        //             FechaReg: { type: String },
        //             UsuarioReg: { type: String }
        //         }]
        //     }
        // }],
        // forma_pago: [{
        //     IdTipoMetodoOK: { type: String },
        //     Monto: { type: Number },
        //     IdTipoMonedaOK: { type: String },
        //     pago_tarjeta: {
        //         IdTipoTarjertaOK: { type: String },
        //         IdTipoRed: { type: String },
        //         Banco: { type: String },
        //         NombreTitular: { type: String },
        //         Numero: { type: String },
        //         FechaVencimiento: { type: String },
        //         CodigoCVV: { type: String }
        //     },
        //     datos_transaccion: {
        //         IdTransaccion: { type: String },
        //         CodigoAutoriza: { type: String },
        //         FechaReg: { type: String }
        //     },
        //     estatus: [{
        //         IdTipoEstatusOK: { type: String },
        //         Actual: { type: String },
        //         Observacion: { type: String },
        //         detail_row: {
        //             Activo: { type: String },
        //             Borrado: { type: String },
        //             detail_row_reg: [{
        //                 FechaReg: { type: String },
        //                 UsuarioReg: { type: String }
        //             }]
        //         }
        //     }]
        // }],
        estatus: [{
            IdTipoEstatusOK: { type: String },
            Actual: { type: String },
            Observacion: { type: String },
            detail_row: getDetailRow(),
        }],
        // factura: [{
        //     IdPersonaOK: { type: String },
        //     Nombre: { type: String },
        //     RFC: { type: String },
        //     correo: { type: String },
        //     Telefono: { type: String },
        //     IdTipoFacturaOK: { type: String },
        //     IdTipoPago: { type: String },
        //     domicilio: [{
        //         IdDomicilioOK: { type: String },
        //         CalleNumero: { type: String },
        //         CodPostal: { type: String },
        //         Pais: { type: String },
        //         Estado: { type: String },
        //         Municipio: { type: String },
        //         Localidad: { type: String },
        //         Colonia: { type: String }
        //     }],
        //     productos: [{
        //         IdProdServOK: { type: String },
        //         IdPresentaOK: { type: String },
        //         Cantidad: { type: Number },
        //         PrecioUnitario: { type: Number },
        //         descuentos: []
        //     }]
        // }],
        // detail_row: {
        //     Activo: { type: String },
        //     Borrado: { type: String },
        //     detail_row_reg: [{
        //         FechaReg: { type: String },
        //         UsuarioReg: { type: String }
        //     }]
        // }
    };
    return Payment;
}
