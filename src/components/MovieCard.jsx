import React from 'react'
import "../assets/styles/MovieCard.css"

function MovieCard({movie}) {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500"

  return (
    <div className={`movieCard`}>
      {movie.poster_path 
      ? <>
        <img className={"movie-cover"} src={`${IMAGE_PATH}${movie.poster_path}`}/>
        <h5 className={"movie-text"}>{movie.title}</h5>
        </>
      : null
      }
      
    </div>
  )
}

export default MovieCard