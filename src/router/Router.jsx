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
import PrivetRoute from "../route/PrivetRoute";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import UpdatePage from "../pages/UpdatePage/UpdatePage";
const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
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
                element: <PrivetRoute><AddEquipment></AddEquipment></PrivetRoute>
            },
            {
                path: 'myEquipment',
                element: <PrivetRoute><MyEquipment></MyEquipment></PrivetRoute>
            },
            {
                path: 'details-page/:id',
                element: <PrivetRoute> <DetailsPage></DetailsPage></PrivetRoute>,
                loader: ({ params }) => fetch(`https://equi-sports-server-side-ten.vercel.app/all-equipments/${params.id}`)
            },
            {
                path: 'update-page/:id',
                element: <PrivetRoute> <UpdatePage></UpdatePage></PrivetRoute>,
                loader: ({ params }) => fetch(`https://equi-sports-server-side-ten.vercel.app/all-equipments/${params.id}`)
            },
            {
                path: 'product-details/:id',
                element: <PrivetRoute> <DetailsPage></DetailsPage></PrivetRoute>,
                loader: ({ params }) => fetch(`https://equi-sports-server-side-ten.vercel.app/all-equipments/${params.id}`)
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
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
]);
export default Router;