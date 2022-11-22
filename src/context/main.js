import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

const MainContext = createContext();

function MainProvider({children}) {
  const defaultConfig = {
    language: "es",
    route: "/trending",
    title: "Trending Movies",
    
  }
  // 
  const [config, setConfig] = useState(defaultConfig);
  const [movies, setMovies] = useState([])



  /// fetch data
  const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
      'api_key': process.env.REACT_APP_MOVIE_API_KEY,
      'language': config.language
    },
  })
  // const apiVideo = axios.create({
  //   baseURL: 'https://api.themoviedb.org/3/',
  //   params: {
  //     'api_key': process.env.REACT_APP_MOVIE_API_KEY,
  //   },
  //   append_to_response: "videos",
  // })

  /// API calls
  async function getTrendingMovies() {
    const { data } = await api('trending/movie/day');
    console.log("trending", data);
    const movies = data.results;
    setMovies(movies);
    return movies;
  }
  async function getPopularMovies() {
    const { data } = await api('movie/popular');
    console.log("popular", data)
    const movies = data.results;
    setMovies(movies);
    return movies;
  }
  async function getUpcomingMovies() {
    const { data } = await api('movie/upcoming');
    console.log("upcoming", data)
    const movies = data.results;
    setMovies(movies);
    return data;
  }

  async function getVideoMovie (id) {
    const {data} = await api(`movie/${id}/videos`);
    console.log("VideoMovie", data);
    return data;
  }

  useEffect(() => {
    if(config.route === "/"){

    }
    else if(config.route === "/trending"){
      getTrendingMovies();
    }
    else if(config.route === "/categories"){
      
    }
    else if(config.route === "/popular"){
      getPopularMovies();
    }
    else if(config.route === "/upcoming"){
      getUpcomingMovies();
    }

  }, [config])
  

  ////////////////////
  const main = {
    getTrendingMovies,
    getPopularMovies,
    getUpcomingMovies,

    getVideoMovie,
    config,
    setConfig,
    movies,
  };

  return (
    <MainContext.Provider value={main}>
      {children}
    </MainContext.Provider>
  )
}

function useMain() {
  const main = useContext(MainContext);
  return main;
}

// function MainRoute(props)

export {
  MainProvider,
  useMain
};