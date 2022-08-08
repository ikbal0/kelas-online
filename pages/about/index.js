import Link from "next/link";
import styles from "../../styles/Home.module.css"
import AppNavbar from "../../lib/components/AppNavbar";
import Image from "next/image";
import img from "../../public/assets/pic/foto/foto.jpg"

export default function AboutPage(){
    return <div className={styles.container}>
        <AppNavbar />

        <hr/>

        <div className='container text-center'>
            <div className='row' style={{paddingTop: '20px'}}>
                <div className='col-sm-12 col-md-8'>
                    <div className="row">
                        <h7 style={{color: '#4348fa'}}>Hello everyone, my Name is</h7>
                    </div>
                    <div className="row">
                        <h1>Ikbal Yaduar Taupik</h1>
                    </div>
                </div>
                
                <div className='col-sm-12 col-md-4 text-center'>
                    <div style={{width: "320px", marginLeft: 'auto', marginRight: 'auto'}}>
                    <Image src={img}/>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
}