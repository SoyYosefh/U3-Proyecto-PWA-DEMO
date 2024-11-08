//FIC: Material UI
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import { MaterialReactTable } from 'material-react-table';

//FIC: DB
import { useEffect, useState } from 'react';
// import PaymentsStaticData from '../../../../../db/ecommerse/json/payments/PaymentsData';
import { getAllPagos } from "../../../../services/remote/get/GetAllPagos";

// const PaymentColumns = [
//     {
//         accessorKey: "IdPaymentMethodOK",
//         header: "ID OK",
//         size: 30, //small column
//     },
//     {
//         accessorKey: "IdPaymentMethodBK",
//         header: "ID BK",
//         size: 30, //small column
//     },
//     {
//         accessorKey: "PaymentMethod",
//         header: "Metodo de Pago",
//         size: 150, //small column
//     },
//     {
//         accessorKey: "Bank",
//         header: "Banco",
//         size: 50, //small column
//     },
//     {
//         accessorKey: "AccountType",
//         header: "Tipo de Cuenta",
//         size: 30, //small column
//     },
//     {
//         accessorKey: "Currency",
//         header: "Divisa",
//         size: 150, //small column
//     },
//     {
//         accessorKey: "Status",
//         header: "Estatus",
//         size: 30, //small column
//     },
// ];

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
                                        <IconButton >
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
    );
}

export default PaymentsTable;