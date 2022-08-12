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
        <button onClick={toggleModal} style={{'width': 'auto'}} type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
          input
        </button>
        
        <div class={`modal fade ${show}`} style={{'display': `${display}`}} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={toggleModal} aria-label="Close"></button>
              </div>
              <div class="modal-body">
                
                <form class="row g-3">
                    <div class="col-md-4">
                        <label for="inputEmail4" class="form-label">Name</label>
                        <input type="email" class="form-control" id="inputEmail4"/>
                    </div>
                    <div class="col-md-4">
                        <label for="inputPassword4" class="form-label">NIM</label>
                        <input type="password" class="form-control" id="inputPassword4"/>
                    </div>
                    <div class="col-md-4">
                        <label for="inputEmail4" class="form-label">Kelas</label>
                        <input type="email" class="form-control" id="inputEmail4"/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4"/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword4"/>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Jl. Abc, Kec. Example"/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">Kab/Kota</label>
                        <input type="text" class="form-control" id="inputCity"/>
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">Prov</label>
                        <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="inputZip" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="inputZip"/>
                    </div>
                    <div class="col-12">
                        <div class="input-group mb-3">
                            <input type="file" class="form-control" id="inputGroupFile02"/>
                            <label class="input-group-text" for="inputGroupFile02">Upload</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="modal-footer">
                            <button onClick={toggleModal} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save changes</button>
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