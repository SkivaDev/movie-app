import React from 'react'
import { useMain } from '../context/main';
import DetailsBox from './DetailsBox';

function DetailsHero() {
  const {selectedMovie} = useMain();

  const IMAGE_PATH = "https://image.tmdb.org/t/p/original"


  return (
    <div className="DetailsHero">
      <div className="DetailsHero-container max-center">
        <div
          className='DetailsHero-img'
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

export default DetailsHero