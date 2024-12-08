import { Outlet, ScrollRestoration, } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import 'react-tooltip/dist/react-tooltip.css'

const MainLayout = () => {

    return (
        <div className="dark:text-white exo-2-font">
            <ScrollRestoration />
            <div className="mxw sticky top-0 z-50">
                <Navbar></Navbar>
            </div>
            <div className="mxw">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;