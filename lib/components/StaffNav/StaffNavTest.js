import { List } from "react-bootstrap-icons"
import { useState } from "react"
import Link from "next/link"

export default function StaffNavTest(){    
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

    const show = state.menu ? "show" : ""

    return(
        <>
            <div className="row">
                <div className="d-grid gap-2 d-md-flex d-sm-flex justify-content-md-start justify-content-sm-start">
                <button style={{width: '50px'}} onClick={toggleMenu} className="btn d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
                    <h2><List/></h2>
                </button>
                </div>
                <div className="d-none d-lg-block pt-3 ps-3 text-center text-light" style={{'height': '90px', 'backgroundColor': '#06124a'}}>
                    <h4>Staff Dashboard</h4>
                </div>

            </div>

            <div className={`offcanvas-lg offcanvas-start ${show}`} tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">Responsive offcanvas</h5>
                    <button type="button" onClick={toggleMenu} className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body">
                    <nav className="bd-links w-100" id="bd-docs-nav" aria-label="Docs navigation">
                        <ul className="bd-links-nav list-unstyled mb-0 pb-3 pb-md-2 pe-lg-2 ps-2">
                            <li className="bd-links-group py-2">
                                <strong className="bd-links-heading d-flex w-100 align-items-center fw-semibold">
                                    <h5>Data</h5>
                                </strong>

                                <ul className="list-unstyled fw-normal pb-2 small">
                                    <li><Link href={'/staff/mahasiswa'}><a style={{'textDecoration': 'none'}} className="bd-links-link d-inline-block rounded active" aria-current="page"><h6>Mahasiswa</h6></a></Link></li>
                                    <li><a style={{'textDecoration': 'none'}} className="bd-links-link d-inline-block rounded"><h6>Dosen</h6></a></li>
                                    <li><a style={{'textDecoration': 'none'}} className="bd-links-link d-inline-block rounded"><h6>Kelas</h6></a></li>
                                    <li><a style={{'textDecoration': 'none'}} className="bd-links-link d-inline-block rounded"><h6>Matakuliah</h6></a></li>
                                    <li><a style={{'textDecoration': 'none'}} className="bd-links-link d-inline-block rounded"><h6>Jurusan</h6></a></li>
                                </ul>
                            </li>

                            <li className="bd-links-group py-2">
                                <strong className="bd-links-heading d-flex w-100 align-items-center fw-semibold">
                                    <h5>Kelas</h5>
                                </strong>

                                <ul className="list-unstyled fw-normal pb-2 small">
                                    <li><Link href={'/staff/mahasiswa'}><a style={{'textDecoration': 'none'}} className="bd-links-link d-inline-block rounded active" aria-current="page"><h6>Set Matakuliah</h6></a></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}