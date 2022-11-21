import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'

const MainContext = createContext();

function MainProvider({children}) {
  const defaultConfig = {
    language: "es",
    route: "/trending",
    title: "Trending Movies",
    
  }
  // 
  const [config, setConfig] = useState(defaultConfig);




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
    console.log("trending", data)
    return data;
  }
  async function getPopularMovies() {
    const { data } = await api('movie/popular');
    console.log("popular", data)
    return data;
  }
  async function getUpcomingMovies() {
    const { data } = await api('movie/upcoming');
    console.log("upcoming", data)
    return data;
  }

  async function getVideoMovie (id) {
    const {data} = await api(`movie/${id}/videos`);
    console.log("VideoMovie", data);
    return data;
  }



  ////////////////////
  const main = {
    getTrendingMovies,
    getPopularMovies,
    getUpcomingMovies,

    getVideoMovie,
    config,
    setConfig,
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