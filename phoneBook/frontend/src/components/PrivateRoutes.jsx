import { Navigate, Outlet } from "react-router-dom"

function PrivateRoutes(){
    const loggedInUser = localStorage.getItem("loggedInUser") && JSON.parse(localStorage.getItem("loggedInUser"))
    return(
        loggedInUser ? <Outlet/> : <Navigate to="login"/>
    )

}

export default PrivateRoutes