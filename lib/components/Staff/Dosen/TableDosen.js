import { useEffect, useState } from "react";

export default function TableDosen() {
    const [ data, setData ] = useState(null) 
    const [ loading, setLoading ] = useState(false)

    const fetchDataDosen = async () => {
        const response = await fetch('/api/dosen')
        const data = await response.json()
        setData(data)
    }

    useEffect(() => {

        let isCancelled = false;

        if (!isCancelled){
            fetchDataDosen()
            setLoading(false)
        }

        return () => {
            isCancelled = true;
        }
    }, [])

    if(loading) return <p>Loading...</p>
    if(!data) return 'No data'


    return(
        <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">NIDN</th>
                        <th scope="col">Email</th>
                        <th scope="col">Class</th>
                        <th scope="col">Sks</th>
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
                                        <td>{f.namaDosen}</td>
                                        <td>{f.nidn}</td>
                                        <td>{f.email}</td>
                                        <td>{f.matakuliah}</td>
                                        <td>{f.sks}</td>
                                        <td>{f.alamat.alamatLenggkap}</td>
                                        <td>{f.alamat.kodePos}</td>
                                        <td>{f.alamat.kota}</td>
                                        <td>{f.alamat.provinsi}</td>
                                        <td>{f.fileName}</td>
                                        <td>
                                        <button type="button" className="btn btn-success">Delete</button>    
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
    )
}