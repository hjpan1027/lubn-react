import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import logo from '../images/logo.svg';

class Footer extends Component {
  render() {
    return (
      <footer className="footer text-muted ">
        <div className="container">


          <a href="https://www.facebook.com/lubnaccess">Facebook</a> |{' '}
          <a href="https://www.twitter.com/lubnaccess">Twitter</a>
        

            <div id="footer-logo"><img src={logo} alt=""/></div>
            <p className="text-muted"> &#169; {new Date().getFullYear()} Lubn Inc. All rights reserved.</p>
            <p className="text-muted">Terms, conditions, features, availability, pricing, fees, service and support options subject to change without notice.</p>

        </div>
      </footer>
    );
  }
}

export default Footer;
