import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

const CommerseTabs = ["Pagos", "Otros"];

// eslint-disable-next-line no-unused-vars, react/prop-types
const CommerseNavTabs = ({ currentRowInCommerseTab, setCurrentNameTabInPrincipalTab }) => {

    const [currenTabIndex, setCurrentTabIndex] = useState(0);

    const handleChange = (e) => {

        console.log("entro al handleChange", e.target.innerText.toUpperCase());
        setCurrentNameTabInPrincipalTab(e.target.innerText.toUpperCase());
        switch (e.target.innerText.toUpperCase()) {
            case "Pagos":
                setCurrentTabIndex(0);
                break;
            // case "Otros":
            //     setCurrentTabIndex(1);
            //     break;
        }
    };
    return (
        <Box sx={{ border: (theme) => `2px solid ${theme.palette.divider}`, mx: 1, padding: 0.5 }}>
            <Tabs
                value={currenTabIndex}
                variant={"fullWidth"}
                onChange={handleChange}
                aria-label="icon tabs example"
                textColor="primary"
            >
                {CommerseTabs.map((tab) => {
                    return <Tab key={tab} label={tab} />;
                })}
            </Tabs>
        </Box>
    );
}

export default CommerseNavTabs;