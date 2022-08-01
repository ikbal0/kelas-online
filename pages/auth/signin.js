import {getCsrfToken} from 'next-auth/react'
import {getSession} from 'next-auth/react'

export default function SignIn({csrfToken}){
    return(
        <form method='POST' action='/api/auth/callback/credentials'>
            <label>
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                email
                <input name="email" type="text" placeholder="{email}" />
            </label>
            <label>
                Password
                <input name="password" type="password" placeholder="password" />
            </label>
            <button type="submit">Sign in</button>
        </form>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if (session){
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    }
}