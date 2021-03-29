import React, { useEffect, useState } from "react";

const Timer = (props) => {
  return (
    <div className="timer_wrapper">
      <div className="time">
        <p>
          {props.donePomodoros === 0 && "Pomodoro #1"}
          {props.donePomodoros === 1 && "Pomodoro #1 Complete"}
          {props.donePomodoros === 2 && "Pomodoro #2"}
          {props.donePomodoros === 3 && "Pomodoro #2 Complete"}
          {props.donePomodoros === 4 && "Pomodoro #3"}
          {props.donePomodoros === 5 && "Pomodoro #3 Complete"}
          {props.donePomodoros === 6 && "Pomodoro #4"}
          {props.donePomodoros === 7 && "Pomodoro #4 Complete"}
        </p>
        <p className="clock">
          {props.minutes <= 9 ? "0" + props.minutes : props.minutes}:
          {props.seconds <= 9 ? "0" + props.seconds : props.seconds}
        </p>
      </div>
      <div className="progress_bar"></div>
    </div>
  );
};

export default Timer;
