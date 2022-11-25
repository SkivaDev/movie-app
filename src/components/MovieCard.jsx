import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../assets/styles/MovieCard.css"
import { useMain } from '../context/main'

function MovieCard({movie}) {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500"
  const {selectMovie} = useMain();
  const navigate = useNavigate();

  const slugifyMovie = (movie) => {
    const titleSlug = movie.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    const id = movie.id
    return id+"-"+titleSlug;
  };

  const movieSlug = slugifyMovie(movie);
  const onCardClick = () => {
    navigate(`/movie/${movieSlug}`);
    selectMovie(movie);
  }
  return (
    <>
      {movie.poster_path
      ? <div className={`movieCard`} onClick={onCardClick}>

          <img className={"movie-cover"} 
          src={`${IMAGE_PATH}${movie.poster_path}`}/>

          <h5 className={"movie-text"}>{movie.title}</h5>

        </div>
      : null
      }
    </>
  )
}

export default MovieCard