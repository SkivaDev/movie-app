import React, { useEffect, useState } from 'react'
import { useMain } from '../context/main'
import MovieCard from "./MovieCard";

function MoviesContainer() {
  const {
    getTrendingMovies,
    getPopularMovies,
    getUpcomingMovies,

    getVideoMovie,

    config,
    setConfig,
    movies,
  } = useMain();


//  useEffect(() => {
//     // if (/*condicional para saber la ruta*/ ) {
//     //   setMovies(getPopularMovies());
//     // };

//     setMovies(getPopularMovies());
//   }, [config])
  

  // const renderMovies = () => (
  //   movies.map((movie) => 
  //   <MovieCard 
  //     key={movie.id} 
  //     movie={movie}
  //     selectMovie={selectMovie}
  //   />)
  // );

  // const renderMovies = () => (
  //   movies.map((movie) => 
  //   <h2 
  //     key={movie.id} 
  //     // selectMovie={selectMovie}
  //   >
  //     {movie.title}
  //   </h2>)
  // );

  const renderMovies = () => (
    movies.map((movie) => 
    <MovieCard 
      key={movie.id} 
      movie={movie}
    />)
  );

//  const renderMovies = () => (
//   const movies = getPopularMovies();
//   movies.map((movie) => {
//     <h2>{movie.title}</h2>
//   })
//  )
  

  return (
    <div className={`moviesContainer`}>
      {renderMovies()}
    </div>
  )
}

export default MoviesContainer