
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Typography,
    TextField,
    DialogActions,
    Alert,
    Box
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import { useState } from "react";
// import { PaymentValues } from "../../../helpers/PaymentValues";
import { AddOnePayment } from "../../../../services/remote/post/AddOnePayment";
// eslint-disable-next-line react/prop-types
function AddPaymentModal({ AddPaymentShowModal, setAddPaymentShowModal, fetchDataPayment }) {

    const [mensajeErrorAlert, setMensajeErrorAlert] = useState("");
    const [mensajeExitoAlert, setMensajeExitoAlert] = useState("");
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            idpago: '',
            IdInstitutoOK: '',
            IdNegocioOK: '',
            IdPagoOK: '',
            IdPagoBK: '',
            IdOrdenOK: '',
            MontoTotal: '',
            Observacion: '',

        },
        validationSchema: Yup.object({
            idpago: Yup.string().required('ID Pago es requerido'),
            IdInstitutoOK: Yup.string().required('ID Instituto OK es requerido'),
            IdNegocioOK: Yup.string().required('ID Negocio OK es requerido'),
            IdPagoOK: Yup.string().required('ID Pago OK es requerido'),
            IdPagoBK: Yup.string().required('ID Pago BK es requerido'),
            IdOrdenOK: Yup.string().required('ID Orden OK es requerido'),
            MontoTotal: Yup.number()
                .required('Monto Total es requerido')
                .min(0, 'El monto debe ser positivo'),
            Observacion: Yup.string().max(250, 'La observación no debe exceder 250 caracteres'),

        }),
        onSubmit: async (values) => {
            setLoading(true);
            console.log('Formulario enviado:', values); // Verificar si se llega aquí
            values.estatus = [
                {
                    "detail_row": {
                        "Activo": "true",
                        "Borrado": "false",
                        "detail_row_reg": [
                            {
                                "FechaReg": Date.now(),
                                "UsuarioReg": "SYSTEM",
                            }
                        ]
                    },
                    "IdTipoEstatusOK": "EST-003",
                    "Actual": "Pendiente",
                    "Observacion": "Pago registrado pero no finalizado.",
                }
            ];
            values.info_ad = [
                {
                    "detail_row": {
                        "Activo": "Si",
                        "Borrado": "No",
                        "detail_row_reg": [
                            {
                                "FechaReg": "2025-10-25T10:00:00.000Z",
                                "UsuarioReg": "usuario6",
                            }
                        ]
                    },
                    "IdEtiquetaOK": "ETQ006",
                    "IdEtiqueta": "E006",
                    "Etiqueta": "Referencia",
                    "Valor": "52355",
                    "IdTipoSeccionOK": "SEC06",
                    "Secuencia": 6
                }
            ];

            values.forma_pago = [
                {
                    "pago_tarjeta": {
                        "IdTipoTarjertaOK": "TT005",
                        "IdTipoRed": "VISA",
                        "Banco": "BBVA",
                        "NombreTitular": "Juan Pérez",
                        "Numero": "5555555555555555",
                        "FechaVencimiento": "52/25",
                        "CodigoCVV": "523"
                    },
                    "datos_transaccion": {
                        "IdTransaccion": "TXN006",
                        "CodigoAutoriza": "AUT006",
                        "FechaReg": "2025-10-25T10:05:00.000Z"
                    },
                    "IdTipoMetodoOK": "TM06",
                    "Monto": 5000,
                    "IdTipoMonedaOK": "MXN",
                    "estatus": [
                        {
                            "detail_row": {
                                "Activo": "Si",
                                "Borrado": "No",
                                "detail_row_reg": [
                                    {
                                        "FechaReg": "2025-10-25T10:50:00.000Z",
                                        "UsuarioReg": "usuario5"
                                    }
                                ]
                            },
                            "IdTipoEstatusOK": "EST05",
                            "Actual": "Pagado",
                            "Observacion": "Pago completado"
                        }
                    ]
                }
            ];

            values.factura = [
                {
                    "IdPersonaOK": "PERS005",
                    "Nombre": "Juan Pérez",
                    "RFC": "RFC523556789",
                    "correo": "juan.perez@example.com",
                    "Telefono": "5555235567",
                    "IdTipoFacturaOK": "FAC005",
                    "IdTipoPago": "PAY05",
                    "domicilio": [
                        {
                            "IdDomicilioOK": "DOM005",
                            "CalleNumero": "Calle 523",
                            "CodPostal": "52355",
                            "Pais": "México",
                            "Estado": "CDMX",
                            "Municipio": "Benito Juárez",
                            "Localidad": "Colonia del Valle",
                            "Colonia": "Del Valle",
                        }
                    ],
                    "productos": [
                        {
                            "IdProdServOK": "PROD006",
                            "IdPresentaOK": "PRES006",
                            "Cantidad": 5,
                            "PrecioUnitario": 5000,
                            "descuentos": [
                                {
                                    "IdTipoDescuentoOK": "DSC006",
                                    "CodigoDescuento": "DESC60",
                                    "Monto": 500,
                                }
                            ],
                        }
                    ],
                }
            ]

            try {
                // Limpiamos mensajes anteriores
                // const payment = PaymentValues(values);
                setMensajeErrorAlert("");
                setMensajeExitoAlert("");

                console.log('Datos del formulario:', values);
                await AddOnePayment(values);
                setMensajeExitoAlert("Pago guardado exitosamente");
                fetchDataPayment()
            } catch (error) {
                console.error('Error al enviar el formulario:', error);
                setMensajeErrorAlert(error.response?.data?.message || error.message || "Error desconocido");
            }
            setLoading(false);
            formik.resetForm();
            // esperar 3 segundos y cerrar el modal
            setTimeout(() => {
                setAddPaymentShowModal(false);
            }, 2500);
            setAddPaymentShowModal(false);
        },
    });

    const handleClose = () => {
        formik.resetForm();
        setMensajeErrorAlert("");
        setMensajeExitoAlert("");
        setAddPaymentShowModal(false);
    };

    const getFieldProps = (fieldName) => ({
        ...formik.getFieldProps(fieldName),
        error: formik.touched[fieldName] && Boolean(formik.errors[fieldName]),
        helperText: formik.touched[fieldName] && formik.errors[fieldName],
    });

    return (
        <Dialog
            open={AddPaymentShowModal}
            onClose={handleClose}
            fullWidth
        >
            <form onSubmit={formik.handleSubmit}>
                <DialogTitle>
                    <Typography component="h6">
                        <strong>Agregar Nuevo Pago</strong>
                    </Typography>
                </DialogTitle>

                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }} dividers>
                    <Typography variant="h6">Información Principal</Typography>
                    <TextField
                        id="idpago"
                        label="ID Pago*"
                        {...getFieldProps('idpago')}
                    />
                    <TextField
                        id="IdInstitutoOK"
                        label="ID Instituto OK*"
                        {...getFieldProps('IdInstitutoOK')}
                    />
                    <TextField
                        id="IdNegocioOK"
                        label="ID Negocio OK*"
                        {...getFieldProps('IdNegocioOK')}
                    />
                    <TextField
                        id="IdPagoOK"
                        label="ID Pago OK*"
                        {...getFieldProps('IdPagoOK')}
                    />
                    <TextField
                        id="IdPagoBK"
                        label="ID Pago BK*"
                        {...getFieldProps('IdPagoBK')}
                    />
                    <TextField
                        id="IdOrdenOK"
                        label="ID Orden OK*"
                        {...getFieldProps('IdOrdenOK')}
                    />
                    <TextField
                        id="MontoTotal"
                        label="Monto Total*"
                        type="number"
                        inputProps={{ min: 0 }}
                        {...getFieldProps('MontoTotal')}
                    />
                    <TextField
                        id="Observacion"
                        label="Observación"
                        multiline
                        rows={3}
                        {...getFieldProps('Observacion')}
                    />
                </DialogContent>

                <DialogActions sx={{ display: 'flex', flexDirection: 'row' }}>

                    <Box m="auto">
                        {mensajeErrorAlert && (
                            <Alert severity="error">
                                <b>¡ERROR!</b> ─ {mensajeErrorAlert}
                            </Alert>
                        )}
                        {mensajeExitoAlert && (
                            <Alert severity="success">
                                <b>¡ÉXITO!</b> ─ {mensajeExitoAlert}
                            </Alert>
                        )}
                    </Box>

                    <LoadingButton
                        color="secondary"
                        loadingPosition="start"
                        startIcon={<CloseIcon />}
                        variant="outlined"
                        onClick={() => setAddPaymentShowModal(false)}
                    >
                        <span>CERRAR</span>
                    </LoadingButton>
                    <LoadingButton
                        color="primary"
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="contained"
                        type="submit"  // Asegúrate de que este atributo esté presente
                        disabled={!!mensajeExitoAlert}
                        loading={loading}
                    >
                        <span>GUARDAR</span>
                    </LoadingButton>

                </DialogActions>
            </form>
        </Dialog>
    );
}

export default AddPaymentModal;