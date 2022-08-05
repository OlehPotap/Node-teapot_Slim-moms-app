import { useLocation, Navigate, Outlet } from "react-router-dom";

import CheckAuth from "./checkAuth";

const PrivateRoute = ()=> {
    const isLogin = CheckAuth();

    const location = useLocation();

    if(!isLogin) {
        return <Navigate to="/login" state={{from: location}} />
    }
    return <Outlet />
};

export default PrivateRoute;