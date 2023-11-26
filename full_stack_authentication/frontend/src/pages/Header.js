import { useState,useEffect } from "react";
import {Link,useNavigate} from "react-router-dom"
function Header(){
    const [isLogOut,setIsLogOut] = useState(false)
    const navigate = useNavigate();

    const logout = ()=>{
        setIsLogOut(true)
        localStorage.clear();
        
    }
    useEffect(()=>{
        if(isLogOut)
        navigate("login")
    },[isLogOut])
    
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">MyApp</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/blogs">Blog List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" ><button className="btn btn-danger" onClick={()=>logout()}>Logout</button></Link>
                    </li>



                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Header