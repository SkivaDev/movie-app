import React, { useEffect } from 'react'
import { useMain } from '../context/main'

function HomePage() {

  const {
    getTrendingMovies,
    getPopularMovies,
    getUpcomingMovies,

    getVideoMovie,
  } = useMain();

  useEffect(() => {
    getTrendingMovies();
    getPopularMovies();
    getUpcomingMovies();
    getVideoMovie(436270);
  }, []);

  return (
    <div>HomePage :3</div>
  )
}

export default HomePage