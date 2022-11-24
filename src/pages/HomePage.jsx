import React, { useEffect } from 'react'
import HomeHero from '../components/HomeHero';
import { useMain } from '../context/main'
import "../assets/styles/HomePage.css"

function HomePage() {

  const {
    setLanguageES,
  } = useMain();


  return (
    <div className='HomePage'>
      <HomeHero />
      <h1>HomePage :3</h1>
      <button onClick={() => setLanguageES(false)}>INGLES</button>
      <button onClick={() => setLanguageES(true)}>SPANISH</button>
    </div>
  )
}

export default HomePage