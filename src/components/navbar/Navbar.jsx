import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ title, brandUrl, links }) => {
  return (
    <>
      <nav
        className="navbar navbar-dark navbar-expand-md bg-dark py-3"
        style={{ position: "fixed", width: "100vw", zIndex: "1000" }}
      >
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon">
              <img style={{ height: "2rem" }} src={brandUrl} />
            </span>
            <span>{title}</span>
          </a>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-5"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-5">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to={links.path1}>
                  {links.link1}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={links.path2}>
                  {links.link2}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={links.path3}>
                  {links.link3}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
