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
                const testDb = await client.db("test-Db")
                const userTbl = await testDb.collection("userTbl")

                
                // const e_learning_db = await client.db("e_learning_db")
                // const userTbl = await e_learning_db.collection("userTbl")
                // const dataUser = userTbl.find({})
                // Add logic here to look up the user from the credentials supplied

                const dataUser = await userTbl.findOne({email: credentials.email})

                // console.log({
                //     cred_email: credentials.email,
                //     cred_pass: credentials.password,
                //     email: dataUser.email,
                //     password: dataUser.password
                // })

                if (dataUser) {
                    if (credentials.password === dataUser.password){
                        // console.log(dataUser)
                        return {
                            email: dataUser.email,
                            level: dataUser.level
                        }
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
    callbacks: {
        jwt: ({ token, user }) => {
            if(user){
                token.email = user.email,
                token.level = user.level
            }

            return token
        },
        session: ({ session, token }) => {
            if(token){
                session.email = token.email
                session.level = token.level
            }

            return session
        },
    },
    pages: {
        signIn: '/auth/signin',
    },
    secret: process.env.JWT_SECREAT,
    jwt: {
        secret: process.env.JWT_SECREAT,
    },
})