
import { Box } from "@mui/material";
import CommerseNavTabs from "./components/tabs/CommerseNavTab";
import { useState } from "react";
import CommerseTab from "./components/tabs/CommerseTab";


function Payments() {
    // eslint-disable-next-line no-unused-vars
    const [currentRowInCommerseTab, setCurrentRowInCommerseTab] = useState(0);
    const [currentNameTabInPrincipalTab, setCurrentTabInPrincipalTab] = useState("Pagos");

    return (
        <div>
            <h2>Pays - Types</h2>
            <Box>
                {/* llamada intrinsica (props) */}
                <CommerseNavTabs
                    setCurrentRowInCommerseTab={setCurrentRowInCommerseTab}
                    setCurrentTabInPrincipalTab={setCurrentTabInPrincipalTab}
                />
                {currentNameTabInPrincipalTab == "Pagos" && <CommerseTab />}
            </Box>
        </div>
    );
}

export default Payments;