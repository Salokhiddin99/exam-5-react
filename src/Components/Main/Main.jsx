import React from "react";
import "./main.scss";
import FixedMenu from "../FixedMenu/FixedMenu";
import { Routes, Route } from "react-router-dom";
import Overview from "../../Pages/Overview/Overview";
import Repo from "../../Pages/Repos/Repo";
import Project from "../../Pages/Project/Project";
import Pack from "../../Pages/Packages/Pack";
import Stars from "../../Pages/Stars/Stars";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";
function Main() {
  return (
    <>
      <div className="main">
        <FixedMenu />
        <div className="container d-flex flex-column flex-md-row">
          <SideBar />
          <Routes>
            <Route index element={<Overview />} />
            <Route path={"repo"} element={<Repo />} />
            <Route path={"project"} element={<Project />} />
            <Route path={"pack"} element={<Pack />} />
            <Route path={"star"} element={<Stars />} />
          </Routes>
        </div>
        <div className="container">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Main;
