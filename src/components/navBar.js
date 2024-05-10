import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="bg-dark" style={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      WebkitOverflowScrolling: "touch",
      position: "sticky",
      top: "0",
      zIndex: "50"
  }}>
  
      <div
        className="navbarr"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark flex">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              HOME
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    BUSINESS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    ENTERTAINMENT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">
                    GENERAL
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    HEALTH
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    SCIENCE
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    SPORTS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    TECHNOLOGY
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
