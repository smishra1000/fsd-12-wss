import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes(){
    const isLoggedIn=true
    return(
        isLoggedIn ? <Outlet/> : <Navigate to="/login"/>
    )
}
export default PrivateRoutes