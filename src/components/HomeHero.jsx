import React from 'react'
import DetailsBox from './DetailsBox'
import "../assets/styles/HomeHero.css"
import { useMain } from '../context/main'

function HomeHero() {

  const {selectedMovie} = useMain();

  const IMAGE_PATH = "https://image.tmdb.org/t/p/original"


  console.log("movieRandom", selectedMovie);
  console.log("rutaIMAGEN", `${IMAGE_PATH}${selectedMovie["backdrop_path"]}`);

  
  return (
    <div className="HomeHero">
      <div className="HomeHero-container max-center">
        <div 
          className='HomeHero-img'
          style={{
            backgroundImage: `url(${IMAGE_PATH}${selectedMovie["backdrop_path"]})`
          }}
        >
        </div>
        <DetailsBox />
      </div>
    </div>
  )
}

export default HomeHero