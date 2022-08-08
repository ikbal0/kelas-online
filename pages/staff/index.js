import { getSession, useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"

export default function StaffDashboard(){
    const { data: session } = useSession()
    return <div>
        <h2>Staff Dashboard</h2>
        <Link href={'/'}><a style={{color: 'blue'}}>Home</a></Link>
        {!session ? <button onClick={() => signIn()}>Sign in</button> : <h3><button onClick={() => signOut()}>Sign Out</button></h3>}
    </div>
}

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if (!session){
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }

    return {
        props: {
            session,
        }
    }
}