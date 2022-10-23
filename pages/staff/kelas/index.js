import Head from "next/head";
import SideNav from "../../../lib/components/Staff/Navbar/SideNav";
import StaffNav from "../../../lib/components/StaffNav";
import { getSession } from "next-auth/react"
import TableKelas from "../../../lib/components/Staff/kelas/TableKelas";

export default function ListKelas() {
    return(
        <>
        <Head>
            <title>Kelas</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="row position-sticky sticky-lg-top">
            <StaffNav/>
        </div>

        <div style={{'padding': '20px'}}>
            <div style={{'padding': '20px'}} className="row">
                <h3>Dosen</h3>
            </div>

            <hr/>

            <div className="row">
                <SideNav kelasActive={true}/>
                
                <div className="col-lg-10 col-md-10 col-sm-12">
                    <TableKelas/>
                </div>
            </div>
        </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if(!session){
        return {
            redirect: {
                permanent: false,
                destination: "/auth/signin"
            }
        }
    }

    return {
        props: {
            session,
        }
    }
}