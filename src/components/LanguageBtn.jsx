import React from 'react'
import { GrLanguage } from "react-icons/gr";
import "../assets/styles/LanguageBtn.css"

function LanguageBtn() {
  return (
    <div className={`languageBtn-container`}>
      <ul className={`languageBtn-list`}>
        <GrLanguage className={`icon`}/>
        {/* <div>Aqui va la opciones de ingles o español</div> */}
        <div>
          <ul>
            <div>
              <p>en</p>
            </div>
            <div>
              <p>es</p>
            </div>
          </ul>
        </div>
      </ul>
    </div>
  )
}

export default LanguageBtn