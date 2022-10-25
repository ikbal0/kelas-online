import Link from "next/link"
import { useEffect, useState } from "react"

export default function SideNav(props) {
    const [state, setState] = useState({
        dosen: '',
        mahasiswa: '',
        kelas: '',
        jurusan: '',
        matakuliah: ''
    })
    useEffect(() => {
        if(props.dosenActive){
            setState({
                ...state,
                dosen: '#7f2b9e'
            })
        }
        
        if(props.mhsActive){
            setState({
                ...state,
                mahasiswa: '#7f2b9e'
            })
        }

        if(props.kelasActive){
            setState({
                ...state,
                kelas: '#7f2b9e'
            })
        }

        if(props.jurusanActive){
            setState({
                ...state,
                jurusan: '#7f2b9e'
            })
        }

        if(props.MatakuliahActive){
            setState({
                ...state,
                matakuliah: '#7f2b9e'
            })
        }
    },[])

    return(
        <div className="col-lg-2 col-md-2">
            <div className="position-lg-sticky sticky-lg-top pt-0 fixed-height-overflow" style={{'top': '56px'}}>
                <ul className="bd-links-nav list-unstyled mb-0 pb-3 pb-md-2 pe-lg-2 ps-2">
                    <li className="bd-links-group py-2">
                        <ul className="list-unstyled fw-normal pb-2 small">
                            <li><Link href={'/staff/'}><a style={{'textDecoration': 'none'}} className="bd-links-link d-inline-block rounded active" aria-current="page"><strong><h5>Dashboard</h5></strong></a></Link></li>
                        </ul>
                    </li>
                    <li className="bd-links-group py-2">
                        <strong className="bd-links-heading d-flex w-100 align-items-center fw-semibold">
                            <h5>Data</h5>
                        </strong>

                        <ul className="list-unstyled fw-normal pb-2 small">
                            <li><Link href={'/staff/mahasiswa'}><a style={{'textDecoration': 'none', 'color': state.mahasiswa}} className="bd-links-link d-inline-block rounded active" aria-current="page"><h6>Mahasiswa</h6></a></Link></li>
                            <li><Link href={'/staff/dosen'}><a style={{'textDecoration': 'none', 'color': state.dosen}} className="bd-links-link d-inline-block rounded"><h6>Dosen</h6></a></Link></li>
                            <li><Link href={'/staff/kelas'}><a style={{'textDecoration': 'none', 'color': state.kelas}} className="bd-links-link d-inline-block rounded"><h6>Kelas</h6></a></Link></li>
                            <li><Link href={'/staff/matakuliah'}><a style={{'textDecoration': 'none', 'color': state.matakuliah}} className="bd-links-link d-inline-block rounded"><h6>Matakuliah</h6></a></Link></li>
                            <li><Link href={'/staff/jurusan'}><a style={{'textDecoration': 'none', 'color': state.jurusan}} className="bd-links-link d-inline-block rounded"><h6>Jurusan</h6></a></Link></li>
                        </ul>
                    </li>

                    <li className="bd-links-group py-2">
                        <strong className="bd-links-heading d-flex w-100 align-items-center fw-semibold">
                            <h5>Kelas</h5>
                        </strong>

                        <ul className="list-unstyled fw-normal pb-2 small">
                            <li><Link href={'/staff/mahasiswa'}><a style={{'textDecoration': 'none'}} className="bd-links-link d-inline-block rounded active" aria-current="page"><h6>Set Matakuliah</h6></a></Link></li>
                        </ul>
                    </li>

                    <li className="bd-links-group py-2">
                        <strong className="bd-links-heading d-flex w-100 align-items-center fw-semibold">
                            <h5>Blog</h5>
                        </strong>

                        <ul className="list-unstyled fw-normal pb-2 small">
                            <li><Link href={'/blog'}><a style={{'textDecoration': 'none'}} className="bd-links-link d-inline-block rounded active" aria-current="page"><h6>Post</h6></a></Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}