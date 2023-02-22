import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png"
import "./header.scss";
const Header = () => {
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        setAvatar(data.icon_url);
      });
  }, []);

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
