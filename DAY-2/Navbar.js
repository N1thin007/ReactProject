import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li className="navbar-item"><NavLink to="/login" activeClassName="active">Login</NavLink></li>
        <li className="navbar-item"><NavLink to="/admin-login" activeClassName="active">Admin Login</NavLink></li>
        <li className="navbar-item"><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li className="navbar-item"><NavLink to="/contact" activeClassName="active">Contact Us</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
