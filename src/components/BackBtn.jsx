import React from "react";
import { BiArrowBack } from "react-icons/bi"
import "../assets/styles/BackBtn.css"

function BackBtn() {
  return (
    <div className={`BackBtn-box`}>
      <button className={`button`}>
        <BiArrowBack className={`button-icon`} />
        <p className={`button-text`}>GO BACK</p>
      </button>
    </div>
  );
}

export default BackBtn;
