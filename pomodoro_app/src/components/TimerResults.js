import React from "react";

import { GiTomato } from "react-icons/gi";
import { CgPlayButtonO } from "react-icons/cg";
import { CgPlayPauseO } from "react-icons/cg";

const TimerResults = (props) => {
  const style = {
    color: "#DF181A",
  };

  return (
    <div className="timer_result_wrapper">
      <div className="tomato_icons">
        <GiTomato
          className="tomato_icon"
          style={props.donePomodoros >= 1 ? style : null}
        />
        <GiTomato
          className="tomato_icon"
          style={props.donePomodoros >= 3 ? style : null}
        />
        <GiTomato
          className="tomato_icon"
          style={props.donePomodoros >= 5 ? style : null}
        />
        <GiTomato
          className="tomato_icon"
          style={props.donePomodoros >= 7 ? style : null}
        />
      </div>
      <div className="timer_text">
        <p>
          {props.donePomodoros === 0 && "Focus for 25 minutes"}
          {props.donePomodoros === 1 && "Take a short break"}
          {props.donePomodoros === 2 && "Focus for 25 minutes"}
          {props.donePomodoros === 3 && "Take a short break"}
          {props.donePomodoros === 4 && "Focus for 25 minutes"}
          {props.donePomodoros === 5 && "Take a short break"}
          {props.donePomodoros === 6 && "Focus for 25 minutes"}
          {props.donePomodoros === 7 && "Take a long break"}
        </p>
      </div>
      <div className="icons" onClick={props.handleClick}>
        {props.buttonState ? (
          <CgPlayPauseO className="pause_icon" />
        ) : (
          <CgPlayButtonO className="play_icon" />
        )}
      </div>
    </div>
  );
};

export default TimerResults;
