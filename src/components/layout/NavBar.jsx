import { NavLink, Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar narbar-expand-lg bg-body-tertiary px-5 shadow mt-5 sticky-top">
            <div className="container-fluid">
                <Link to={'/'}>
                    <span className="hotel-color">LakeSide Hotel</span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll"
                    aria-expanded="false"
                    aria-label="toggle navigation"
                >
                    <span className="navbar-toggle-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSrcoll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={'/browse-all-rooms'}>
                                Browse all rooms
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={'/admin'}>
                                Admin
                            </NavLink>
                        </li>
                    </ul>

                    <ul className="d-flex navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/find-booking'}>
                                Find my booking
                            </NavLink>
                        </li>

                        <li className='nav-item dropdown'>
                            <a></a>
                            <ul>
                                <li>
                                    <Link to={"/login"} className='dropdown-item'>
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/profile"} className='dropdown-item'>
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/logout"} className='dropdown-item'>
                                        Logout
                                    </Link>
                                </li>
                            </ul>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;