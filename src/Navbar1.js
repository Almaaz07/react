import React from "react";
import { Link } from "react-router-dom";



export default function Navbar1(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.changeCol} `}
      >
        <div className="container-fluid" >
          <a className="navbar-brand" href="/">
            <strong>{props.title}</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  contact us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Test">
                  Test
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link disabled" to = "/contactus" >
                contact us

                </Link>
              </li> */}
            </ul>
            <div className="d-flex" role="search  mx-5">
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success " type="submit">
                Search
              </button> */}
            {/* <button className="btn btn-danger" onClick={props.changeCol}>click to apply red theme</button> */}

            </div>
            <div className={`form-check form-switch text-${props.Mode === "light" ? "dark":"light"}`}>
              <input
                className="form-check-input mx-2" onClick={props.enable}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label " htmlFor="flexSwitchCheckDefault ">
              enable dark mode
              
              </label>
            </div>
          </div>
        </div>
        
      </nav>
      <hr />
    </>
  );
}

// <div>
//    de}`<nav  classNameName={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}>
//     {/* <img src= "./assets/lo" /> */}
//     <ul>
//       <li><a href="/">uppercase</a></li>
//       <li><a href="/">Home</a></li>
//       <li><a href="about1.html">About</a></li>
//       <li><a href="/">Service</a></li>
//        <li><a href="/">Portfolio</a></li>
//       <li><a href="skill1.html">Skills</a></li>

//     </ul>
//     <a href="projects.html" classNameName="btn">Projects</a>
//   </nav>

// </div>
