import {getCsrfToken} from 'next-auth/react'
import {getSession} from 'next-auth/react'
import { useFormik } from 'formik';
import Head from 'next/head'
import img from '../../public/assets/pic/bg/bgIndex.png'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { useState } from 'react';
import style from '../../styles/Login.module.css'
import login_validate from '../../lib/validate';

export default function SignIn({csrfToken}){
    const [isLoading, setLoading] = useState(false)
    function FormLogin() {
        const formik = useFormik({
            initialValues:{
                email: '',
                password: '',
                csrfToken: csrfToken
            },
            validate: login_validate,
            onSubmit
        })
    
        async function onSubmit(values){
            setLoading(!isLoading)
            signIn("credentials", {
                email: values.email, 
                password: values.password
            })
        }
    
        return <div>
            <form onSubmit={formik.handleSubmit}>
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input 
                    type="email" 
                    name="email"
                    className="form-control" 
                    id="exampleInputEmail1"
                    {...formik.getFieldProps('email')}
                    />
                    {formik.errors.email && formik.touched.email ? <span>{formik.errors.email}</span>:<></>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                    type="password" 
                    name="password"
                    className="form-control" 
                    id="exampleInputPassword1"
                    {...formik.getFieldProps('password')}
                    />
                    {formik.errors.password && formik.touched.password ? <span className="text-danger">{formik.errors.password}</span>:<></>}
                </div>
                <div className="d-grid mx-auto">
                <button type="submit" className="btn btn-primary">LogIn</button>
                </div>
            </form>
            <div className="row mb-4 my-3 text-start">
                <small className="font-weight-bold text-center">forgot your <a className="text-danger " style={{'cursor': 'pointer'}}>password?</a></small>
            </div>
        </div>
    }

    return(
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className=" overflow-hidden">
            <div className={`modal fade ${isLoading ? 'show' : ''}`} style={{'display': `${isLoading ? 'block' : 'none'}`}} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-body mx-auto">
                    <div style={{'paddingTop': '40px', 'paddingBottom': '60px'}}>
                        <div className="spinner-grow" style={{'marginRight': '10px'}} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow" style={{'marginRight': '10px'}} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow" style={{'marginRight': '10px'}} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow" style={{'marginRight': '10px'}} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="row">
                <div className={`col-lg-9 col-md-7 ${style.grid1}`}>
                    <h2 style={{'display':'none'}}>something</h2>
                </div>

                <div className={`col-lg-3 col-md-5 ${style.grid2}`} style={{'height': '100vh', 'paddingRight': '20px', 'paddingLeft': '20px'}}>
                    <div className="row text-start align-content-center h-100" >
                        <h2>Welcome Back</h2>
                        <small className="font-weight-bold">Start your <a className="text-danger" style={{'textDecoration': 'none', 'cursor': 'pointer'}}>career</a> here!</small>
                        <hr className="my-4"/>
                        <FormLogin/>
                    </div>
                </div>
            </div>
        </div>
        </div>
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