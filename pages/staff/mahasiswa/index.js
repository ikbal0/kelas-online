import TableMhs from "../../../lib/components/Staff/Mhs/TableMhs";
import SideNav from "../../../lib/components/Staff/Navbar/SideNav";
import StaffNav from "../../../lib/components/StaffNav";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getSession } from "next-auth/react"
import Head from "next/head";

export default function MahasiswaPage(){

    const [isLoading, setLoading] = useState(false)
    const [state, setState] = useState({
        modal: false,
        display: false,
        isOpen: false,
        kelas: null,
    })

    const toggleModal = () => {
        setState({
          ...state,
          modal: !state.modal
        })
    }

    async function fetchKls(){
        const response = await fetch('/api/kelas')
        const data = await response.json()

        setState({
            ...state,
            kelas: data
        })
    }

    useEffect(() => {

        let isCancelled = false;

        if (!isCancelled){
            fetchKls()
            setLoading(false)
        }

        return () => {
            isCancelled = true;
        }
    }, [])

    const show = state.modal ? " show" : ""
    const display = state.modal ? "block" : "none"

    if(isLoading) return <p>Loading...</p>
    if(!state.kelas) return 'Reload'

    const Modal = () => {
        return(
            <>
            <button onClick={toggleModal} style={{'width': 'auto'}} type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                input
            </button>
                
            <div className={`modal fade ${show}`} style={{'display': `${display}`}} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={toggleModal} aria-label="Close"></button>
                    </div>
                    
                    <div className="modal-body">
                    <form action="/api/mahasiswa" method="POST" encType="multipart/form-data" className="row g-3">
                        <div className="col-md-4">
                        <label htmlFor="inputEmail4" className="form-label">Name</label>
                        <input type="text" name="namaSiswa" className="form-control"/>
                        </div>

                        <div className="col-md-4">
                        <label htmlFor="inputPassword4" className="form-label">NIP</label>
                        <input type="text" name="nip" className="form-control" />
                        </div>
                            
                        <div className="col-md-4">
                        <label htmlFor="inputEmail4" className="form-label">Kelas</label>
                        <select id="inputState" defaultValue="1" name="kelas" className="form-select">
                            <option value="1" disabled>Choose...</option>
                            {
                                state.kelas.map((f) => {
                                    return <option key={f._id} value={f._id}>{f.kelas}</option>
                                })
                            }
                        </select>
                        </div>
                    
                        <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" name="email" className="form-control"/>
                        </div>
                    
                        <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" />
                        </div>
                    
                        <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input type="text" name="alamatLenggkap" className="form-control" id="inputAddress" placeholder="Jl. Abc, Kec. Example"/>
                        </div>
                            
                        <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">Kab/Kota</label>
                        <input type="text" name="kota" className="form-control" id="inputCity"/>
                        </div>
                    
                        <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">Prov</label>
                        <input type="text" name="provinsi" className="form-control" id="inputProv"/>
                        </div>
                            
                        <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Zip</label>
                        <input type="text" name="kodePos" className="form-control" id="inputZip"/>
                        </div>
                            
                        <div className="col-12">
                        <div className="input-group mb-3">
                            <input type="file" name="fileName" className="form-control" id="inputGroupFile02"/>
                            <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                        </div>
                        </div>
                        
                        <div className="col-12">
                        <div className="modal-footer">
                            <button onClick={toggleModal} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </form>

                    </div>
                </div>
                </div>
            </div>
            </>
        )
    }

    return <div>
        <Head>
            <title>Mahasiswa</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="row position-sticky sticky-lg-top">
            <StaffNav/>
        </div>

        <div style={{'padding': '20px'}}>
            <div style={{'padding': '20px'}} className="row">
                <Modal/>
            </div>

            <hr/>

            <div className="row">
                <SideNav mhsActive={true}/>
                
                <div className="col-lg-10 col-md-10 col-sm-12">
                    <TableMhs/>
                </div>
            </div>
        </div>
    </div>
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if(!session){
        return {
            redirect: {
                permanent: false,
                destination: "/auth/signin"
            }
        }
    } else {
        console.log(session.id)
    }

    return {
        props: {
            session,
        }
    }
}