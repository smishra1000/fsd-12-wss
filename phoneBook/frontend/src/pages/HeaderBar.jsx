import {Link,useNavigate} from "react-router-dom"
function HeaderBar() {
const navigate = useNavigate();
    const logout = ()=>{
        localStorage.clear();
        navigate("login")
        
    }
    return (
        <nav className="navbar navbar-expand" style={{background:'#ffc107'}}>
            <div className="container-fluid">
                <Link class="navbar-brand" to="/">Phone<span style={{color:"red"}}>BOOK</span></Link>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="create-contact">Create Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="list">MyContacts</Link>
                        </li>
                    </ul>
                    <button className="btn btn-primary" onClick={()=>logout()}>Logout</button>
                </div>
            </div>
        </nav>
    )
}

export default HeaderBar