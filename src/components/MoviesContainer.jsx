import React, { useEffect, useState } from 'react'
import { useMain } from '../context/main'
import MovieCard from "./MovieCard";
import "../assets/styles/MoviesContainer.css"

function MoviesContainer() {
  const {
    movies,
  } = useMain();


  const renderMovies = () => (
    movies.map((movie) => 
    <MovieCard 
      key={movie.id} 
      movie={movie}
    />)
  );


  

  return (
    <div className={`moviesContainer`}>
      {renderMovies()}
    </div>
  )
}

export default MoviesContainer