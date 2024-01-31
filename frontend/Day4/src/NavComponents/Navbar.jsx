import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        SIGN OUT
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/themes">Themes</NavLink>
        </li>
        <li>
        <NavLink to="/venue">Venues</NavLink>
      </li>
        <li>
        <NavLink to="/booking">Booking</NavLink>
      </li>
      <li>
      <NavLink to="/payment">Payment List</NavLink>
    </li>
        <li>
          <NavLink to="/feedback">Feedback</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/user">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
