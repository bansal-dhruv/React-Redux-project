import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import Charts from './Charts'

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Grido.co</Link>
        <ul class="right hide-on-med-and-down">    
          <li><Charts /></li>      
          <li><SignedOutLinks /></li>
          <li><SignedInLinks /></li>          
        </ul>
        <ul class="sidenav grey lighten-2" id="mobile-menu">
          <li><Charts /></li>      
          <li><SignedOutLinks /></li>
          <li><SignedInLinks /></li>  
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
