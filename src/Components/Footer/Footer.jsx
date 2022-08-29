import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
function Footer() {
  return (
    <>
      <footer className="footer">
        <nav className="footer-nav">
          <Link to="#" className="footer__logo position-relative">
            <i className="fa-brands fa-github"></i>
            <span className="footer__logo-text">
              © {new Date().getFullYear()} GitHub, Inc.
            </span>
          </Link>
          <ul className="footer__list d-flex">
            <li className="footer__item">
              <Link to="#" className="footer__link">
                Terms
              </Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__link">
                Privacy
              </Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__link">
                Security
              </Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__link">
                Status
              </Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__link">
                Docs
              </Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__link">
                Contact GitHub
              </Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__link">
                Pricing
              </Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__link">
                API
              </Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__link">
                Training
              </Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__link">
                Blog
              </Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__link">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
