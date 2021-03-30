import React, { useState, useEffect } from "react";
import Info from "./Info";
import Timer from "./Timer";
import TimerResult from "./TimerResults";
import "./TimerResults.css";
import "./Timer.css";
import "./Info.css";
import "./App.css";
import { Howl, Howler } from "howler";
import Music from "./music.mp3";

const App = (props) => {
  const [button, setButton] = useState(false);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(1500);
  const [donePomodoros, setDonePomodoros] = useState(0);
  const [progress, setProgress] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [startingProgress, setStartingProgress] = useState(1500);

  function handleClick() {
    setButton(!button);
    if (donePomodoros === 0) {
      setProgress(1);
    }
  }

  // Converting time to minutes and seconds
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function conversion() {
    setMinutes(Math.floor(time / 60));
    setSeconds(time % 60);
    donePomodorosFunction();
  }

  useEffect(() => {
    let secondIntervall = null;
    if (button) {
      secondIntervall = setInterval(conversion, 1000);
      return () => clearInterval(secondIntervall);
    }
  }, [button, conversion]);

  // Timer
  function donePomodorosFunction() {
    if (time === 0 && button === true) {
      setButton(false);
      setDonePomodoros(donePomodoros + 1);
      setProgress(2);
      pomodoros();
    }
  }

  function pomodoros() {
    if (donePomodoros === 0 || donePomodoros === 2 || donePomodoros === 4) {
      setTime(300);
      setStartingProgress(300);
      setMinutes(5);
      setSeconds(0);
      setProgress(3);
    }

    if (donePomodoros === 1 || donePomodoros === 3 || donePomodoros === 5) {
      setTime(1500);
      setStartingProgress(1500);
      setMinutes(25);
      setSeconds(0);
      setProgress(4);
    }

    if (donePomodoros === 6) {
      setTime(900);
      setStartingProgress(900);
      setMinutes(15);
      setSeconds(0);
      setProgress(5);
    }

    if (donePomodoros === 7) {
      setTime(1500);
      setStartingProgress(1500);
      setMinutes(25);
      setSeconds(0);
      setDonePomodoros(0);
    }
  }

  useEffect(() => {
    let interval = null;
    if (button) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (!button && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [button, time]);

  // Alarm
  function SoundPlay(src) {
    const sound = new Howl({
      src: [Music],
    });
    sound.play();
    console.log("sound");
  }

  if (time === 0) {
    SoundPlay();
  }

  // Calculation of percentages - progress bar
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function progressBar() {
    if (button) {
      setPercentage((time / startingProgress) * 100);
    }
  }

  useEffect(() => {
    let progressIntervall = null;
    if (button) {
      progressIntervall = setInterval(progressBar, 1000);
      return () => clearInterval(progressIntervall);
    }
  }, [button, progressBar]);

  return (
    <div className="wrapper">
      <Info />
      <Timer
        seconds={seconds}
        minutes={minutes}
        donePomodoros={donePomodoros}
        progress={progress}
        percentage={percentage}
        time={time}
        startingProgress={startingProgress}
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
