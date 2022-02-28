import React from 'react'
import photo from './myPhoto.jpg'
import {NavLink} from 'react-router-dom'

export const TopBar=({user})=> {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="navbar-brand" >
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-pinterest"></i>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">

      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <NavLink to="/" className="nav-link active" aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/posts" className="nav-link" href="#">Rólam</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/write" className="nav-link" href="#">Írj</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link " href="#"  >Kapcsolat</NavLink>
        </li>
      </ul>

      <ul className="navbar-nav ms-auto">
      {!user && (<li className="nav-item">
          <NavLink to="/login" className="nav-link " aria-current="page" href="#">Bejelentkezés</NavLink>
        </li>)}
       {!user &&  (<li className="nav-item">
          <NavLink to="/register" className="nav-link" href="#">Regisztráció</NavLink>
        </li>)}
        {user && (<li className="nav-item">
          <NavLink to="/logout" className="nav-link" href="#">Kijelentkezés</NavLink>
        </li>)}
      </ul>

    </div>
    <i className="search-icon fa-solid fa-magnifying-glass"></i>
    <div>
        {user &&  <NavLink to="/settings">
                    <img  className="top-img" src={photo} alt="fotó"/>
                </NavLink>
           }
    </div>
  </div>
</nav>
    </div>
  )
}
