import React from "react";
import { BiArrowBack } from "react-icons/bi"
import { useNavigate } from "react-router-dom";
import "../assets/styles/BackBtn.css"

function BackBtn() {

  const navigate = useNavigate();

  const returnBack = () => {
    navigate(-1);
  }

  return (
    <div className={`BackBtn-box`}>
      <button className={`button`} onClick={returnBack}>
        <BiArrowBack className={`button-icon`} />
        <p className={`button-text`}>GO BACK</p>
      </button>
    </div>
  );
}

export default BackBtn;
