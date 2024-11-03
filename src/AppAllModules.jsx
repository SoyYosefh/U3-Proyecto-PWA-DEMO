import { RouterProvider } from "react-router-dom";
import Footer from "./share/footer/components/Footer";
import router from "./navigation/NaviRoutesCommerce";

function AppAllModules() {

    return (
        <>
            <div id="div-app">
                <h1>Main App - All Modules</h1>
                <RouterProvider
                    router={router}
                />
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default AppAllModules;