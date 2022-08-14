import MahasiswaPage from "../../../../pages/staff/mahasiswa"

export default function DeleteBtn(props) {

  async function fetchMhs(){
    const response = await fetch('/api/mahasiswa')
    const data = await response.json()
    setData(data)
    console.log('fetch')
}

  async function handleDelete (event) {
    // Stop the form from submitting and refreshing the page.
    // event.preventDefault()

    // Get data from the form.
    const data = {
      id: event,
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

    if (confirm("Press a button!") == true) {
      // const response = await fetch(endpoint, options)
      fetchMhs()
    } else {
      alert("Hello! I am an alert box!!")
    }
    // console.log(data)
  }

  return (
      <>
        <button type="button" onClick={() => handleDelete(props.id)} className="btn btn-success">Delete</button>
      </>
    )
}