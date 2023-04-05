import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <Link to="/" className="nav--logo">
        #VANLIFE
      </Link>
      <nav className="nav--links">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  );
}
