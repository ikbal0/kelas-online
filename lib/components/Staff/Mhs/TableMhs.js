import useSWR from "swr"

const fetcher = async () => {
    const response = await fetch('/api/mahasiswa')
    const data = await response.json()
    return data
}

export default function TableMhs() {
    const {data, error} = useSWR('dashboard', fetcher)
    if(error) return 'An Error has occurred'
    if(!data) return 'No data'

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
    
    return(
        <>
            <div className="table-responsive">
                <table className="table">
                    <thead style={{'backgroundColor': '#151642', 'color': '#fff', 'position': 'sticky', 'top': '0'}}>
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
                            data.map((f, i) => {
                                return(
                                    <tr key={i}>
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
        </>
    )
}