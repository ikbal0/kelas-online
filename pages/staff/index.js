import { getSession, useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Asterisk, Bootstrap, FiletypeJava, FiletypeJs, List, Microsoft } from "react-bootstrap-icons"
import AppNavbar from "../../lib/components/AppNavbar"
import StaffNav from "../../lib/components/StaffNav"
import StaffNavTest from "../../lib/components/StaffNav/StaffNavTest"

export default function StaffDashboard(){
    const { data: session } = useSession()

    return <div>
        <div className="position-sticky sticky-lg-top pt-0 fixed-height-overflow mb-3">
            <StaffNav/>
        </div>

        <div className="container-fluid">    
            <div className="col-12 col-lg-12 px-0">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-12">
                        <h3 className="text-muted">
                            FAQ
                        </h3>
                    </div>

                    <div className="col-12 col-lg-12">
                        <ul className="navbar-nav-scroll navbar-nav me-auto mb-2 mb-lg-2 d-flex flex-row text-nowrap">
                            <li className="nav-item pe-3">
                                <a className="nav-link">Perusahaan</a>
                            </li>
                            <li className="nav-item pe-3 ">
                                <a className="nav-link">Kebijakan Privasi</a>
                            </li>
                            <li className="nav-item pe-3 ">
                                <a className="nav-link">Syarat dan Ketentuan Produk</a>
                            </li>
                            <li className="nav-item pe-3 ">
                                <a className="nav-link">Persyaratan Jasa</a>
                            </li>
                            <li className="nav-item pe-3 ">
                                <a className="nav-link">Penafian</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-12" style={{'backgroundColor': '#f8f9f9', 'paddingTop': '0px'}}>
                    <div className={"position-lg-sticky sticky-lg-top pt-0 fixed-height-overflow"} style={{'top': '76px'}}>
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
                    </div>
                </div>
                
                <div className="col-lg-7 col-md-7 col-sm-12">
                    <div className="row px-3 ps-3 p-2">
                        <div className="card">
                            <div className="row py-3">
                                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                                    <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Mahasiswa</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                                    <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                                    <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                                    <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                                    <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                                    <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                                    <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                                    <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                                    <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                                    <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                                    <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                                    <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                                    <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                                    <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                                    <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                                    <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="col-lg-3 col-md-3 col-sm-0 px-3 ps-3 p-2">
                        <div className=" position-lg-sticky sticky-lg-top fixed-height-overflow" style={{'top': '76px'}}>
                        <div className="card">
                            <div className="card-body">
                            <h4>Detail</h4>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
}

export async function getServerSideProps(context) {
    const session = await getSession(context)

    // if (!session){
    //     return {
    //         redirect: {
    //             permanent: false,
    //             destination: "/"
    //         }
    //     }
    // }

    return {
        props: {
            session,
        }
    }
}