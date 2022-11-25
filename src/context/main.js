import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

const MainContext = createContext();

function MainProvider({children}) {

  const API_URL = "https://api.themoviedb.org/3";

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

  const slugyfyQuery = (string) => {
    const result = string.split(" ").join("+")
    return result;
  }




  function getIndexRandom(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  function getRandomImgPath(movies) {
    const indexRandom = getIndexRandom(0, movies.lenght - 1);
    const path = movies[indexRandom].backdrop_path;
    return path;
  }
  const selectMovie = async (movie) => {
    // setPlayTrailer(false);
    const data = await fetchMovie(movie.id);
    setSelectedMovie(data);
  }




  // 
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genericTitle, setGenericTitle] = useState(""); 
  const [query, setQuery] = useState("");

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const [heroImgPath, setHeroImgPath] = useState("");
  const [heroMovie, setHeroMovie] = useState({});

  const [selectedMovie, setSelectedMovie] = useState({});

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

  const fetchMovie = async (id) => {
    const {data} = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        language: config.languageES ? "es" : "en",
        append_to_response: "videos",
      },
    });
    return data;
  }
  // const apiVideo = axios.create({
  //   baseURL: 'https://api.themoviedb.org/3/',
  //   params: {
  //     'api_key': process.env.REACT_APP_MOVIE_API_KEY,
  //   },
  //   append_to_response: "videos",
  // })

  /// API calls 
  async function getTrendingMovies() {
    const {
      data: { results },
    } = await api('trending/movie/day');
    console.log("trending", results);
    const movies = results;
    setMovies(movies);
    setTrendingMovies(movies);

    // const newImgPath = await getRandomImgPath(movies);
    console.log("AQUII", movies[2]["backdrop_path"])
    await setHeroImgPath(movies[2]["backdrop_path"]);
    await setHeroMovie(movies[2])
    return movies;
  }
  async function getPopularMovies() {
    const {
      data: { results },
    } = await api('movie/popular');

    console.log("popular", results)
    
    const movies = results;
    
    setMovies(movies);
    setPopularMovies(movies);
    
    await selectMovie(results[getIndexRandom(0, 19)]);
    return movies;
  }
  async function getUpcomingMovies() {
    const {
      data: { results },
    } = await api('movie/upcoming');
    console.log("upcoming", results)
    const movies = results;
    setMovies(movies);
    setUpcomingMovies(movies);
    return movies;
  }
  async function getSearchedMovies(query) {
    const {
      data: { results },
    } = await api('search/movie', {
      params: {
        query
      }
    });
    console.log("searchedMovie", results)
    const movies = results;
    setMovies(movies);
    return movies;
  }

  async function getGenresMovies() {
    const {
      data: { genres },
    } = await api(`genre/movie/list`);
    console.log("Genres", genres);
    setGenres(genres);
    return genres;
  }

  async function getVideoMovie (id) {
    const {data} = await api(`movie/${id}/videos`);
    console.log("VideoMovie", data);
    return data;
  }

  /// function of Pages
  const homePage = ()  => {
    getTrendingMovies();
    getPopularMovies();
    getUpcomingMovies();
  }
  const trendingPage = ()  => {
    setGenericTitle(`${config.languageES ? "Películas en Tendencia" : "Trending Movies"}`);
    getTrendingMovies();
  }
  const categoriesPage = ()  => {
    setGenericTitle(`${config.languageES ? "Categorías" : "Categories"}`);
  }
  const popularPage = ()  => {
    setGenericTitle(`${config.languageES ? "Popular" : "Popular"}`);
    getPopularMovies();
  }
  const upcomingPage = ()  => {
    setGenericTitle(`${config.languageES ? "Próximamente" : "Upcoming"}`);
    getUpcomingMovies();
  }
  const searchPage = ()  => {
    setGenericTitle(query);
    getSearchedMovies(query);
  }

  //// USEEFFECT
  //al iniciar
  // useEffect(() => {
  //   homePage();
  // }, [])

  useEffect(() => {
    getGenresMovies();
  }, [config])
  // al navegar
  useEffect(() => {
    if(location.pathname === "/"){
      homePage();
    }
    else if(location.pathname === "/trending"){
      trendingPage();
    }
    else if(location.pathname === "/categories"){
      categoriesPage();
    }
    else if(location.pathname === "/popular"){
      popularPage();
    }
    else if(location.pathname === "/upcoming"){
      upcomingPage();
    }
    else if(location.pathname === `/search/name=${slugyfyQuery(query)}`){
      searchPage();
    }
    console.log("location", location.pathname);
  }, [location, config])
  
  
  ////////////////////
  const main = {
    config,

    trendingMovies,
    popularMovies,
    upcomingMovies,

    movies,
    genres,
    genericTitle,
    setLanguageES,
    query,
    setQuery,
    slugyfyQuery,
    heroImgPath,
    selectedMovie,
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