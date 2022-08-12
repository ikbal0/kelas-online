import { useState } from "react"

export default function Modal() {  
    const [state, setState] = useState({
    modal: false,
    display: false,
    isOpen: false,
  })

  const toggleModal = () => {
    setState({
      ...state,
      modal: !state.modal
    })
  }

  const show = state.modal ? " show" : ""
  const display = state.modal ? "block" : "none"
    return (
        <>
        <button onClick={toggleModal} style={{'width': 'auto'}} type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
          input
        </button>
        
        <div className={`modal fade ${show}`} style={{'display': `${display}`}} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={toggleModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                
                <form className="row g-3">
                    <div className="col-md-4">
                        <label for="inputEmail4" className="form-label">Name</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="col-md-4">
                        <label for="inputPassword4" className="form-label">NIM</label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-md-4">
                        <label for="inputEmail4" className="form-label">Kelas</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Jl. Abc, Kec. Example"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">Kab/Kota</label>
                        <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="col-md-4">
                        <label for="inputState" className="form-label">Prov</label>
                        <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label for="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="inputZip"/>
                    </div>
                    <div className="col-12">
                        <div className="input-group mb-3">
                            <input type="file" className="form-control" id="inputGroupFile02"/>
                            <label className="input-group-text" for="inputGroupFile02">Upload</label>
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