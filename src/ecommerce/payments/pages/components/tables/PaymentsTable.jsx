//FIC: Material UI
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import { MaterialReactTable } from 'material-react-table';
import { Dialog } from "@mui/material";
//FIC: DB
import { useEffect, useState } from 'react';
// import PaymentsStaticData from '../../../../../db/ecommerse/json/payments/PaymentsData';
import { getAllPagos } from "../../../../services/remote/get/GetAllPagos";
import AddPaymentModal from "../modals/AddPaymentModal";
// src\ecommerce\payments\pages\components\modals\AddPaymentModal.jsx

const PaymentColumns = [
    {
        accessorKey: "_id",
        header: "ID",
        size: 50,
    },
    {
        accessorKey: "idpago",
        header: "ID Pago",
        size: 50,
    },
    {
        accessorKey: "IdInstitutoOK",
        header: "ID Instituto OK",
        size: 100,
    },
    // Acceso personalizado para niveles anidados
    {
        accessorFn: (row) => row.forma_pago?.[0]?.pago_tarjeta?.Banco || "N/A",
        header: "Banco Tarjeta",
        size: 100,
    },
    {
        accessorFn: (row) => row.forma_pago?.[0]?.pago_tarjeta?.NombreTitular || "N/A",
        header: "Nombre Titular Tarjeta",
        size: 150,
    },
    {
        accessorFn: (row) => row.forma_pago?.[0]?.datos_transaccion?.IdTransaccion || "N/A",
        header: "ID Transacción",
        size: 100,
    },
    {
        accessorFn: (row) => row.estatus?.[0]?.Actual || "N/A",
        header: "Estatus Actual",
        size: 100,
    },
    {
        accessorFn: (row) => row.estatus?.[0]?.Observacion || "N/A",
        header: "Observación Estatus",
        size: 150,
    },
    {
        accessorFn: (row) => row.factura?.[0]?.Nombre || "N/A",
        header: "Nombre Factura",
        size: 150,
    },
    {
        accessorFn: (row) => row.factura?.[0]?.RFC || "N/A",
        header: "RFC Factura",
        size: 100,
    },
    {
        accessorFn: (row) => row.factura?.[0]?.domicilio?.[0]?.CalleNumero || "N/A",
        header: "Calle y Número",
        size: 150,
    },
];

function PaymentsTable() {

    const [loadingTable, setLoadingTable] = useState(true);
    const [PaymentsData, setPaymentsData] = useState([]);
    const [AddPaymentShowModal, setAddPaymentShowModal] = useState(false);

    const fetchDataPayment = async () => {
        setLoadingTable(true);
        try {
            const pagos = await getAllPagos();
            setPaymentsData(pagos);
            setLoadingTable(false);
        } catch (error) {
            console.error(`Error al obtener los pagos`, error);
        }
        setLoadingTable(false);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const pagos = await getAllPagos();
                setPaymentsData(pagos);
                setLoadingTable(false);
            } catch (error) {
                console.error("Error al obtener productos:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <Box>
            <Box>
                <MaterialReactTable
                    columns={PaymentColumns}
                    // data={PaymentsStaticData}
                    data={PaymentsData}
                    initialState={{ density: "compact", showGlobalFilter: true }}
                    state={{ isLoading: loadingTable }}
                    renderTopToolbarCustomActions={
                        // eslint-disable-next-line no-unused-vars
                        ({ table }) => (
                            <>
                                {/* ------- BARRA DE ACCIONES ------ */}
                                <Stack direction="row" sx={{ m: 1 }}>
                                    <Box>
                                        <Tooltip title="Agregar">
                                            <IconButton
                                                onClick={() => setAddPaymentShowModal(true)}
                                            >
                                                <AddCircleIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Editar">
                                            <IconButton>
                                                <EditIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Eliminar">
                                            <IconButton>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Detalles ">
                                            <IconButton>
                                                <InfoIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                </Stack>
                                {/* ------- BARRA DE ACCIONES FIN ------ */}
                            </>
                        )
                    }
                />
            </Box>

            {/* Modales */}
            <Dialog open={AddPaymentShowModal}>
                <AddPaymentModal
                    fetchDataPayment={fetchDataPayment}
                    AddPaymentShowModal={AddPaymentShowModal}
                    setAddPaymentShowModal={setAddPaymentShowModal}
                    onClose={() => setAddPaymentShowModal(false)}
                />
            </Dialog>
        </Box>
    );
}

export default PaymentsTable;