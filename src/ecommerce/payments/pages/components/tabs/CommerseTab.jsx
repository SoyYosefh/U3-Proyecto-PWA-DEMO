import { Box } from "@mui/material";
import PaymentsTable from "../tables/PaymentsTable";

function CommerseTab() {

    return (
        <div>
            <Box>
                <h2>Tab con la tabla de la coleccion de pagos</h2>
                <PaymentsTable />
            </Box>
        </div>
    );
}

export default CommerseTab;