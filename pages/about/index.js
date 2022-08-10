import Link from "next/link";
import styles from "../../styles/Home.module.css"
import AppNavbar from "../../lib/components/AppNavbar";
import Image from "next/image";
import img from "../../public/assets/pic/foto/foto.jpg"
import { Archive, ArchiveFill, Asterisk, Bootstrap, Calendar, CalendarFill, Envelope, FiletypeJava, FiletypeJs, Github, Globe, House, Microsoft, PersonBoundingBox, WindowFullscreen } from "react-bootstrap-icons";

export default function AboutPage(){
    return (
        <div style={{'paddingTop': '20px'}}>
            <div className="row mx-2 my-2 mx-lg-5">
                <div className="col-lg-4 col-md-4 col-12">
                    <div className="card mb-3">
                        <div style={{width: "100%"}}>
                            <Image src={img}/>
                        </div>
                        <div className="p-3">
                            <h2>Ikbal Yaduar Taupik</h2>
                        </div>
                        <hr/>

                        <div className="card-body">
                            <h6><WindowFullscreen/> Im <text style={{'color': '#b00b29'}}>Interested</text> in Programming</h6>
                            <h6><House/> Tasikmalaya, Indonesia</h6>
                            <h6><Envelope/> ikbal.yaduar@outlook.com</h6>
                            <h6><Github/>
                                <a
                                href="https://github.com/ikbal0/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{'textDecoration': 'none', 'color': 'black'}}> Ikbal0
                                </a>
                            </h6>
                            <hr/>
                            <h6><Asterisk/> Familiar with</h6>
                            
                            <h6><FiletypeJs/>
                                <a
                                href="https://github.com/ikbal0/kelas-online.git" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{'textDecoration': 'none', 'color': 'black'}}> Basic Javascript
                                </a>
                            </h6>
                            
                            <h6><FiletypeJava/> 
                                <a
                                href="https://github.com/ikbal0/kelas-online.git" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{'textDecoration': 'none', 'color': 'black'}}> Basic Java</a>
                            </h6>
                            
                            <h6 style={{'color': '#83CD29'}}>
                                <a
                                href="https://github.com/ikbal0/kelas-online.git" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{'textDecoration': 'none', 'color': '#83CD29'}}> Node Js</a>
                            </h6>
                            
                            <h6>
                                <a
                                href="https://github.com/ikbal0/kelas-online.git" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{'textDecoration': 'none', 'color': 'black'}}> RestAPI</a>
                            </h6>
                            
                            <h6 style={{'color': '#00ED64'}}>
                                <a
                                href="https://github.com/ikbal0/kelas-online.git" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{'textDecoration': 'none', 'color': '#00ED64'}}> MongoDB</a>
                            </h6>
                            
                            <h6><Bootstrap/>
                                <a
                                href="https://github.com/ikbal0/kelas-online.git" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{'textDecoration': 'none', 'color': 'black'}}> Bootstrap</a>
                            </h6>
                            
                            <h6>
                                <a
                                href="https://github.com/ikbal0/kelas-online.git" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{'textDecoration': 'none', 'color': 'black'}}> Next Js</a>
                            </h6>
                            
                            <h6><Microsoft/> Ms Visio
                            </h6>
                            
                            <h6><Microsoft/> Ms Office(Word, Excel, Power Point)
                            </h6>
                            <hr/>

                            <h6><Globe/> Language</h6>
                            <h6>Bahasa Indonesia</h6>
                            <h6>English</h6>
                        </div>
                    </div>
                </div>

                <div className="col-lg-8 col-md-8 col-12">
                <div className="card mb-3">
                        <div className="card-body">
                            <h2 className="my-4"><PersonBoundingBox/> About Me</h2>
                            <h6>How I got into Programming</h6>
                            <h6 className="mr-3"><CalendarFill/> 2017 - 2018</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas aliquet luctus. Aliquam suscipit ut enim non ornare. Quisque blandit lorem justo, eu fringilla erat tempus nec. Ut ut ullamcorper risus. Suspendisse efficitur nibh non odio semper, in fermentum nisi condimentum. Aliquam erat volutpat. In diam risus, pellentesque sit amet interdum in, eleifend a nulla. Nunc feugiat dolor sed ante accumsan tincidunt. Aliquam gravida, orci eget tempus iaculis, erat sem volutpat ipsum, at commodo felis lorem eu nunc.</p>
                            
                            <h6>I go to College Majoring in Informatics Engineering</h6>
                            <h6 className="mr-3"><CalendarFill/> 2018 - Now</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas aliquet luctus. Aliquam suscipit ut enim non ornare. Quisque blandit lorem justo, eu fringilla erat tempus nec. Ut ut ullamcorper risus. Suspendisse efficitur nibh non odio semper, in fermentum nisi condimentum. Aliquam erat volutpat. In diam risus, pellentesque sit amet interdum in, eleifend a nulla. Nunc feugiat dolor sed ante accumsan tincidunt. Aliquam gravida, orci eget tempus iaculis, erat sem volutpat ipsum, at commodo felis lorem eu nunc.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h2 className="my-4"><Archive/> Education</h2>
                            <h6>SMA Negeri Cikatomas</h6>
                            <h6><CalendarFill/> 2015 - 2018</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}