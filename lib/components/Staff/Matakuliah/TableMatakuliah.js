import { useEffect, useState } from "react";

export default function TableMatakuliah() {
    const [ data, setData ] = useState(null) 
    const [ loading, setLoading ] = useState(false)

    const fetchDataMatakuliah = async () => {
        const response = await fetch('/api/matakuliah')
        const data = await response.json()
        setData(data)
    }

    useEffect(() => {

        let isCancelled = false;

        if (!isCancelled){
            fetchDataMatakuliah()
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
                        <th scope="col">Matakuliah</th>
                        <th scope="col">SKS</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            data.map((f, i) => {
                                return(
                                    <tr key={i}>
                                        <td>{f.matakuliah}</td>
                                        <td>{f.sks}</td>
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