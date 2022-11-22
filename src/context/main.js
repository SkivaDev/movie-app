import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

const MainContext = createContext();

function MainProvider({children}) {
  ////
  // const defaultxddd = {
  //   route: "/home",
  //   genericTitle: "",
  //   languageES: false,
  //   isCategories: false,

  // }
  const defaultCfg = {
    languageES: false,
  }
  // localstorage
  const {
    item: config,
    saveItem: saveConfig,
  } = useLocalStorage("MOVIEAPP_cfg", defaultCfg)

  // utils
  const setLanguageES = (bloolean) => {
    const newConfig = {
      ...config,
      languageES: bloolean,
    }
    saveConfig(newConfig);
  }

  // 
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genericTitle, setGenericTitle] = useState(""); 
  const [isCategories, setIsCategories] = useState(false);
  //
  const location = useLocation();

  /// fetch data
  const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
      'api_key': process.env.REACT_APP_MOVIE_API_KEY,
      'language': config.languageES ? "es" : "en",
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

  async function getGenresMovies() {
    const {data} = await api(`genre/movie/list`);
    console.log("Genres", data);
    const genres = data.genres;
    setGenres(genres);
    return data;
  }

  async function getVideoMovie (id) {
    const {data} = await api(`movie/${id}/videos`);
    console.log("VideoMovie", data);
    return data;
  }


  //// USEEFFECT
  //al iniciar
  useEffect(() => {
    getGenresMovies();
  }, [config])
  // al navegar
  useEffect(() => {
    if(location.pathname === "/"){
    }
    else if(location.pathname === "/trending"){
      setGenericTitle(`${config.languageES ? "Películas en Tendencia" : "Trending Movies"}`);
      getTrendingMovies();
    }
    else if(location.pathname === "/categories"){
      setGenericTitle(`${config.languageES ? "Categorías" : "Categories"}`);
    }
    else if(location.pathname === "/popular"){
      setGenericTitle(`${config.languageES ? "Popular" : "Popular"}`);
      getPopularMovies();
    }
    else if(location.pathname === "/upcoming"){
      setGenericTitle(`${config.languageES ? "Próximamente" : "Upcoming"}`);
      getUpcomingMovies();
    }

  }, [location, config])
  
  
  ////////////////////
  const main = {
    config,

    movies,
    genres,
    genericTitle,
    setLanguageES,
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