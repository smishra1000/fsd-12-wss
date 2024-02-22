import { Outlet } from "react-router-dom"
import HeaderBar from "./HeaderBar"

function Dashboard(){
    return(
        <div className="container-fluid">
                <HeaderBar/>
                <Outlet/>
        </div>
    )
}

export default Dashboard