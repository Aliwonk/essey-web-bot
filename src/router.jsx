import Auth from "./pages/auth";
import App from "./pages/main/App";

const { createBrowserRouter } = require("react-router-dom");

export default createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: 'auth',
        element: <Auth />
    }
])