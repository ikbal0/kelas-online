import Link from "next/link"
import { useState } from "react"

export default function StaffNav(){
    const [state, setState] = useState({
        menu: false,
        isOpen: false,
      })
    
    const toggleMenu = () => {
        setState({
            ...state,
            menu: !state.menu
        })
    }

    const show = state.menu ? " show" : ""

    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" style={{'marginLeft': '10px'}}>Staff Dashboard</a>
                <button onClick={toggleMenu} className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`offcanvas offcanvas-end text-bg-dark ${show}`} tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                        <button onClick={toggleMenu} type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link href={'/'} passHref>
                                    <a className="nav-link" aria-current="page">Home</a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href={'/staff'} passHref>
                                    <a className="nav-link" aria-current="page">Dashboard</a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href={'/staff/mahasiswa'}>
                                <a className="nav-link">Mahasiswa</a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link">Dosen</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link">Kelas</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link">Matakuliah</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><a className="dropdown-item">Action</a></li>
                                    <li><a className="dropdown-item">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}