import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">SmartLibrary</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/reservation">Reservation</Link>

        <Link to="/my-reservations">My Reservations</Link>

        <Link to="/login" className="login-btn">Login</Link>

      </div>

    </nav>
  );
}

export default Navbar;