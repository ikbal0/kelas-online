import { useState, useEffect } from "react";
import axios from "axios";

export default function UpModal(props) {
    const [state, setState] = useState({
        modal1: false,
    })

    const handleUpload = (event) => {
        event.preventDefault()
        console.log('handleUpload')
    }

    const handleDelete = async (event) => {
        // event.preventDefault()
        // Get data from the form.
        const data = {
            id: event.id,
        }
    
        if (confirm(`are you sure to delete data ${event.n_speakers}!`) != "0") {
            const response = await fetch('/api/upload/test', {
                method: 'DELETE',
                body: JSON.stringify(data)
            })
            const result = await response.json()
            // const deletedCount = result.deletedCount
            // alert(`${deletedCount} data has deleted!`)
            alert(`${result.msg}`)
            // fetchMhs()
            // toggleModal()
        } else {
            alert("Ok! delete has canceled!!")
        }
        // fetchComments()
        // console.log(data)
    }

    const toggleModal = () => {
        setState({
        ...state,
        modal1: !state.modal1
        })
    }


    const show = state.modal1 ? " show" : ""
    const display = state.modal1 ? "block" : "none"

    return(
        <>
        <div style={{
            "paddingTop": '10px'
        }} className="container-fluid">
            {/* <button style={{'width': 'auto'}} type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Detail
            </button> */}
            <button onClick={toggleModal} style={{'width': 'auto'}} type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Detail
            </button>
        </div>
        
        <div className={`modal fade ${show}`} style={{'display': `${display}`}} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        {/* <div className={`modal fade `} style={{'display': `none`}} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> */}
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Create Post</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={toggleModal} aria-label="Close"></button>
                    {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                    </div>
                    
                    <div className="modal-body">
                        <form className="row g-3" onSubmit={handleUpload}>
                            <div className="col-12">
                                <img className="img-fluid pt-3" src={`/uploads/${props.filename}`}/>
                            </div>
                            <div className="col-12">
                                <label htmlFor="last" className="form-label">Headline</label>
                                <input type="text" id="n_speakers" className="form-control" name="n_speakers" defaultValue={props.n_speakers} />
                            </div>
                            <div className="col-12">
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button className="btn btn-success me-md-2" type="submit">Submit</button>
                                    <button className="btn btn-danger" type="button" onClick={() => handleDelete({id: props.id, n_speakers: props.n_speakers})}>Delete</button>
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