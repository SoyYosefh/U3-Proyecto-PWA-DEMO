import { PaymentModel } from "../models/PaymentModel";

// IdInstitutoOK: { type: String },
//         IdNegocioOK: { type: String },
//         IdPagoOK: { type: String },
//         IdPagoBK: { type: String },
//         IdOrdenOK: { type: String },
//         MontoTotal: { type: Number },
//         Observacion: { type: String },


export const PaymentValues = (values) => {
    
    let Payment = PaymentModel();

    Payment.idpago = values.idpago;
    Payment.IdInstitutoOK = values.IdInstitutoOK;
    Payment.IdNegocioOK = values.IdNegocioOK;
    Payment.IdPagoOK = values.IdPagoOK;
    Payment.IdPagoBK = values.IdPagoBK;
    Payment.IdOrdenOK = values.IdOrdenOK;
    Payment.MontoTotal = values.MontoTotal;
    Payment.Observacion = values.Observacion;

    return Payment;

} 