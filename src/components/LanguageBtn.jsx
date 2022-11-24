import React, { useState } from 'react'
import "../assets/styles/LanguageBtn.css"
import { useMain } from '../context/main';

function LanguageBtn() {

  const {
    config,
    setLanguageES,
  } = useMain();

  const isLanguageEs = config.languageES;
  const changeLanguage = (event) => {
    console.log("isEspañolActual ", isLanguageEs);
    setLanguageES(!config.languageES);
    console.log("SE HIZO CLICK")
  }
  return (
    <div className={`languageBtn-container`}>
      <div className="languageBtn-switch">
        <input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox" onClick={changeLanguage}/>
        <label htmlFor='language-toggle'></label>
        <span className={`${!isLanguageEs ? "on" : "off"}`} >EN</span>
        <span className={`${isLanguageEs ? "on" : "off"}`} >ES</span>
  	  </div>
    </div>
  )
}

/**  <span className="on">EN</span>
        <span className="off">ES</span>*/
export default LanguageBtn