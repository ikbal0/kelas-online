import { useEffect, useState } from "react";

export default function TableSemester() {
    const [ data, setData ] = useState(null) 
    const [ loading, setLoading ] = useState(false)

    const fetchDataSemester = async () => {
        const response = await fetch('/api/semester')
        const data = await response.json()
        setData(data)
    }

    useEffect(() => {

        let isCancelled = false;

        if (!isCancelled){
            fetchDataSemester()
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
                        <th scope="col">kelas</th>
                        <th scope="col">semester</th>
                        <th scope="col">jurusan</th>
                        <th scope="col">matakuliah</th>
                        <th scope="col">sks</th>
                        <th scope="col">nidn</th>
                        <th scope="col">Nama Dosen</th>
                        <th scope="col">email</th>
                        <th scope="col">alamat</th>
                        <th scope="col">kabupaten/kota</th>
                        <th scope="col">provinsi</th>
                        <th scope="col">kodePos</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            data.map((f, i) => {
                                return(
                                    <tr key={i}>
                                        <td>{f.kelas}</td>
                                        <td>{f.semester}</td>
                                        <td>{f.jurusan}</td>
                                        <td>{f.matakuliah}</td>
                                        <td>{f.sks}</td>
                                        <td>{f.nidn}</td>
                                        <td>{f.namaDosen}</td>
                                        <td>{f.email}</td>
                                        <td>{f.alamat.alamatLenggkap}</td>
                                        <td>{f.alamat.kota}</td>
                                        <td>{f.alamat.provinsi}</td>
                                        <td>{f.alamat.kodePos}</td>
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