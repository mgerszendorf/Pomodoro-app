import React, { useState, useEffect } from "react";
import Info from "./Info";
import Timer from "./Timer";
import TimerResult from "./TimerResults";
import "./TimerResults.css";
import "./Timer.css";
import "./Info.css";
import "./App.css";

const App = (props) => {
  const [button, setButton] = useState(false);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(1500);
  const [donePomodoros, setDonePomodoros] = useState(0);

  function handleClick() {
    setButton(!button);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function conversion() {
    setMinutes(Math.floor(time / 60));
    setSeconds(time % 60);
    donePomodorosFunction();
  }

  function donePomodorosFunction() {
    if (time === 0 && button === true) {
      setButton(false);
      setDonePomodoros(donePomodoros + 1);
      pomodoros();
    }
  }

  function pomodoros() {
    if (donePomodoros === 0 || donePomodoros === 2 || donePomodoros === 4) {
      setTime(300);
      setMinutes(5);
      setSeconds(0);
    }

    if (donePomodoros === 1 || donePomodoros === 3 || donePomodoros === 5) {
      setTime(1500);
      setMinutes(25);
      setSeconds(0);
    }

    if (donePomodoros === 6) {
      setTime(900);
      setMinutes(15);
      setSeconds(0);
    }

    if (donePomodoros === 7) {
      setTime(1500);
      setMinutes(25);
      setSeconds(0);
      setDonePomodoros(0);
    }
  }

  useEffect(() => {
    let secondIntervall = null;
    if (button) {
      secondIntervall = setInterval(conversion, 5);
      return () => clearInterval(secondIntervall);
    }
  }, [button, conversion]);

  useEffect(() => {
    let interval = null;
    if (button) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 5);
    } else if (!button && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [button, time]);

  return (
    <div className="wrapper">
      <Info />
      <Timer
        seconds={seconds}
        minutes={minutes}
        donePomodoros={donePomodoros}
      />
      <TimerResult
        handleClick={handleClick}
        buttonState={button}
        donePomodoros={donePomodoros}
      />
    </div>
  );
};

export default App;
