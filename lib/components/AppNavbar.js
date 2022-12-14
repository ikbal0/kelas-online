import Link from "next/link";
import { useState } from "react";
import { getSession, useSession, signIn, signOut } from "next-auth/react"

export default function AppNavbar(props) {
  const { data: session } = useSession()

  const [state, setState] = useState({
    menu: false,
    isOpen: false,
  })

  const toggleMenu = () => {
    setState({
      ...state,
      menu: !state.menu
    })
  }


  const show = state.menu ? " show" : ""

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" style={{color: '#151642'}}>Kelas-online</a>
        <button className="navbar-toggler" onClick={toggleMenu} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"collapse navbar-collapse" + show} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href={'/'} passHref>
              <a className="nav-link" aria-current="page">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={'/about'} passHref>
              <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={'/TestPage'} passHref>
              <a className="nav-link">Test</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={'/blog'} passHref>
              <a className="nav-link">Blog</a>
              </Link>
            </li>
            {props.session ? 
              <li className="nav-item">
                <Link href={'/blog/post'} passHref>
                  <a className="nav-link">create post</a>
                </Link>
              </li> 
            :
              ''
            }
          </ul>
          <form className="d-flex" role="search">
            {!session ? <button onClick={() => signIn()} className="btn btn-outline-success" type="submit">Sign in</button> : <h3><button className="btn btn-outline-danger" onClick={() => signOut()}>Sign Out</button></h3>}
          </form>
        </div>
      </div>
    </nav>
  )
}