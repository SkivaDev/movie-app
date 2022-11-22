import React, { useEffect } from 'react'
import { useMain } from '../context/main'

function HomePage() {

  const {
    getTrendingMovies,
    getPopularMovies,
    getUpcomingMovies,

    getVideoMovie,

    setLanguageES,
  } = useMain();

  // useEffect(() => {
  //   getTrendingMovies();
  //   getPopularMovies();
  //   getUpcomingMovies();
  //   getVideoMovie(760161);
  // }, [config]);

  return (
    <div>
      <h1>HomePage :3</h1>
      <button onClick={() => setLanguageES(false)}>INGLES</button>
      <button onClick={() => setLanguageES(true)}>SPANISH</button>
    </div>
  )
}

export default HomePage