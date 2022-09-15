import { getSession } from "next-auth/react";
import { useState } from "react";

function PostPage(){
    const Nav = () => {
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

        const handleSubmit = async (event) => {
            // Stop the form from submitting and refreshing the page.
            event.preventDefault()
        
            // console.log(event.target)
        
            // Get data from the form.
            // const data = {
            //   uploaded_file: event.target.uploaded_file.value,
            //   n_speakers: event.target.n_speakers.value,
            // }
        
            // Send the data to the server in JSON format.
            // const JSONdata = JSON.stringify(data)
            const formData = new FormData();
        
            formData.append("n_speakers", event.target.n_speakers.value)
            formData.append("uploaded_file", event.target.uploaded_file.files[0])
        
            // console.log(event.target.uploaded_file.files[0])
        
            // API endpoint where we send form data.
            const endpoint = '/api/upload'
        
            // Form the request for sending data to the server.
            const options = {
            // The method is POST because we are sending data.
            // method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            // onUploadProgress: (event) => {
            //   console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
            // },
            // Body of the request is the JSON data we created above.
            // body: JSONdata,
            // body: formData,
            }
        
            // Send the form data to our forms API on Vercel and get a response.
            // const response = await fetch(endpoint, formData, options)
            // const response = await fetch(endpoint, options)
            // const response = await axios.post(endpoint, formData, options)
        
            // Get the response data from server as JSON.
            // If server returns the name submitted, that means the form works.
            // const result = await response.json()
            // console.log(response.data.data)
        
            alert(`${response.data.data}`)
        }
        
        const show = state.modal ? " show" : ""
        const display = state.modal ? "block" : "none"
          
        return (
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
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="first">File</label>
                        <input type="file" id="uploaded_file" name="uploaded_file" required />

                        <label htmlFor="last">Text</label>
                        <input type="text" id="n_speakers" name="n_speakers" required />

                        <button type="submit">Submit</button>
                    </form>
        
                    </div>
                  </div>
                </div>
              </div>
            </>
        )
    }
    return(
        <>
            <Nav/>
            <div className="container-fluid">
                <h3>Create Post</h3>
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