import axios from 'axios';
import React, { createContext, useContext } from 'react'

const MainContext = createContext();

function MainProvider({children}) {

  /// fetch data
  const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
      'api_key': process.env.REACT_APP_MOVIE_API_KEY,
    },
  })
  const apiVideo = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
      'api_key': process.env.REACT_APP_MOVIE_API_KEY,
    },
    append_to_response: "videos",
  })

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
    const {data} = await apiVideo(`movie/${id}`);
    console.log("VideoMovie", data);
    return data;
  }



  ////////////////////
  const main = {
    getTrendingMovies,
    getPopularMovies,
    getUpcomingMovies,

    getVideoMovie,
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