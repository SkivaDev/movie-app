import React, { useState } from 'react'
import MoviesContainer from '../components/MoviesContainer'
import "../assets/styles/GenericPage.css"
import { useMain } from '../context/main'
import GenreNav from '../components/GenreNav'
import { useLocation, useParams } from 'react-router-dom'

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
  // for SearchPage
  const { searchMovie } = useParams();
  console.log("slug2", searchMovie);

  const isCategories = location.pathname === "/categories";

  return (
    <div className={`genericPage`}>
      <div className={`title-container`}>
        <div className={`text-box`}>
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