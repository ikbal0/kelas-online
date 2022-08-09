import Link from "next/link";
import styles from "../../styles/Home.module.css"
import AppNavbar from "../../lib/components/AppNavbar";
import Image from "next/image";
import img from "../../public/assets/pic/foto/foto.jpg"

export default function AboutPage(){
    return <div className={styles.container}>
        <div className='container'>
            <div className='row' style={{paddingTop: '20px'}}>
                <div className='col-sm-12 col-md-6 text-center'>
                    <div style={{width: "320px", marginLeft: 'auto', marginRight: 'auto'}}>
                    <Image src={img}/>
                    </div>
                </div>

                <div className='col-sm-12 col-md-6'>
                    <div className="row text-center">
                        <p style={{color: '#4348fa'}}>Hello everyone, my Name is</p>
                    </div>

                    <div className="row mb-2 text-center">
                        <h1>Ikbal Yaduar Taupik</h1>
                    </div>

                    <div className="row mb-5 text-center">
                        <Link href={'/'}><a className="btn btn-primary" style={{width: 'auto', marginLeft: 'auto', marginRight: 'auto'}} role='button'>Portofolio</a></Link>
                    </div>
                    
                    <div className="row mb-3">
                        <h3>Familiar with</h3>
                    </div>

                    <div className="row mb-2">
                        <div className="col-auto mb-3">
                            <a 
                            className="btn btn-warning" 
                            href="https://github.com/ikbal0/kelas-online.git" 
                            target="_blank" 
                            rel="noopener noreferrer">
                                Basic Javascript
                            </a>
                        </div>
                        
                        <div className="col-auto mb-3">
                            {/* <div class="progress">
                                <div class="progress-bar bg-warning" role="progressbar" aria-label="Warning example" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div> */}
                            <a 
                            className="btn btn-danger" 
                            href="https://github.com/ikbal0/JavaPro.git" 
                            target="_blank"
                            rel="noopener noreferrer">
                                Basic Java
                            </a>
                        </div>

                        <div className="col-auto mb-3">
                            {/* <div class="progress">
                                <div class="progress-bar bg-warning" role="progressbar" aria-label="Warning example" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div> */}
                            <a className="btn btn-success" href="https://github.com/ikbal0/kelas-online.git" target="_blank" rel="noopener noreferrer">Node Js</a>
                        </div>

                        <div className="col-auto mb-3">
                            {/* <div class="progress">
                                <div class="progress-bar bg-warning" role="progressbar" aria-label="Warning example" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div> */}
                            <a className="btn btn-info" href="https://github.com/ikbal0/kelas-online.git" target="_blank" rel="noopener noreferrer">RestAPI</a>
                        </div>

                        <div className="col-auto mb-3">
                            {/* <div class="progress">
                                <div class="progress-bar bg-warning" role="progressbar" aria-label="Warning example" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div> */}
                            <a className="btn btn-success" href="https://github.com/ikbal0/kelas-online.git" target="_blank" rel="noopener noreferrer">MongoDB</a>
                        </div>

                        <div className="col-auto mb-3">
                            {/* <div class="progress">
                                <div class="progress-bar bg-warning" role="progressbar" aria-label="Warning example" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div> */}
                            <a className="btn" style={{backgroundColor: 'var(--bs-purple)', color: 'white'}} href="https://github.com/ikbal0/kelas-online.git" target="_blank" rel="noopener noreferrer">Bootstrap</a>
                        </div>
                        
                        <div className="col-auto mb-3">
                            {/* <div class="progress">
                                <div class="progress-bar bg-warning" role="progressbar" aria-label="Warning example" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div> */}
                            <a className="btn btn-dark" href="https://github.com/ikbal0/kelas-online.git" target="_blank" rel="noopener noreferrer">Next Js</a>
                        </div>

                        <div className="col-auto mb-3">
                            {/* <div class="progress">
                                <div class="progress-bar bg-warning" role="progressbar" aria-label="Warning example" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div> */}
                            <a className="btn" style={{backgroundColor: '#084298', color: 'white'}}>Ms Visio</a>
                        </div>

                        <div className="col-auto mb-3">
                            {/* <div class="progress">
                                <div class="progress-bar bg-warning" role="progressbar" aria-label="Warning example" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div> */}
                            <a className="btn btn-primary">Ms Office(Word, Excel, Power Point)</a>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="row">
                <h3>Language</h3>
                <div className="row">
                    <div className="col">
                        <h5>Bahasa Indonesia</h5>
                    </div>
                    <div className="col">
                        <h5>Fluent</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h5>English</h5>
                    </div>
                    <div className="col">
                        <h5>Basic conversation</h5>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
}