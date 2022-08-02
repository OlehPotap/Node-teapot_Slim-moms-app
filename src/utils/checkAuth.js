import { useSelector, shallowEqual } from "react-redux/es/exports";

import { getIslogin } from "../redux/auth/auth-selectors";


const CheckAuth = ()=> {
    // const isLogin = useSelector();
    const isLogin = useSelector(getIslogin, shallowEqual)

    return isLogin;
}

export default CheckAuth;