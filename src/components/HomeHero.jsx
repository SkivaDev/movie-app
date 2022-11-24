import React from 'react'
import DetailsBox from './DetailsBox'
import "../assets/styles/HomeHero.css"

function HomeHero() {
  return (
    <div className="HomeHero">
      <div className="HomeHero-container max-center">
        <div className='HomeHero-img'></div>
        <DetailsBox />
      </div>
    </div>
  )
}

export default HomeHero