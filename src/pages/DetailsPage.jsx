import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import GenericPreview from '../components/GenericPreview';
import { useMain } from '../context/main';
import DetailsHero from '../components/DetailsHero';

function DetailsPage() {
  const { movieSlug } = useParams();

  const {
    getSimilarMovies,
    similarMovies,
  } = useMain();

  useEffect(() => {
    const [id, ...etc] = movieSlug.split('=');
    getSimilarMovies(id);
  }, [movieSlug])

  return (
    <div className='DetailsPage'>
      <DetailsHero/>
      <GenericPreview 
      title={"Similar movies"} 
      redirec={"/upcoming"}
      movies={similarMovies}
      />
    </div>
  )
}

export default DetailsPage