import React, { useContext, useEffect, useState } from "react";
import dataContext from "../../Context/DataContext";
import "./overview.scss";
function Overview() {
  const data = useContext(dataContext);
  const [repos, setRepos] = useState([]);
  const [overview, setOverview] = useState(false);
  const [month, setMonth] = useState("");
  const monthes = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const findMonth = () => {
    let x = monthes.find((item, index) => index === new Date().getMonth());
    setMonth(x);
  };
  useEffect(() => {
    fetch(`${data.repos_url}?per_page=10`)
      .then((res) => res.json())
      .then((ans) => setRepos(ans));
    findMonth();
  }, []);
  return (
    <>
      <div className="overview">
        <ul className="overview-top">
          {repos.length > 0 ? (
            repos.map((item) => (
              <li className="card p-4" key={item.id}>
                <a href={item.html_url} target="_blank">
                  <i className="fa-solid fa-book-bookmark card__icon me-2"></i>
                  {item.name}
                  <span className="card__action border border-1 px-2 py-1 ms-2">
                    {item.visibility}
                  </span>
                </a>
                <p className="card__lang d-flex align-items-center">
                  <span
                    className={`card__circle ${
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
              </li>
            ))
          ) : (
            <p>error</p>
          )}
        </ul>
        <p className="overview-commites__title">Contribution activity</p>
        <div className="d-flex align-items-center overview__commit-date__wrapper">
          <span className="overview-commit__date">
            {month}
            <span className="overview__year">{new Date().getFullYear()}</span>
          </span>
          <div className="line-date"></div>
        </div>
        <div className="overview__commits pt-1">
          <span className="overview-circle">
            <i className="bi bi-journal-arrow-up"></i>
          </span>
          <p className="overview__commits-title d-flex justify-content-between">
            Created commits
            <i
              className="bi bi-arrows-expand overview-arrow"
              onClick={() => setOverview(!overview)}
            ></i>
          </p>
          <ul
            className={`overview__commits-list ${
              overview ? "overview__commits-list-active" : ""
            }`}
          >
            {repos.length > 0 ? (
              repos.map((item, index) => (
                <li className="overview__commits-item" key={index}>
                  <a href={item.html_url} className="overview__commits-link">
                    {item.owner.login}/{item.name}
                  </a>
                </li>
              ))
            ) : (
              <p>Error</p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Overview;
