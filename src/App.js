import React from "react";
import "./App.scss";
import Main from "./components/Main";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <Nav />
        <Main />
      </div>
      <div className="musicControls">Music Controls</div>
    </div>
  );
}

export default App;
