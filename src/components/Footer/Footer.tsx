import React from "react";
import Chak from "../../assets/char.png";

import "./footer.scss";

interface FooterProps {
  value: string | undefined;
}

const Footer: React.FC<FooterProps> = ({value = 'Feel free to choose a Chuck Norris quote :)'}) => {
  return (
    <div className="ChakWithWindow">
      <div className="window">
        <p className="phrase">{value}</p>
        <img src={Chak} alt={"Chak"}></img>
      </div>
    </div>
  );
};

export default Footer;
