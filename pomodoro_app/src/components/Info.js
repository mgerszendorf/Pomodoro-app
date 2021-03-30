import React, { useState } from "react";
import { TiInfoLarge } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Info = () => {
  const [activeInfo, setActiveInfo] = useState(true);

  function handleClick() {
    setActiveInfo(!activeInfo);
  }

  return (
    <div className="info_wrapper">
      <TiInfoLarge className="info_icon" onClick={handleClick} />
      <div className={activeInfo ? "active_info" : "info_area"}>
        <IoClose className="close_btn" onClick={handleClick} />
        <h2 className="pomodoro_info_h1">What is the pomodoro technique?</h2>
        <p className="pomodoro_info_text">
          The Pomodoro Technique is a time management system that encourages
          people to work with the time they have-rather than against it. Using
          this method, you break your workday into 25-minute chunks separated by
          five-minute breaks. These intervals are referred to as pomodoros.
          After about four pomodoros, you take a longer break 15 minutes.
        </p>
      </div>
    </div>
  );
};

export default Info;
