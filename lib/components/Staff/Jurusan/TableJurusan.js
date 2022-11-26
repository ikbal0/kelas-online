import { useEffect, useState } from "react";

export default function TableJurusan() {
    const [ data, setData ] = useState(null) 
    const [ loading, setLoading ] = useState(false)

    const fetchDataJurusan = async () => {
        const response = await fetch('/api/jurusan')
        const data = await response.json()
        setData(data)
    }

    useEffect(() => {

        let isCancelled = false;

        if (!isCancelled){
            fetchDataJurusan()
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
                    <th scope="col">Jurusan</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {
                        data.map((f, i) => {
                            return(
                                <tr key={i}>
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