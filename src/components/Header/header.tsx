import React from "react";
import logo from "../../assets/logo.png";
import "./header.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <div className="chuckWithText">
        <div className="iconChuck">
          <img src={logo} alt={"Chuck"}></img>
        </div>
        <div className="ChuckText">
          <span>Chuck Norris</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
