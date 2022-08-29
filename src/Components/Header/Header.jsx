import React from "react";
import Navbar from "../Navbar/Navbar";
function Header({ setUserName, userData, setOpen }) {
  return (
    <>
      <header className="header bg-dark">
        <Navbar
          setUserName={setUserName}
          userData={userData}
          setOpen={setOpen}
        />
      </header>
    </>
  );
}

export default Header;
