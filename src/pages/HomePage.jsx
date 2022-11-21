import React, { useEffect } from 'react'
import { useMain } from '../context/main'

function HomePage() {

  const {
    getTrendingMovies,
    getPopularMovies,
    getUpcomingMovies,

    getVideoMovie,

    config,
    setConfig,
  } = useMain();

  useEffect(() => {
    getTrendingMovies();
    getPopularMovies();
    getUpcomingMovies();
    getVideoMovie(760161);
  }, [config]);

  const changeLanguage = () => {
    const newConfig = {
      ...config,
      language: "en"
    };
    setConfig(newConfig);
  }
  return (
    <div>
      <h1>HomePage :3</h1>
      <button onClick={changeLanguage}>INGLES</button>
    </div>
  )
}

export default HomePage