import { getSession, useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Modal from "../../lib/components/Modal"
import StaffNav from "../../lib/components/StaffNav"

export default function StaffDashboard(){
    const { data: session } = useSession()

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('/api/mahasiswa')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
    }, [])

    if(isLoading) return <p>Loading...</p>
    if(!data) return <p>No profile data</p>

    // console.log(data.result)

    return <div>
        <div className="row">
            <StaffNav/>
        </div>
        <div style={{'padding': '20px'}}>
            <div style={{'padding': '20px'}} className="row">
                <Modal/>
            </div>

            <hr/>

            <div className="table-responsive">
                <table className="table">
                    <thead>
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
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            data.result.map((f) => {
                                return(
                                    <tr key={f._id}>
                                        <td>{f.namaSiswa}</td>
                                        <td>{f.nip}</td>
                                        <td>{f.kelas}</td>
                                        <td>{f.jurusan}</td>
                                        <td>{f.alamat.alamatLenggkap}</td>
                                        <td>{f.alamat.kodePos}</td>
                                        <td>{f.alamat.kota}</td>
                                        <td>{f.alamat.provinsi}</td>
                                        <td>{f.fileName}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

export async function getServerSideProps(context) {
    const session = await getSession(context)

    // if (!session){
    //     return {
    //         redirect: {
    //             permanent: false,
    //             destination: "/"
    //         }
    //     }
    // }

    return {
        props: {
            session,
        }
    }
}