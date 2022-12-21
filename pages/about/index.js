import Link from "next/link";
import styles from "../../styles/Home.module.css"
import AppNavbar from "../../lib/components/AppNavbar";
import Image from "next/image";
import img from "../../public/assets/pic/foto/foto.jpg"
import { Archive, ArchiveFill, Asterisk, Bootstrap, Calendar, CalendarFill, Envelope, FiletypeJava, FiletypeJs, Github, Globe, House, Microsoft, PersonBoundingBox, WindowFullscreen } from "react-bootstrap-icons";
import { useRouter } from "next/router";

export default function AboutPage(){
    return (
        <>
            <div
            style={{
                'background': '#151642'
            }}
            className="p-5 text-white">
                <div className="row">
                    <div className="col">
                    <h1>Ikbal Yaduar Taupik</h1>
                    <p>Junior Programmer</p>
                    <div className="p-3 border border-light border-start-0 rounded-end">
                        Recent Technical Information graduate with a focus in Web Development using Javascript, Express js and Next Js as a framework
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="text-center mt-5">
                            <img src="a23.png" width="100" className="rounded-circle d-none d-lg-block" alt="Cinque Terre"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="h4 pb-2 mb-4 text-dark border-bottom border-secondary">
                Repository
                </div>
                <div className="p-3 border border-secondary border-start-0 rounded-end">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="h4 pb-2 mb-4 text-dark border-bottom border-secondary">
                            Next Js
                            </div>
                            <div className="p-3 bg-secondary bg-opacity-10 border border-secondary border-start-0 rounded-end mb-3">
                            <p>Handle email using node mailer</p>
                            <a className="text-dark" href="https://github.com/ikbal0/email-contact-app.git" target="_blank" rel="noreferrer">https://github.com/ikbal0/email-contact-app.git</a> 
                            </div>
                            <div className="p-3 bg-secondary bg-opacity-10 border border-secondary border-start-0 rounded-end mb-3">
                            <p>screen capture app using next js</p>
                            <a className="text-dark" href="https://github.com/ikbal0/screen-capture-app.git" target="_blank" rel="noreferrer">https://github.com/ikbal0/screen-capture-app.git</a> 
                            </div>
                            <div className="p-3 bg-secondary bg-opacity-10 border border-secondary border-start-0 rounded-end mb-3">
                            <p>Next-auth</p>
                            <a className="text-dark" href="https://github.com/ikbal0/kelas-online.git" target="_blank" rel="noreferrer">https://github.com/ikbal0/kelas-online.git</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="h4 pb-2 mb-4 text-dark border-bottom border-secondary">
                            Express Js
                            </div>
                            <div className="p-3 bg-secondary bg-opacity-10 border border-secondary border-start-0 rounded-end mb-3">
                            <p>EXPRESS JS API TEST</p>
                            <a className="text-dark" href="https://github.com/ikbal0/server-test-backend.git" target="_blank" rel="noreferrer">https://github.com/ikbal0/server-test-backend.git</a>
                            </div>
                            <div className="p-3 bg-secondary bg-opacity-10 border border-secondary border-start-0 rounded-end mb-3">
                            <p>next js using external server</p>
                            <a className="text-dark" href="https://github.com/ikbal0/my-product.git" target="_blank" rel="noreferrer">https://github.com/ikbal0/my-product.git</a> 
                            </div>
                            
                        </div>
                        <div className="col-lg-6">
                            <div className="h4 pb-2 mb-4 text-dark border-bottom border-secondary">
                            Java
                            </div>
                            <div className="p-3 bg-secondary bg-opacity-10 border border-secondary border-start-0 rounded-end mb-3">
                            <p>JAVA BASIC</p>
                            <a className="text-dark" href="https://github.com/ikbal0/Java---Canvas.git" target="_blank" rel="noreferrer">https://github.com/ikbal0/Java---Canvas.git</a> 
                            </div>

                        </div>

                        <div className="col-lg-6">
                            <div className="h4 pb-2 mb-4 text-dark border-bottom border-secondary">
                            Vue Js
                            </div>
                            <div className="p-3 bg-secondary bg-opacity-10 border border-secondary border-start-0 rounded-end mb-3">
                            <p>Simple VUE APP</p>
                            <a className="text-dark" href="https://github.com/ikbal0/food-app.git" target="_blank" rel="noreferrer">https://github.com/ikbal0/food-app.git</a> 
                            </div>

                        </div>

                        <div className="col-lg-6">
                            <div className="h4 pb-2 mb-4 text-dark border-bottom border-secondary">
                            Typescript
                            </div>
                            <div className="p-3 bg-secondary bg-opacity-10 border border-secondary border-start-0 rounded-end mb-3">
                            <p>rest api using express typescript </p>
                            <a className="text-dark" href="https://github.com/ikbal0/Typescript-Pro.git" target="_blank" rel="noreferrer">https://github.com/ikbal0/Typescript-Pro.git</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}