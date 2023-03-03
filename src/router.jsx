import Auth from "./pages/auth";
import Cart from "./pages/cart";
import App from "./pages/main/App";
import Map from "./pages/map";
import Other from "./pages/other";
import Shop, { loaderShop } from "./pages/shop";

const { createBrowserRouter } = require("react-router-dom");

export default createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: 'auth',
        element: <Auth />
    },
    {
        path: 'shop/:id',
        element: <Shop />,
        loader: loaderShop,
    },
    {
        path: 'map',
        element: <Map />
    },
    {
        path: 'cart',
        element: <Cart />
    },
    {
        path: 'other',
        element: <Other />
    }
])