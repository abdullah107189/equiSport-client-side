import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import LoadingPage from "../components/LoadingPage/LoadingPage";

const PrivetRoute = ({ children }) => {
    let location = useLocation();
    const { user, loading } = useContext(AuthContext)
    
    if (loading === true) {
        return <LoadingPage></LoadingPage>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'} state={location} replace></Navigate>
};

export default PrivetRoute;