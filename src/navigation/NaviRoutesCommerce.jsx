import { createBrowserRouter } from "react-router-dom";
import Home from "../ecommerce/home/pages/Home";
import Products from "../ecommerce/products/pages/Products";
import Prices from "../ecommerce/prices/pages/Prices";
import Orders from "../ecommerce/orders/pages/Orders";
import Payments from "../ecommerce/payments/pages/Payments";
import Shippings from "../ecommerce/shipping/pages/Shippings";
import Inventories from "../ecommerce/inventories/pages/Inventories";
import Error from "../share/errors/pages/Error";

const CommerceRouter  = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
        children: [
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/prices",
                element: <Prices />,
            },
            {
                path: "/orders",
                element: <Orders />,
            },
            {
                path: "/payments",
                element: <Payments />,
            },
            {
                path: "/shippings",
                element: <Shippings />,
            },
            {
                path: "/inventories",
                element: <Inventories />,
            },
        ],
    },
]);
export default CommerceRouter ;