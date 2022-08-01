import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../lib/mongodb";



export default NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                const client = await clientPromise
                const db_e_learning_db = await client.db("e_learning_db")
                const userTbl = await db_e_learning_db.collection("userTbl")
                // const dataUser = userTbl.find({})
                // Add logic here to look up the user from the credentials supplied

                const dataUser = await userTbl.findOne({email: credentials.email})

                if (dataUser) {
                    if (credentials.password === dataUser.password){
                        return dataUser
                    } else {
                        return null
                    }
                } else {
                    // If you return null or false then the credentials will be rejected
                    return null
                    // You can also Reject this callback with an Error or with a URL:
                    // throw new Error('error message') // Redirect to error page
                    // throw '/path/to/redirect'        // Redirect to a URL
                }
            }
        })
    ],
    pages: {
        signIn: '/auth/signin',
    },
    session: {
        jwt: true
    },
    jwt: {
        secret: process.env.MONGODB_URI,
    },
})