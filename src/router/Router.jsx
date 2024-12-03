import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import PageNotFound from "../components/ErrorPage/PageNotFound";
import AllEquipment from "../pages/AllEquipment/AllEquipment";
import AddEquipment from "../pages/AddEquipment/AddEquipment";
import MyEquipment from "../pages/MyEquipment/MyEquipment";
import Login from "../pages/Form/Login/Login";
import Register from "../pages/Form/Register/Register";
const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        PageNotFound: <PageNotFound></PageNotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'allEquipment',
                element: <AllEquipment></AllEquipment>
            },
            {
                path: 'addEquipment',
                element: <AddEquipment></AddEquipment>
            },
            {
                path: 'myEquipment',
                element: <MyEquipment></MyEquipment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/reg",
                element: <Register></Register>
            }
        ]
    },
]);
export default Router;