import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import get from "../../API/GET/Get";
import "./navbar.scss";
function Navbar({ setUserName, userData, setOpen }) {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("");
  const userDataConst = async () => {
    const user = await get.getUser("Salokhiddin99");
    const ans = user.data;
    setData(ans);
  };
  const form = (e) => {
    e.preventDefault();
    setUserName(e.target[0].value);
  };
  useEffect(() => {
    userDataConst();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <nav className="nav pt-3 w-100">
          <i
            className="fa-solid fa-bars text-light me-auto"
            onClick={() => setToggle(!toggle)}
          ></i>
          <NavLink to="/" className="navbar-brand bg-white me-md-3" href="#">
            <i className="fa-brands fa-github text-bg-dark"></i>
          </NavLink>
          <ul className="w-75 nav__list">
            <form className="nav__form bg-dark" onSubmit={form}>
              <label htmlFor="search" className="nav__label w-100">
                <input
                  type="text"
                  className="form-control nav__input text-light"
                  id="search"
                  placeholder="Search"
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </form>
            <hr className="line text-light" />
            <li className="nav__item hidden">
              <a href="#" className="text-light nav__link">
                Dashboard
              </a>
            </li>
            <hr className="line text-light" />
            <li className="nav__item">
              <a href="#" className="text-light nav__link">
                Pull <span className="hide">request</span>
              </a>
            </li>
            <hr className="line text-light" />
            <li className="nav__item">
              <a href="#" className="text-light nav__link">
                Issues
              </a>
            </li>
            <hr className="line text-light" />
            <li className="nav__item hidden">
              <a href="#" className="text-light nav__link">
                Codespaces
              </a>
            </li>
            <hr className="line text-light" />
            <li className="nav__item">
              <a href="#" className="text-light nav__link">
                Marketplace
              </a>
            </li>
            <hr className="line text-light" />
            <li className="nav__item">
              <a href="#" className="text-light nav__link">
                Explore
              </a>
            </li>
            <hr className="line text-light" />
            <li className="nav__item  hidden">
              <a href="#" className="text-light nav__link">
                Sponsor
              </a>
            </li>
            <hr className="line text-light" />
            <li className="nav__item  hidden">
              <a href="#" className="text-light nav__link">
                Settings
              </a>
            </li>
            <hr className="line text-light" />
            <li className="nav__item  hidden">
              <a href="#" className="text-light nav__link">
                <img
                  src={data.avatar_url}
                  alt=""
                  className="nav__user-avatar me-2"
                />
                <span>{data.login}</span>
              </a>
            </li>
            <hr className="line text-light" />
            <li className="nav__item  hidden">
              <a href="#" className="text-light nav__link">
                <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>
                <span onClick={() => setOpen(false)}>Sign out</span>
              </a>
            </li>
          </ul>
          <div className="nav__actions d-flex">
            <a href="#" className="text-light">
              <i className="bi bi-bell"></i>
            </a>
            <div className="dropdown-wrapper">
              <a
                className="dropdown-toggle text-light"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-plus text-light"></i>
              </a>

              <ul
                className="dropdown-menu nav__dropdown"
                aria-labelledby="dropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    New repository
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Import repository
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    New gist
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    New organization
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    New project
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown-wrapper">
              <a
                className="dropdown-toggle text-light"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={data.avatar_url}
                  alt=""
                  className="nav__user-avatar"
                />
              </a>

              <ul
                className="dropdown-menu nav__dropdown nav__dropdown2"
                aria-labelledby="dropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Signed in as <b>{data.login}</b>
                  </a>
                  <hr />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Your profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Your repositories
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Your codespaces
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Your projects
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Your stars
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Your gists
                  </a>
                  <hr />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Upgrade
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Feature preview
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Help
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                  <hr />
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setOpen(false)}
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <ul
          className={`w-75 bg-dark ${
            toggle ? "nav__list-active" : "nav__list-hidden"
          }`}
        >
          <form className="nav__form ">
            <label htmlFor="search" className="nav__label w-100">
              <input
                type="text"
                className="form-control nav__input text-light"
                id="search"
                placeholder="Search"
              />
            </label>
          </form>
          <hr className="line text-light" />
          <li className="nav__item hidden">
            <a href="#" className="text-light nav__link">
              Dashboard
            </a>
          </li>
          <hr className="line text-light" />
          <li className="nav__item">
            <a href="#" className="text-light nav__link">
              Pull <span className="hide">request</span>
            </a>
          </li>
          <hr className="line text-light" />
          <li className="nav__item">
            <a href="#" className="text-light nav__link">
              Issues
            </a>
          </li>
          <hr className="line text-light" />
          <li className="nav__item hidden">
            <a href="#" className="text-light nav__link">
              Codespaces
            </a>
          </li>
          <hr className="line text-light" />
          <li className="nav__item">
            <a href="#" className="text-light nav__link">
              Marketplace
            </a>
          </li>
          <hr className="line text-light" />
          <li className="nav__item">
            <a href="#" className="text-light nav__link">
              Explore
            </a>
          </li>
          <hr className="line text-light" />
          <li className="nav__item  hidden">
            <a href="#" className="text-light nav__link">
              Sponsor
            </a>
          </li>
          <hr className="line text-light" />
          <li className="nav__item  hidden">
            <a href="#" className="text-light nav__link">
              Settings
            </a>
          </li>
          <hr className="line text-light" />
          <li className="nav__item  hidden">
            <a href="#" className="text-light nav__link">
              <img
                src={data.avatar_url}
                alt=""
                className="nav__user-avatar me-2"
              />
              <span>{data.login}</span>
            </a>
          </li>
          <hr className="line text-light" />
          <li className="nav__item  hidden">
            <a href="#" className="text-light nav__link">
              <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>
              <span onClick={() => setOpen(false)}>Sign out</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
