import React from "react";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <div className="logoContainer">
        <img src="images/logo-desktop.svg" alt="logo" />
      </div>
      {/*<button className="btnHeader" type="button">
        {" "}
        MODO DARK
      </button>*/}
    </header>
  );
}

export default Header;
