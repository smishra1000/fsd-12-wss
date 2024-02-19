function HeaderBar() {
    return (
        <nav className="navbar navbar-expand" style={{background:'#ffc107'}}>
            <div className="container-fluid">
                <a class="navbar-brand" href="#">Phone<span style={{color:"red"}}>BOOK</span></a>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Create Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default HeaderBar