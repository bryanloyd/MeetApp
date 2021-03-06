import React from "react";
import "./App.css";
import CollageComponent from "./components/CollageComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import HeroComponent from "./components/HeroComponent";
import HeroDesktopComponent from "./components/HeroDesktopComponent";
import SmarterComponent from "./components/SmarterComponent";

const App = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <div className="hero1">
        <HeroComponent />
      </div>
      <div className="hero2">
        <HeroDesktopComponent />
      </div>
      <CollageComponent />
      <SmarterComponent />
      <FooterComponent />
    </div>
  );
};

export default App;
