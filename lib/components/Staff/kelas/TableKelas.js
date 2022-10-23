import { useEffect, useState } from "react";

export default function TableKelas() {
    const [ data, setData ] = useState(null) 
    const [ loading, setLoading ] = useState(false)

    const fetchDataKelas = async () => {
        const response = await fetch('/api/kelas')
        const data = await response.json()
        setData(data)
    }

    useEffect(() => {

        let isCancelled = false;

        if (!isCancelled){
            fetchDataKelas()
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
                        <th scope="col">Kelas</th>
                        <th scope="col">Jurusan</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            data.map((f, i) => {
                                return(
                                    <tr key={i}>
                                        <td>{f.kelas}</td>
                                        <td>{f.jurusan}</td>
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