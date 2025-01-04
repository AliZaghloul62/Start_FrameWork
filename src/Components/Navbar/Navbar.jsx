import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";


export default function Navbar() {
  return (
    <nav className="position-fixed top-0 start-0 w-100 py-3 px-5 d-flex justify-content-between">
      <Link to="Start_FrameWork/home" className="text-decoration-none">
        <h1 className="my-0 ms-5 fw-bold">Start Framework</h1>
      </Link>

      <ul className="list-unstyled d-flex justify-content-center align-items-center me-5 my-auto">
        <li className="mx-3">
          <NavLink
            to="/Start_FrameWork/about"
            id="nav-link"
            className={({isActive}) => (isActive ? "text-decoration-none fw-semibold px-3 py-2 rounded fs-5 activ-link" : "text-decoration-none fw-semibold fs-5")}
          >
            ABOUT
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink
            to="/Start_FrameWork/portfolio"
            id="nav-link"
            className={({isActive}) => (isActive ? "text-decoration-none fw-semibold fs-5 px-3 py-2 rounded activ-link" : "text-decoration-none fw-semibold fs-5")}
          >
            PORTFOLIO
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink
            to="/Start_FrameWork/contact"
            id="nav-link"
            className={({isActive}) => (isActive ? "text-decoration-none fw-semibold fs-5 px-3 py-2 rounded activ-link" : "text-decoration-none fw-semibold fs-5")}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}