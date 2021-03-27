import React, { Component } from "react";

const Timer = (props) => {
  const minutes = "10";
  const seconds = "20";

  return (
    <div className="timer_wrapper">
      <div className="time">
        <p>Pomodoro #2</p>
        <p className="clock">
          {minutes <= 9 ? "0" + minutes : minutes}:
          {seconds <= 9 ? "0" + seconds : seconds}
        </p>
      </div>
      <div className="progress_bar"></div>
    </div>
  );
};

export default Timer;
