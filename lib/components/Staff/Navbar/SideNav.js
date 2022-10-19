import Link from "next/link"

export default function SideNav() {
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
                            <li><Link href={'/staff/mahasiswa'}><a style={{'textDecoration': 'none'}} className="bd-links-link d-inline-block rounded active" aria-current="page"><h6>Mahasiswa</h6></a></Link></li>
                            <li><a style={{'textDecoration': 'none'}} className="bd-links-link d-inline-block rounded"><h6>Dosen</h6></a></li>
                            <li><a style={{'textDecoration': 'none'}} className="bd-links-link d-inline-block rounded"><h6>Kelas</h6></a></li>
                            <li><a style={{'textDecoration': 'none'}} className="bd-links-link d-inline-block rounded"><h6>Matakuliah</h6></a></li>
                            <li><a style={{'textDecoration': 'none'}} className="bd-links-link d-inline-block rounded"><h6>Jurusan</h6></a></li>
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