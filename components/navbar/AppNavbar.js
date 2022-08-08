import Link from "next/link";
import { useState } from "react";
import { getSession, useSession, signIn, signOut } from "next-auth/react"

export default function AppNavbar() {
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
    // <div className="container">
    //   {/* <h3>nav</h3> */}
    //   <div className="row">
    //     <div className="col-auto">
    //       <Link href="/" passHref>
    //         <a style={{textDecoration: 'none'}}>Home</a>
    //       </Link>
    //     </div>
    //     <div className="col-auto">
    //       <Link href="/about" passHref>
    //         <a style={{textDecoration: 'none'}}>About</a>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" onClick={toggleMenu} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={"collapse navbar-collapse" + show} id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link href={'/'} passHref>
          <a class="nav-link" aria-current="page">Home</a>
          </Link>
        </li>
        <li class="nav-item">
          <Link href={'/about'} passHref>
          <a class="nav-link">About</a>
          </Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        {!session ? <button onClick={() => signIn()} class="btn btn-outline-success" type="submit">Sign in</button> : <h3><button class="btn btn-outline-danger" onClick={() => signOut()}>Sign Out</button></h3>}
      </form>
    </div>
  </div>
</nav>
  )
}