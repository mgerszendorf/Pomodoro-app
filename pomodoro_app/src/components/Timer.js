import React, { useEffect, useState } from "react";
import TimeResults from "./TimerResults";

const Timer = (props) => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  let flag = 0;

  function tick() {
    if (minutes == 25) setMinutes(24);
    if (seconds == 0) flag = 1;
  }

  // useEffect(() => {
  //   let timerID = setInterval(() => timer(), 1000);
  //   return () => clearInterval(timerID);
  // });

  // function timer() {
  //   setSeconds(seconds - 1);
  // }

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
