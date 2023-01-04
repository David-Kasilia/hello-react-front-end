import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <div className="collapse navbar-collapse justify-content-center" id="navbarCenteredExample">
        <ul className="navbar-nav mb-2 mb-lg-0 d-flex justify-content-between">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item ms-5">
            <NavLink to="/greeting" className="nav-link">Greeting</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
