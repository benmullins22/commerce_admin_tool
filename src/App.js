import React from 'react';
import './css/App.css';
import "bootstrap/dist/css/bootstrap.css";
import MainBox from "./components/MainBox";
import logo from "./resources/lifeway-logo.png";

function App() {
  return (
    <div className="top">
      <img className="logo" src={logo} alt="LifeWay Logo"/>
      <div className="App">
        <h1 className="header">Admin Tool</h1>
        <MainBox />
      </div>
    </div>
  );
}

export default App;
