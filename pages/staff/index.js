import { getSession, useSession, signIn, signOut } from "next-auth/react"

export default function StaffDashboard(){
    const { data: session } = useSession()
    return <div>
        <h2>Staff Dashboard</h2>
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