import Auth from "./pages/auth";
import App from "./pages/main/App";
import Map from "./pages/map";
import Shop from "./pages/shop";

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
        path: 'shop',
        element: <Shop />
    },
    {
        path: 'map',
        element: <Map />
    },
    {
        path: 'cart',
        element: <Shop />
    },
    {
        path: 'other',
        element: <Shop />
    }
])