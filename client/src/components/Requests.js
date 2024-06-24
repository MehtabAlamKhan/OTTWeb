const API_KEY = "d0a6b59ce5d4305ca6cf3e0124eeec2f";

export const HomeRequests = {
  fetchPopularTvShows: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&&with_networks=213`,
  fetchTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export const MovieRequests = {
  fetchLatestMovies: `/movie/latest?api_key=${API_KEY}&language=en-US`,
  fetchNowPlayingMovies: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchUpComingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
};

export const TVRequests = {
  fetchLatestTV: `/tv/latest?api_key=${API_KEY}&language=en-US`,
  fetchAiringTodayTV: `/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
  fetchOnTheAirTV: `/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopularTV: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRatedTV: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
};

export const AnimatedRequests = {
  fetchPopular: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=16`,
  fetchLatest: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_genres=16`,
  fetchJapanese: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&region=JP&include_adult=false&include_video=false&page=1&with_genres=16`,
};
