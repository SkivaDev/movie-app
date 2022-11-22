import React from 'react'
import { useMain } from '../context/main'
import "../assets/styles/GenreNav.css"

function GenreNav() {
  const {genres} = useMain();

  const renderGenres = () => (
    genres.map((genre) => 
    <button
      className='GenreNav-button'
      type='button'
      key={genre.id} 
    >
      {genre.name}
    </button> 
    )
  )
  return (
    <div className={`GenreNav-container`}>
      {renderGenres()}
      {console.log(genres)}
    </div>
  )
}

export default GenreNav