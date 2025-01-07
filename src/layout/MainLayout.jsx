import { Outlet, ScrollRestoration, useLocation, } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import 'react-tooltip/dist/react-tooltip.css'

const MainLayout = () => {
    const location = useLocation()
    let isWFull = false;
    if (location.pathname === '/login') {
        isWFull = true
    }
    if (location.pathname === '/reg') {
        isWFull = true
    }

    return (
        <div className="dark:text-white exo-2-font ">
            <ScrollRestoration />
            <div className={`${isWFull ? '' : 'mxw p-0'}  sticky top-0 z-50`}>
                <Navbar></Navbar>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;