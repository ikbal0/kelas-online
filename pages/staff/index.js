import { getSession, useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { List } from "react-bootstrap-icons"
import AppNavbar from "../../lib/components/AppNavbar"
import StaffNav from "../../lib/components/StaffNav"
import StaffNavTest from "../../lib/components/StaffNav/StaffNavTest"

export default function StaffDashboard(){
    const { data: session } = useSession()

    return <div>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-2">
                <StaffNavTest/>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-10">
                <div className="row px-3 py-3 d-none d-lg-block text-light" style={{'height': '90px', 'backgroundColor': '#06124a', 'marginLeft': '-13px'}}>
                    <h3></h3>
                </div>

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