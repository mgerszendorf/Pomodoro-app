import React, { Component } from "react";

import { GiTomato } from "react-icons/gi";
import { CgPlayButtonO } from "react-icons/cg";
import { CgPlayPauseO } from "react-icons/cg";

class TimerResults extends Component {
  state = {
    button: false,
  };

  handleClick = (props) => {
    this.setState({
      button: !this.state.button,
    });
  };

  render(props) {
    return (
      <div className="timer_result_wrapper">
        <div className="tomato_icons">
          <GiTomato className="tomato_icon" />
          <GiTomato className="tomato_icon" />
          <GiTomato className="tomato_icon" />
          <GiTomato className="tomato_icon" />
        </div>
        <div className="timer_text">
          <p>Focus for 25 minutes</p>
        </div>
        <div className="icons" onClick={this.handleClick}>
          {this.state.button ? (
            <CgPlayPauseO className="pause_icon" />
          ) : (
            <CgPlayButtonO className="play_icon" />
          )}
        </div>
      </div>
    );
  }
}

export default TimerResults;
