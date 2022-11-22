import React from 'react'
import "../assets/styles/MovieCard.css"

function MovieCard({movie}) {
  return (
    <div className={`movieCard`}>
      <h2>{movie.title}</h2>
    </div>
  )
}

export default MovieCard