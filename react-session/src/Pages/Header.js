
import {Link} from "react-router-dom"
function Header() {
    return (
        <nav className="navbar navbar-expand bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutus">Aboutus</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/contactus">Contactus</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/course">Course</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/counter">Counter</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/lifecycleexample">LifeCycleExample</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/users">Users</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/counterFunction">CounterFunction</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/allhooks">All Hooks</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header