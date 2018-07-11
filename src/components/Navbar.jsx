import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.svg';


const Navbar =() => {

    return (
      <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">

        <NavLink className="navbar-brand" to="/">
            <img src={logo} width="30" height="30" alt="" />
        </NavLink>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                  <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                  </li>
                  </ul>
            </div>
        </div>
      </nav>


    );
  }


export default Navbar;
