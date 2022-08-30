import React from "react";
import "./main.scss";
import FixedMenu from "../Fixed/Fixed";
import { Routes, Route } from "react-router-dom";
import Overview from "../../Pages/Overview/Overview";
import Repo from "../../Pages/Repostory/Repostory";
import Project from "../../Pages/Project/Project";
import Pack from "../../Pages/Packages/Packages";
import Stars from "../../Pages/Stars/Stars";
import SideBar from "../SideBarMenu/SideBarMenu";
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
