import React from "react";
import "./App.css";
import CollageComponent from "./components/CollageComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import HeroComponent from "./components/HeroComponent";
import SmarterComponent from "./components/SmarterComponent";

const App = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <HeroComponent />
      <CollageComponent />
      <SmarterComponent />
      <FooterComponent />
    </div>
  );
};

export default App;
