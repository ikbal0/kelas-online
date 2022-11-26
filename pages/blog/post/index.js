import axios from "axios";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import TableUp from "../../../lib/components/PostPage/TableUp";
import UpModal from "../../../lib/components/PostPage/UpModal";

function PostPage(){
    const [state, setState] = useState({
        tbl: null,
        isLoading: false,
    })

    useEffect(() => {

        let isCancelled = false;

        if (!isCancelled){
            fetchData()
            setState({
                ...state,
                isLoading: false
            })
        }

        return () => {
            isCancelled = true;
        }
    }, [])

    async function fetchData() {
        const response = await fetch('/api/upload')
        const data = await response.json()

        setState({
            ...state,
            tbl: data
        })
    }

    const Nav = () => {
        const [state, setState] = useState({
            modal: false,
            display: false,
            isOpen: false,
        })

        const [selectedFile, setSelectedFile] = useState()
        const [preview, setPreview] = useState()
        
        useEffect(() => {
            if(!selectedFile){
                setPreview(undefined)
                return
            }
    
            const objectUrl = URL.createObjectURL(selectedFile)
            setPreview(objectUrl)
    
            return () => URL.revokeObjectURL(objectUrl)
        }, [selectedFile])
    
        const onSelectFile = e => {
            if (!e.target.files || e.target.files.length === 0) {
                setSelectedFile(undefined)
                return
            }
    
            // I've kept this example simple by using the first image instead of multiple
            setSelectedFile(e.target.files[0])
        }

        const toggleModal = () => {
            setState({
            ...state,
            modal: !state.modal
            })
        }

        const handleSubmit = async (event) => {
            // Stop the form from submitting and refreshing the page.
            event.preventDefault()

            if(!event.target.uploaded_file.value || !event.target.uploaded_file.value){
                alert('fill required data')
            } else {
                const formData = new FormData();
                formData.append("n_speakers", event.target.n_speakers.value)
                formData.append("uploaded_file", event.target.uploaded_file.files[0])
                formData.append("file_name", event.target.uploaded_file.files[0].name)
            
                const endpoint = '/api/upload'
            
                // Form the request for sending data to the server.
                const options = {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
                const response = await axios.post(endpoint, formData, options)
            
                alert(`${response.data.data}`)
                fetchData()
                toggleModal()

            }
        }
        
        const show = state.modal ? " show" : ""
        const display = state.modal ? "block" : "none"
          
        return (
            <>
                <div style={{
                    "paddingTop": '10px'
                }} className="container-fluid">
                    <button onClick={toggleModal} style={{'width': 'auto'}} type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        input
                    </button>
                </div>
                
                <div className={`modal fade ${show}`} style={{'display': `${display}`}} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create Post</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={toggleModal} aria-label="Close"></button>
                            </div>
                            
                            <div className="modal-body">
                                <form className="row g-3" onSubmit={handleSubmit}>
                                    <div className="col-12">
                                        <label htmlFor="first" className="form-label">Thumbnail</label>
                                        <input onChange={onSelectFile} type="file" id="uploaded_file" name="uploaded_file" className="form-control" />
                                        {selectedFile && <img className="img-fluid pt-3" src={preview}/>}
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="last" className="form-label">Headline</label>
                                        <input type="text" id="n_speakers" className="form-control" name="n_speakers" />
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-success" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const helloChild = () => {
        console.log('hello child')
    }
    
    if(state.isLoading) return <p>Loading...</p>
    if(!state.tbl) return 'Reload'

    return(
        <>
            <Head>
                <title>Post</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav/>
            <div className="container-fluid">
                <h3>My Post</h3>
                <TableUp data={state.tbl} helloChild={helloChild} passDisplay={UpModal}/>
                {/* <UpModal/> */}
            </div>
        </>
    )
}

export default PostPage;

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if (!session){
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }

    return {
        props: {
            session,
        }
    }
}