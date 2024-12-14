import { createBrowserRouter } from "react-router-dom";
import App from '../App.jsx';
import Register from "../pages/Register.jsx";

const routes =createBrowserRouter([
    {
        path:'/',
        element: <App/>,
    },
    {
        path:'/register',
        element: <Register/>,
    }
])

export default routes;