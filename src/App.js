import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello there!</p>
      </header>
      <p className="App-intro">I was changed on the Feature branch</p>
    </div>
  );
}

export default App;
