import { Navigate, Outlet } from "react-router-dom";


import CheckAuth from "./checkAuth";

const PublicRoute = ()=> {
    const isLogin = CheckAuth();

    if(isLogin) {
        return <Navigate to="/diary" />
    }
    return <Outlet />
};

export default PublicRoute;