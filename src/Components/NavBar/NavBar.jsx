import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="nav-container">
        <span id="title">Levvel Latin Blog Quotes</span>
        <div className="nav-links">
          <Link to="/" style={{ textDecoration: "none", color: "maroon" }}>
            <span>Home</span>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
