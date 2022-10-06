import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="container-fluid p-4 bg-black d-flex justify-content-between flex-lg-row flex-md-row flex-column">
      <Link className="text-white text-decoration-none fs-4" to={"/home"}>
        Home
      </Link>
      <Link className="text-white text-decoration-none fs-4" to={"/about"}>
        About
      </Link>
      <Link className="text-white text-decoration-none fs-4" to={"/catagories"}>
        Catagories
      </Link>
    </nav>
  );
};

export default Header;
