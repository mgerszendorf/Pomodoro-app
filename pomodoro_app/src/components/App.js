import React from "react";
import Info from "./Info";
import Timer from "./Timer";
import TimerResult from "./TimerResults";
import "./TimerResults.css";
import "./Timer.css";
import "./Info.css";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Info />
      <Timer />
      <TimerResult />
    </div>
  );
}

export default App;
