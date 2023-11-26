import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes(){
    const authData = localStorage.getItem("authData") && JSON.parse(localStorage.getItem("authData"))
    return(
        authData ? <Outlet/> : <Navigate to="/login"/>
    )
}
export default PrivateRoutes