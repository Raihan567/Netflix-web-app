// const key = process.env.REACT_APP_TMDB_KEY;
const key = `b8b1b842a8e8c7984d0a087c21d00c59`;


const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `
  https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false`,
  requestHorror: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`,
};
export default requests;
