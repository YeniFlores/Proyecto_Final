import React from "react"
import "./navbar.css"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";



function NavBar () {
    return (
        <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><h2>Clover</h2></Link>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/category/accessory">Accesorios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category/hombre">Hombre</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category/mujer">Mujer</Link>
              </li>
              <li className="cart_widget" >
              <CartWidget/>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      
    )


}
export default NavBar;