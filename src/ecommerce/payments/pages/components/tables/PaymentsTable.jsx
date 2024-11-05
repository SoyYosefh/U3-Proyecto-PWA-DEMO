//FIC: Material UI
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import { MaterialReactTable } from 'material-react-table';

//FIC: DB
import { useEffect, useState } from 'react';
import PaymentsStaticData from '../../../../../db/ecommerse/json/payments/PaymentsData';

const PaymentsColumns = [
    {
        accessorKey: "IdPaymentMethodOK",
        header: "ID OK",
        size: 30, //small column
    },
    {
        accessorKey: "IdPaymentMethodBK",
        header: "ID BK",
        size: 30, //small column
    },
    {
        accessorKey: "PaymentMethod",
        header: "Metodo de Pago",
        size: 150, //small column
    },
    {
        accessorKey: "Bank",
        header: "Banco",
        size: 50, //small column
    },
    {
        accessorKey: "AccountType",
        header: "Tipo de Cuenta",
        size: 30, //small column
    },
    {
        accessorKey: "Currency",
        header: "Divisa",
        size: 150, //small column
    },
    {
        accessorKey: "Status",
        header: "Estatus",
        size: 30, //small column
    },
];

function PaymentsTable() {

    const [loadingTable, setLoadingTable] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                //const productos = await getProducts();
                setData(data);
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
                columns={PaymentsColumns}
                data={PaymentsStaticData}
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