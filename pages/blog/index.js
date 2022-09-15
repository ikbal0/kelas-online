import { getSession, useSession } from "next-auth/react";
import AppNavbar from "../../lib/components/AppNavbar";

function BlogPage(){
    const { data: session } = useSession()
    return(
        <>
            <AppNavbar session={session}/>
            <div className="container-fluid">
                <h3>Blog</h3>
            </div>
        </>
    )
}

export default BlogPage;

// export async function getServerSideProps(context) {
//     const session = await getSession(context)

//     if (!session){
//         return {
//             redirect: {
//                 permanent: false,
//                 destination: "/"
//             }
//         }
//     }

//     return {
//         props: {
//             session,
//         }
//     }
// }