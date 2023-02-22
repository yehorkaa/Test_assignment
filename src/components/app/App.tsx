import React from "react";
import Header from "../Header/header";
import Categories from "../Categories/Categories";
import Buttons from "../Buttons/Buttons";
import "./App.scss";

const App: React.FC = () => {
  return (
    <section className="chuckSection">
      <div className="container">
        <Header />
        <div className="main">
          <Categories />
          <Buttons />
        </div>
      
      </div>
    </section>
  );
};

export default App;
