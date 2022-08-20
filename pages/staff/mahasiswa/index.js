import Modal from "../../../lib/components/Modal/ModalStaffFromMhs";
import StaffNav from "../../../lib/components/StaffNav";
import { useEffect, useState } from "react";
import DeleteBtn from "../../../lib/components/Staff/Mhs/DeleteBtn";
import useSWR from "swr"
import { getSession, useSession, signIn, signOut } from "next-auth/react"

const fetcher = async () => {
    const response = await fetch('/api/mahasiswa')
    const data = await response.json()
    return data
}

export default function MahasiswaPage(){
    const {data, error} = useSWR('dashboard', fetcher)

    const [mahasiswa, setMhs] = useState(null)
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

    async function fetchMhs(){
        const response = await fetch('/api/mahasiswa')
        const data = await response.json()

        setMhs(data)
    }

    async function fetchKls(){
        const response = await fetch('/api/kelas')
        const data = await response.json()

        setState({
            ...state,
            kelas: data
        })
    }

    async function handleDelete (id, nama) {
        // Stop the form from submitting and refreshing the page.
        // event.preventDefault()
    
        // Get data from the form.
        const data = {
          id: id,
        }
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
    
        // API endpoint where we send form data.
        const endpoint = '/api/mahasiswa'
    
        // Form the request for sending data to the server.
        const options = {
          // The method is DELETE because we are deleting data.
          method: 'DELETE',
          // Tell the server we're sending JSON.
          headers: {
            'Content-Type': 'application/json',
          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        }
    
        if (confirm(`are you sure to delete data ${nama}!`) == true) {
          const response = await fetch(endpoint, options)
          const result = await response.json()
          const deletedUser = result.deletedUser
          const deletedMhs = result.deletedMhs
          alert(`${deletedUser} User and ${deletedMhs} Mahasiswa has deleted!`)
          fetchMhs()
        } else {
          alert("Ok! delete has canceled!!")
        }
        // console.log(data)
    }

    useEffect(() => {

        let isCancelled = false;

        if (!isCancelled){
            fetchMhs()
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
    if(!mahasiswa || !state.kelas) return <p>No profile data</p>

    if(error) return 'An Error has occurred'
    if(!data) return 'No data'

    // console.log(data.result)

    return <div>
        <div className="row">
            <StaffNav/>
        </div>
        <div style={{'padding': '20px'}}>
            <div style={{'padding': '20px'}} className="row">
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
            </div>

            <hr/>

            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">NIP</th>
                        <th scope="col">Class</th>
                        <th scope="col">Major</th>
                        <th scope="col">Kec</th>
                        <th scope="col">Pos</th>
                        <th scope="col">City</th>
                        <th scope="col">Prov</th>
                        <th scope="col">fileName</th>
                        <th scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            data.result.map((f) => {
                                return(
                                    <tr key={f._id}>
                                        <td>{f.namaSiswa}</td>
                                        <td>{f.nip}</td>
                                        <td>{f.kelas}</td>
                                        <td>{f.jurusan}</td>
                                        <td>{f.alamat.alamatLenggkap}</td>
                                        <td>{f.alamat.kodePos}</td>
                                        <td>{f.alamat.kota}</td>
                                        <td>{f.alamat.provinsi}</td>
                                        <td>{f.fileName}</td>
                                        <td>
                                        <button type="button" onClick={() => handleDelete(f._id, f.namaSiswa)} className="btn btn-success">Delete</button>    
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if(!session){
        return {
            redirect: {
                permanent: false,
                destination: "/auth/signin"
            }
        }
    }

    return {
        props: {
            session,
        }
    }
}