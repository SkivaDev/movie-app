import React from 'react'
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import "../assets/styles/GenericPreview.css"

function GenericPreview({title, redirec, movies}) {

  console.log(title+" -- ", movies)

  const renderMovies = () => (
    movies.map((movie) => 
    <MovieCard 
      key={movie.id} 
      movie={movie}
    />)
  );


  return (
    <article className='GenericPreview max-center'>
      <div className='GenericPreview-header'>
        <h1 className='header-title'>{title}</h1>
        <Link className='header-link' to={redirec}>SEE ALL</Link>
      </div>
      <div className='GenericPreview-box'>

        <div className={`content-on-left`}></div>
        <div className={`content-on-right`}></div>

        <div className='cards-container'>
          {renderMovies()}
        </div>
      </div>
    </article>
  )
}

export default GenericPreview