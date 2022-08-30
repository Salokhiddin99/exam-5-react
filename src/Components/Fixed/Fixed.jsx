import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import get from "../../API/GET/Get";
import dataContext from "../../Context/DataContext";
import "./fixed.scss";
function Fixed({ className }) {
  const fullData = useContext(dataContext);
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setStickyNav(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);
  return (
    <>
      <nav
        className={`pt-4 fixed ${className}  ${
          stickyNav ? "fixed-active bg-white" : ""
        }`}
      >
        <ul className="fixed__list d-flex align-items-center justify-content-md-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `d-flex align-items-center fixed__link ${
                  isActive ? "fixed__link-active" : ""
                }`
              }
            >
              <i className="bi bi-book"></i>
              <span className="fixed__link-text ms-2">Overview</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="repo"
              className={({ isActive }) =>
                `d-flex align-items-center fixed__link ${
                  isActive ? "fixed__link-active" : ""
                }`
              }
            >
              <i className="fa-solid fa-book-bookmark"></i>
              <span className="fixed__link-text ms-2">Repositories</span>
              <span className="circle bg-light">{fullData.public_repos}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="project"
              className={({ isActive }) =>
                `d-flex align-items-center fixed__link ${
                  isActive ? "fixed__link-active" : ""
                }`
              }
            >
              <i className="bi bi-columns"></i>
              <span className="fixed__link-text ms-2">Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="pack"
              className={({ isActive }) =>
                `d-flex align-items-center changiable fixed__link ${
                  isActive ? "fixed__link-active" : ""
                }`
              }
            >
              <i className="bi bi-box"></i>
              <span className="fixed__link-text ms-2">Packages</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="star"
              className={({ isActive }) =>
                `d-flex align-items-center changiable fixed__link ${
                  isActive ? "fixed__link-active" : ""
                }`
              }
            >
              <i className="bi bi-star"></i>
              <span className="fixed__link-text">Stars</span>
            </NavLink>
          </li>
          <div className="dropdown hidden__drop">
            <a
              className=" dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ...
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <NavLink
                  to="pack"
                  className={({ isActive }) =>
                    `fixed__link  ${isActive ? "fixed__link-active" : ""}`
                  }
                >
                  <i className="bi bi-box"></i>
                  <span className="fixed__link-text ms-2">Packages</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="star"
                  className={({ isActive }) =>
                    ` fixed__link ${isActive ? "fixed__link-active" : ""}`
                  }
                >
                  <i className="bi bi-star"></i>
                  <span className="fixed__link-text ms-2">Stars</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Fixed;
