import React, { Component } from "react";
import { TiInfoLarge } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

class Info extends Component {
  state = {
    class_name: true,
  };

  handleClick = () => {
    this.setState({
      class_name: !this.state.class_name,
    });
  };

  render() {
    const { class_name } = this.state;
    return (
      <div className="info_wrapper">
        <TiInfoLarge className="info_icon" onClick={this.handleClick} />
        <div className={class_name ? "active_info" : "info_area"}>
          <IoClose className="close_btn" onClick={this.handleClick} />
          <h2 className="pomodoro_info_h1">What is the pomodoro technique?</h2>
          <p className="pomodoro_info_text">
            The Pomodoro Technique is a time management system that encourages
            people to work with the time they have—rather than against it. Using
            this method, you break your workday into 25-minute chunks separated
            by five-minute breaks. These intervals are referred to as pomodoros.
            After about four pomodoros, you take a longer break 15 minutes.
          </p>
        </div>
      </div>
    );
  }
}

export default Info;
