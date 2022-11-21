import React from 'react'
import MoviesContainer from '../components/MoviesContainer'
import "../assets/styles/GenericPage.css"
import { useMain } from '../context/main'

const configuration = {
  language: "es",
  kindOfPage: "trending",
  
}

function GenericPage() {

  const {
    getTrendingMovies,
    getPopularMovies,
    getUpcomingMovies,

    getVideoMovie,

    config,
    setConfig,
  } = useMain();

  const status = config;
  

  return (
    <div className={`genericPage`}>
      <div className={`title-container`}>
        <div className={`text-box`}>
          {console.log("status", status)}
          <h1 className={`text`}>{status.title}</h1>
        </div>
        <div className={`btn-box`}>
          <button className={`button`}>
            <span>i</span>
          </button>
        </div>
      </div>

      {/* <categoriesComponent> */}

      <MoviesContainer />
    </div>
  )
}

export default GenericPage