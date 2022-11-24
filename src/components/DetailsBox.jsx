import React from "react";
import "../assets/styles/DetailsBox.css"

function DetailsBox() {
  return (
    <div className="DetailsBox">
      <div className="DetailsBox-data">
        <div className="data-stars"><span>★</span> 7.5</div>
        •
        <p className="data-num">1h 55m</p>
        •
        <div className="data-category">TRENDING</div>
      </div>
      <div className="DetailsBox-titles">
        <h2 className="data-title">
          Doctor Strange in the Multiverse of Madness
        </h2>
        <p className="data-synopsis">
          Doctor Strange, with the help of mystical allies both old and new,
          traverses the mind-bending and dangerous alternate realities of the
          Multiverse to confront a mysterious new adversary.
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
