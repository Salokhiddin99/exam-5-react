import React, { useState, useEffect, useContext, useRef } from "react";
import "./repostory.scss";
import dataContext from "../../Context/DataContext";
function Repostory() {

  const data = useContext(dataContext);

  const [repos, setRepos] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`${data.repos_url}?page=${page}&per_page=30`)
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, [page]);

  const number = [];

  const btnPrev = useRef();

  const btnNext = useRef();

  let x = Math.ceil(data.public_repos) / 30;

  return (
    <>
      <section className="repo pt-3">
        <div className="repo-search">
          <form className="d-flex justify-content-between repo__form w-100">
            <button className=" btn btn-success  ms-2 btn-hidden">
              <i className="fa-solid fa-book-bookmark me-2"></i>New
            </button>
            <input
              type="text"
              className="repo-search__input form-control bg-dark w-50"
            />
            <div className="repo-actions d-flex ms-md-3">
              <div className="dropdown">
                <button
                  className="btn btn-dark repo__btn  dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Type
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Select type
                    </a>
                  </li>
                  <hr className="repo__line" />
                  <li>
                    <a className="dropdown-item" href="#">
                      All
                    </a>
                  </li>
                  <hr className="repo__line" />
                  <li>
                    <a className="dropdown-item" href="#">
                      Public
                    </a>
                  </li>
                  <hr className="repo__line" />
                  <li>
                    <a className="dropdown-item" href="#">
                      Private
                    </a>
                  </li>
                  <hr className="repo__line" />
                  <li>
                    <a className="dropdown-item" href="#">
                      Sources
                    </a>
                  </li>
                  <hr className="repo__line" />
                  <li>
                    <a className="dropdown-item" href="#">
                      Forks
                    </a>
                  </li>
                  <hr className="repo__line" />
                  <li>
                    <a className="dropdown-item" href="#">
                      Archived
                    </a>
                  </li>
                  <hr className="repo__line" />
                  <li>
                    <a className="dropdown-item" href="#">
                      Mirrors
                    </a>
                  </li>
                  <hr className="repo__line" />
                  <li>
                    <a className="dropdown-item" href="#">
                      Templates
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown mx-2">
                <button
                  className="btn btn-dark repo__btn  dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Language
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      All
                    </a>
                  </li>
                  <hr className="repo__line" />
                  <li>
                    <a className="dropdown-item" href="#">
                      Javascript
                    </a>
                  </li>
                  <hr className="repo__line" />
                  <li>
                    <a className="dropdown-item" href="#">
                      HTML
                    </a>
                  </li>
                  <hr className="repo__line" />
                  <li>
                    <a className="dropdown-item" href="#">
                      CSS
                    </a>
                  </li>
                  <hr className="repo__line" />
                  <li>
                    <a className="dropdown-item" href="#">
                      SCSS
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-dark repo__btn  dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Select order
                    </a>
                  </li>
                  <hr className="repo__line" />
                  <li>
                    <a className="dropdown-item" href="#">
                      Last updated
                    </a>
                  </li>
                  <hr className="repo__line" />
                  <li>
                    <a className="dropdown-item" href="#">
                      Name
                    </a>
                  </li>
                  <hr className="repo__line" />
                  <li>
                    <a className="dropdown-item" href="#">
                      Stars
                    </a>
                  </li>
                </ul>
              </div>
              <button className=" btn btn-success repo__new-btn ms-2">
                <i className="fa-solid fa-book-bookmark me-2"></i>New
              </button>
            </div>
          </form>
        </div>
        <hr />
        <ul className="repo-results">
          {repos.length > 0 ? (
            repos.map((item, index) => (
              <div key={item.id}>
                <li className="repo-result__item d-flex justify-content-between py-2">
                  <div>
                    <a
                      href={item.html_url}
                      target="_blank"
                      className="repo-result__link"
                    >
                      {item.name}
                    </a>
                    <span className="repo-result__action px-2 ms-2 py-1">
                      {item.visibility}
                    </span>
                    <p className="repo-result__lang d-flex align-items-center mt-2">
                      <span
                        className={`repo-result__circle ${
                          item.language === "HTML"
                            ? ""
                            : item.language === "CSS"
                            ? "violet"
                            : item.language === "SCSS"
                            ? "darkviolet"
                            : "gold"
                        }`}
                      ></span>
                      {item.language}
                    </p>
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-star repo-result__star"></i>
                      <span className="repo-result__star-text">Star</span>
                    </button>
                    <ul
                      className="dropdown-menu dropdown-menu-light"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <li>
                        <a className="dropdown-item active" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <hr className="repo-result__hr" />
              </div>
            ))
          ) : (
            <p>Error</p>
          )}
        </ul>
        <div className="repo-navigate d-flex justify-content-md-center mt-4">
          <span
            className={`prev ${page === 1 ? "prev-disabled" : ""}`}
            ref={btnPrev}
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
              } else if (page === 1) {
                btnPrev.current.disabled = true;
              }
            }}
          >
            <i className="fa-solid fa-chevron-left me-2"></i>
            Previous
          </span>
          <span
            className={`next ms-4 ${page > x ? "prev-disabled" : ""}`}
            ref={btnNext}
            onClick={() => {
              if (page <= x) {
                setPage(page + 1);
              } else {
                btnPrev.current.disabled = true;
              }
            }}
          >
            Next
            <i className="fa-solid fa-chevron-right ms-2"></i>
          </span>
        </div>
      </section>
    </>
  );
}

export default Repostory;
