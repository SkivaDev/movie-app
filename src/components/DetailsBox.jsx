import React from "react";
import "../assets/styles/DetailsBox.css"
import { useMain } from "../context/main";

function DetailsBox() {
  const {selectedMovie} = useMain();

  function minString(mins) {
    var hour = Math.floor(mins / 60);
    console.log("hour", hour)
    hour = (hour < 10)? '' + hour : hour;
    var minute = Math.floor(((mins/60)-hour)*60);
    console.log("minute", minute)
    minute = (minute < 10)? '0' + minute : minute;
    return hour + 'h' + minute + "m";
  }

  return (
    <div className="DetailsBox">
      <div className="DetailsBox-data">
        <div className="data-stars"><span>★</span>{selectedMovie.vote_average}</div>
        •
        <p className="data-num">{minString(selectedMovie.runtime)}</p>
        •
        <div className="data-category">TRENDING</div>
      </div>
      <div className="DetailsBox-titles">
        <h2 className="data-title">
          {selectedMovie.title}
        </h2>
        <p className="data-synopsis">
          {selectedMovie.overview}
        </p>
        {/**RELEASED: DETAILS*/}
      </div>
      <div className="DetailsBox-buttons">
        <button className="PlayTrailer-button">
          <span>{">"}</span>
          <p>PLAY TRAILER</p>
        </button>
        <button className="GoDatails-button">
          <span>?</span>
          <p>DETAILS</p>
        </button>
      </div>
      {/**CATEGORIES BUTTONS*/}
    </div>
  );
}

export default DetailsBox;
