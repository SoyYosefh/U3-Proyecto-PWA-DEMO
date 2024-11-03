import { RouterProvider } from "react-router-dom";
import Footer from "./share/footer/components/Footer";
import CommerceRouter from "./navigation/NaviRoutesCommerce";

import { GET_DATA_START } from "./security/redux/thunks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function AppAllModules() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GET_DATA_START()).then(() => {
            //setLoading(false);
            console.log("<<END-DISPATCH>>: GET_DATA_START se ejecuto de forma correcta");
        });
    }, []);

    return (
        <>
            <div id="div-app">
                {/* <h1>Main App - All Modules</h1> */}
                <RouterProvider
                    router={CommerceRouter}
                />
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default AppAllModules;