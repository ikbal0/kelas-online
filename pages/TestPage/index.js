import { useEffect, useState } from "react"

export default function Test({mahasiswa}){
    // async function handleSubmit (event) {
    //     // Stop the form from submitting and refreshing the page.
    //     event.preventDefault()
        
    //     // Get data from the form.
    //     const data = {
    //         fileName: event.target.fileName.value,
    //     }
        
    //     // Send the data to the server in JSON format.
    //     const JSONdata = JSON.stringify(data)
        
    //     // API endpoint where we send form data.
    //     const endpoint = '/api/testAPI'
        
    //     // Form the request for sending data to the server.
    //     const options = {
    //         // The method is POST because we are sending data.
    //         method: 'POST',
    //         // Tell the server we're sending JSON.
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         // Body of the request is the JSON data we created above.
    //         body: JSONdata,
    //     }

    //     if(!data.fileName){
    //         alert("not valid")
    //     } else {
    //         const response = await fetch(endpoint, options)
    //         const result = await response.json()
    //         console.log(result)
    //         alert('done')
    //     }

    //     // console.log(options)
        
    //     // Send the form data to our forms API on Vercel and get a response.
    //     // const response = await fetch(endpoint, options)
        
    //     // Get the response data from server as JSON.
    //     // If server returns the name submitted, that means the form works.
    //     // const result = await response.json()
    //     // alert(`Is this your full name: ${result.data}`)
        
    // }

    // console.log(mahasiswa)

    const [state, setState] = useState({
        scroll: false,
        navbar: false
    })

    function btnOpen() {
        setState({
            ...state,
            navbar: !state.navbar
        })
    }

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", onScroll);
    }

    function onScroll() {
        if(window.scrollY > 56){
            setState({
                ...state,
                scroll: !state.scroll,
                navbar: !state.navbar
            })
        }
    }

    // useEffect(() => {
    //     let l = false
    //     if(!l){
    //         window.addEventListener('scroll', shadow)
    //     }
    //     return () => {
    //         l = true
    //     }
    // })
    
    // useEffect(function mount() {
    //     function onScroll() {
    //         if(window.scrollY > 56){
    //             setState({
    //                 ...state,
    //                 scroll: !state.scroll
    //             })
    //         }
    //     }

    //     function shadow() {
    //         if(window.scrollY > 56){
    //             setState({
    //                 ...state,
    //                 scroll: !state.scroll
    //             })
    //         }
    //     }
    
    //     window.addEventListener("scroll", onScroll);
    
    //     return function unMount() {
    //       window.removeEventListener("scroll", onScroll);
    //     };
    // });

    // window.addEventListener('scroll', shadow)

    const navbarState = state.navbar ? "show" : ""

    return (
        <>
            <div>
                <div className={state.scroll ? "sticky-lg-top sticky-md-top shadow" : "sticky-lg-top sticky-md-top"} style={{'backgroundColor': 'white'}}>
                    <nav className="navbar navbar-expand-lg bg-light mb-3">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">MyLab <strong>Information Center</strong></a>
                            <button onClick={() => btnOpen()} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={`collapse navbar-collapse ${navbarState}`} id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Price</a>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <button className="btn btn-outline-success" type="submit">Join</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="container-fluid">    
                    <div className="col-12 col-lg-12 px-0">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-12">
                                <h3 className="text-muted">
                                    FAQ
                                </h3>
                            </div>

                            <div className="col-12 col-lg-12">
                                <ul className="navbar-nav-scroll navbar-nav me-auto mb-2 mb-lg-2 d-flex flex-row text-nowrap">
                                    <li className="nav-item pe-3">
                                        <a className="nav-link">Perusahaan</a>
                                    </li>
                                    <li className="nav-item pe-3 ">
                                        <a className="nav-link">Kebijakan Privasi</a>
                                    </li>
                                    <li className="nav-item pe-3 ">
                                        <a className="nav-link">Syarat dan Ketentuan Produk</a>
                                    </li>
                                    <li className="nav-item pe-3 ">
                                        <a className="nav-link">Persyaratan Jasa</a>
                                    </li>
                                    <li className="nav-item pe-3 ">
                                        <a className="nav-link">Penafian</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12" style={{'backgroundColor': '#f8f9f9', 'paddingTop': '0px'}}>
                            <div className={state.navbar ? "position-sticky fixed-top fixed-height-overflow pt-5" : "position-sticky fixed-top pt-0 fixed-height-overflow"}>
                            <p>
                                <strong>cmlabs</strong> adalah brand spesialis di bidang Search Engine Optimization (SEO) dan tools untuk mendukung
                                kegiatan SEO dibawah <strong>PT cmlabs Indonesia Digital</strong>. Terletak di dua kota besar di Indonesia, Jakarta
                                dan Malang, perusahaan ini digagas untuk membantu perusahaan meningkatkan visibilitas brand mereka di Internet.
                                <strong>cmlabs</strong> adalah istilah baru untuk produk dan layanan SEO yang disebut Software as a Service (SaaS).
                                Kami melayani pengguna dengan Konsultan SEO, Penulisan Konten, Pemasaran Konten, dan juga kami memiliki produk
                                berupa Keyword Ranking Tracker. Selain layanan dan produk, <strong>cmlabs</strong> juga menyediakan SEO Tools
                                gratis. Pengguna yang sedang melakukan SEO dan pemasaran dapat memanfaatkan tools ini tanpa biaya selama 24 jam.
                                <strong>cmlabs</strong> akan berkembang ke pasar yang lebih besar untuk menghadirkan produk SEO dan melayani
                                aktivitas SEO dalam skala global. <strong>Do better SEO with cmlabs</strong>.
                            </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <p className="main__paragraph">
                                <strong>cmlabs</strong> adalah brand spesialis di bidang Search Engine Optimization (SEO) dan tools untuk mendukung
                                kegiatan SEO dibawah <strong>PT cmlabs Indonesia Digital</strong>. Terletak di dua kota besar di Indonesia, Jakarta
                                dan Malang, perusahaan ini digagas untuk membantu perusahaan meningkatkan visibilitas brand mereka di Internet.
                                <strong>cmlabs</strong> adalah istilah baru untuk produk dan layanan SEO yang disebut Software as a Service (SaaS).
                                Kami melayani pengguna dengan Konsultan SEO, Penulisan Konten, Pemasaran Konten, dan juga kami memiliki produk
                                berupa Keyword Ranking Tracker. Selain layanan dan produk, <strong>cmlabs</strong> juga menyediakan SEO Tools
                                gratis. Pengguna yang sedang melakukan SEO dan pemasaran dapat memanfaatkan tools ini tanpa biaya selama 24 jam.
                                <strong>cmlabs</strong> akan berkembang ke pasar yang lebih besar untuk menghadirkan produk SEO dan melayani
                                aktivitas SEO dalam skala global. <strong>Do better SEO with cmlabs</strong>.
                            </p>
                            <p className="main__paragraph">
                                <strong>cmlabs</strong> adalah brand spesialis di bidang Search Engine Optimization (SEO) dan tools untuk mendukung
                                kegiatan SEO dibawah <strong>PT cmlabs Indonesia Digital</strong>. Terletak di dua kota besar di Indonesia, Jakarta
                                dan Malang, perusahaan ini digagas untuk membantu perusahaan meningkatkan visibilitas brand mereka di Internet.
                                <strong>cmlabs</strong> adalah istilah baru untuk produk dan layanan SEO yang disebut Software as a Service (SaaS).
                                Kami melayani pengguna dengan Konsultan SEO, Penulisan Konten, Pemasaran Konten, dan juga kami memiliki produk
                                berupa Keyword Ranking Tracker. Selain layanan dan produk, <strong>cmlabs</strong> juga menyediakan SEO Tools
                                gratis. Pengguna yang sedang melakukan SEO dan pemasaran dapat memanfaatkan tools ini tanpa biaya selama 24 jam.
                                <strong>cmlabs</strong> akan berkembang ke pasar yang lebih besar untuk menghadirkan produk SEO dan melayani
                                aktivitas SEO dalam skala global. <strong>Do better SEO with cmlabs</strong>.
                            </p>
                            <p className="main__paragraph">
                                <strong>cmlabs</strong> adalah brand spesialis di bidang Search Engine Optimization (SEO) dan tools untuk mendukung
                                kegiatan SEO dibawah <strong>PT cmlabs Indonesia Digital</strong>. Terletak di dua kota besar di Indonesia, Jakarta
                                dan Malang, perusahaan ini digagas untuk membantu perusahaan meningkatkan visibilitas brand mereka di Internet.
                                <strong>cmlabs</strong> adalah istilah baru untuk produk dan layanan SEO yang disebut Software as a Service (SaaS).
                                Kami melayani pengguna dengan Konsultan SEO, Penulisan Konten, Pemasaran Konten, dan juga kami memiliki produk
                                berupa Keyword Ranking Tracker. Selain layanan dan produk, <strong>cmlabs</strong> juga menyediakan SEO Tools
                                gratis. Pengguna yang sedang melakukan SEO dan pemasaran dapat memanfaatkan tools ini tanpa biaya selama 24 jam.
                                <strong>cmlabs</strong> akan berkembang ke pasar yang lebih besar untuk menghadirkan produk SEO dan melayani
                                aktivitas SEO dalam skala global. <strong>Do better SEO with cmlabs</strong>.
                            </p>
                            <p className="main__paragraph">
                                <strong>cmlabs</strong> adalah brand spesialis di bidang Search Engine Optimization (SEO) dan tools untuk mendukung
                                kegiatan SEO dibawah <strong>PT cmlabs Indonesia Digital</strong>. Terletak di dua kota besar di Indonesia, Jakarta
                                dan Malang, perusahaan ini digagas untuk membantu perusahaan meningkatkan visibilitas brand mereka di Internet.
                                <strong>cmlabs</strong> adalah istilah baru untuk produk dan layanan SEO yang disebut Software as a Service (SaaS).
                                Kami melayani pengguna dengan Konsultan SEO, Penulisan Konten, Pemasaran Konten, dan juga kami memiliki produk
                                berupa Keyword Ranking Tracker. Selain layanan dan produk, <strong>cmlabs</strong> juga menyediakan SEO Tools
                                gratis. Pengguna yang sedang melakukan SEO dan pemasaran dapat memanfaatkan tools ini tanpa biaya selama 24 jam.
                                <strong>cmlabs</strong> akan berkembang ke pasar yang lebih besar untuk menghadirkan produk SEO dan melayani
                                aktivitas SEO dalam skala global. <strong>Do better SEO with cmlabs</strong>.
                            </p>
                            <p className="main__paragraph">
                                <strong>cmlabs</strong> adalah brand spesialis di bidang Search Engine Optimization (SEO) dan tools untuk mendukung
                                kegiatan SEO dibawah <strong>PT cmlabs Indonesia Digital</strong>. Terletak di dua kota besar di Indonesia, Jakarta
                                dan Malang, perusahaan ini digagas untuk membantu perusahaan meningkatkan visibilitas brand mereka di Internet.
                                <strong>cmlabs</strong> adalah istilah baru untuk produk dan layanan SEO yang disebut Software as a Service (SaaS).
                                Kami melayani pengguna dengan Konsultan SEO, Penulisan Konten, Pemasaran Konten, dan juga kami memiliki produk
                                berupa Keyword Ranking Tracker. Selain layanan dan produk, <strong>cmlabs</strong> juga menyediakan SEO Tools
                                gratis. Pengguna yang sedang melakukan SEO dan pemasaran dapat memanfaatkan tools ini tanpa biaya selama 24 jam.
                                <strong>cmlabs</strong> akan berkembang ke pasar yang lebih besar untuk menghadirkan produk SEO dan melayani
                                aktivitas SEO dalam skala global. <strong>Do better SEO with cmlabs</strong>.
                            </p>
                            <p className="main__paragraph">
                                <strong>cmlabs</strong> adalah brand spesialis di bidang Search Engine Optimization (SEO) dan tools untuk mendukung
                                kegiatan SEO dibawah <strong>PT cmlabs Indonesia Digital</strong>. Terletak di dua kota besar di Indonesia, Jakarta
                                dan Malang, perusahaan ini digagas untuk membantu perusahaan meningkatkan visibilitas brand mereka di Internet.
                                <strong>cmlabs</strong> adalah istilah baru untuk produk dan layanan SEO yang disebut Software as a Service (SaaS).
                                Kami melayani pengguna dengan Konsultan SEO, Penulisan Konten, Pemasaran Konten, dan juga kami memiliki produk
                                berupa Keyword Ranking Tracker. Selain layanan dan produk, <strong>cmlabs</strong> juga menyediakan SEO Tools
                                gratis. Pengguna yang sedang melakukan SEO dan pemasaran dapat memanfaatkan tools ini tanpa biaya selama 24 jam.
                                <strong>cmlabs</strong> akan berkembang ke pasar yang lebih besar untuk menghadirkan produk SEO dan melayani
                                aktivitas SEO dalam skala global. <strong>Do better SEO with cmlabs</strong>.
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12"></div>
                    </div>
                </div>
            </div>
        </>
        // <div className="container" style={{'paddingTop': '30px'}}>
        // <form action="/api/testAPI" method="POST" encType="multipart/form-data" className="row g-3">                                
        //     <div className="col-12">
        //         <div className="input-group mb-3">
        //             <input type="file" name="fileName" className="form-control" id="inputGroupFile02"/>
        //             <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
        //         </div>
        //     </div>
                            
        //     <div className="col-12">
        //         <div className="modal-footer">
        //             <button type="submit" className="btn btn-primary">Save changes</button>
        //         </div>
        //     </div>
        // </form>
        
        // <form onSubmit={handleSubmit} className="row g-3">                                
        //     <div className="col-12">
        //         <div className="input-group mb-3">
        //             <input type="file" name="fileName" className="form-control" id="inputGroupFile02"/>
        //             <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
        //         </div>
        //     </div>
                            
        //     <div className="col-12">
        //         <div className="modal-footer">
        //             <button type="submit" className="btn btn-primary">Save changes</button>
        //         </div>
        //     </div>
        // </form>

        //     <div className="container">
                
        //     </div>
        // </div>
    )
}

export async function getServerSideProps() {
    const request = await fetch(`http://localhost:3000/api/testAPI`)
    const result = await request.json()

    console.log(result)

    return {
        props: { mahasiswa: result}
    }
}