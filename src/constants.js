export const POPULAR_MOVIE = 
  `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MD_API_KEY}&language=fr`; // +page
export const TOP_RATED_MOVIE = 
  `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MD_API_KEY}&language=fr`; // +page
export const NOW_PLAYING_MOVIE = 
  `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MD_API_KEY}&language=fr`; // +page


// ex: https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MD_API_KEY}&language=fr&query=star%20wars&page=1&include_adult=false
export const SEARCH_MOVIE = 
  `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MD_API_KEY}&language=fr`; // +query +page +include_adult
