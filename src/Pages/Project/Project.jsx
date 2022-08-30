import React from "react";
import "./project.scss";
function Project() {
  return (
    <>
      <section className="projects">
        <form className="projects-top d-flex justify-content-between mt-3">
          <input type="text" className="projects__input form-control bg-dark" />
          <button className="btn-success btn btn-projects ms-2">
            New project
          </button>
        </form>
        <div className="projects-bottom card mt-2">
          <div className="card-header d-flex align-items-center">
            <i className="bi bi-columns"></i>
            <span className="projects-num ms-2">0</span>
            <span className="projects-text mx-2">Open</span>
            <i class="bi bi-archive"></i>
            <span className="projects-num mx-2">0</span>
            <span className="projects-text">Closed</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
