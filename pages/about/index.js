import Link from "next/link";
import styles from "../../styles/Home.module.css"
import AppNavbar from "../../lib/components/AppNavbar";
import Image from "next/image";
import img from "../../public/assets/pic/foto/foto.jpg"
import { Archive, ArchiveFill, Asterisk, Bootstrap, Calendar, CalendarFill, Envelope, FiletypeJava, FiletypeJs, Github, Globe, House, Microsoft, PersonBoundingBox, WindowFullscreen } from "react-bootstrap-icons";
import { useRouter } from "next/router";

export default function AboutPage(){
    const route = useRouter()
    route.push('/')
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
                            <h6><WindowFullscreen/> Im <a style={{'color': '#b00b29'}}>Interested</a> in Programming</h6>
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
                            <h6>English <button className="btn btn-success btn-sm">Basic</button></h6>
                        </div>
                    </div>
                </div>

                <div className="col-lg-8 col-md-8 col-12">
                <div className="card mb-3">
                        <div className="card-body">
                            <h2 className="my-4"><PersonBoundingBox/> About Me</h2>
                            <h6>How I got into Programming</h6>
                            <h6 className="mr-3"><CalendarFill/> 2017 - 2018</h6>
                            <p>
                                at 2014 when I&apos;m at my last year in middle schoole, me and my friend think about how to make money, at that time
                                we make a blog on Blogger, the idea come in because make a blog preaty popular that time. I learn 
                                how to costume the page using css at that time, but I had no idea about it so the blog just make around 3 mounth.
                                time went by until my scound year at highshool, the homeroom teacher gift the class a paper and we need to fill it whit 
                                our plan for future like waht we gona do? work? colage? what majoring we gona take? what our future goals?,
                                and I remember that I was at some point learn about web design so I take a consulation whit a TIK teacher.
                            </p>

                            <p>
                                so I make a group of three people and start discusing about web programing but it&apos;s not a formal club but because we don&apos;t have
                                a mentor it&apos;s not going wel, we just talking to the teacher if they have time, and I learn &quot;C&quot; until I go to colage.
                            </p>
                            
                            <h6>I go to College Majoring in Informatics Engineering</h6>
                            <h6 className="mr-3"><CalendarFill/> 2018 - Now</h6>
                            <p>
                                when I got to colage, I almost dosn&apos;t know any thing. Algorithm, data structure, system planing
                                was something I found on coalge.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h2 className="my-4"><Archive/> Education</h2>
                            <h6>STIE DHARMA NEGARA</h6>
                            <h6><CalendarFill/> 2020 - 2022</h6>
                            <p className="mb-3">moved</p>

                            <h6>LP3I Tasikmalaya</h6>
                            <h6 className="mb-3"><CalendarFill/> 2018 - 2020</h6>

                            <h6>SMA Negeri Cikatomas</h6>
                            <h6 className="mb-3"><CalendarFill/> 2015 - 2018</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}