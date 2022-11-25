import React, { useEffect } from 'react'
import HomeHero from '../components/HomeHero';
import { useMain } from '../context/main'
import "../assets/styles/HomePage.css"
import GenericPreview from '../components/GenericPreview';


function HomePage() {

  const {
    trendingMovies,
    popularMovies,
    upcomingMovies,
  } = useMain();


  return (
    <div className='HomePage'>
      <HomeHero />
      <GenericPreview title={"Trending"} redirec={"/trending"} movies={trendingMovies}/>
      
      <GenericPreview title={"Popular"} redirec={"/popular"} movies={popularMovies}/>
      <GenericPreview title={"Upcoming"} redirec={"/upcoming"} movies={upcomingMovies}/>

    </div>
  )
}

export default HomePage