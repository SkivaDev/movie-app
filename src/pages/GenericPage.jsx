import React, { useState } from 'react'
import MoviesContainer from '../components/MoviesContainer'
import "../assets/styles/GenericPage.css"
import { useMain } from '../context/main'
import GenreNav from '../components/GenreNav'
import { useLocation } from 'react-router-dom'

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

    setConfig,
    genericTitle,
  } = useMain();

  const location = useLocation();
  const isCategories = location.pathname === "/categories";

  return (
    <div className={`genericPage`}>
      <div className={`title-container`}>
        <div className={`text-box`}>
          {/* {console.log("status", status)} */}
          <h1 className={`text`}>{genericTitle}</h1>
        </div>
        <div className={`btn-box`}>
          <button className={`button`}>
            <span>i</span>
          </button>
        </div>
      </div>

      {isCategories ? <GenreNav /> : null}
      
      <MoviesContainer />
    </div>
  )
}

export default GenericPage