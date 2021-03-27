import React, { Component } from "react";
import Info from "./Info";
import Timer from "./Timer";
import TimerResult from "./TimerResults";
import "./TimerResults.css";
import "./Timer.css";
import "./Info.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Info />
        <Timer />
        <TimerResult />
      </div>
    );
  }
}

export default App;
