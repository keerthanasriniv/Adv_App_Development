import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
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
          <NavLink to="/eventcrud">ADD EVENTS</NavLink>
        </li>
        <li>
          <NavLink to="/venuecrud">ADD VENUES</NavLink>
        </li>
        <li>
          <NavLink to="/themecrud">ADD THEMES</NavLink>
        </li>
       
        <li>
          <NavLink to="/adminhome">HOME</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;