const store = require('./redux') //note: if I dont actually call file will look for Index.js
//import{addMovie, deleteMovie, getMovie} from './redux/movie'
const movie = require('./redux/movie')
const tvShow = require('./redux/tvShow')

//console.log(movie)
store.dispatch(movie.add({title: "Blues Brothers"}))
store.dispatch(movie.add({title: "Jaws"}))
store.dispatch(movie.add({title: "Caddy Shack"}))
store.dispatch(movie.add({title: "IT"}))
store.dispatch(tvShow.add({title: "All In The Family"}))
store.dispatch(tvShow.add({title: "The Rookie"}))
store.dispatch(tvShow.add({title: "Family Ties"}))
store.dispatch(tvShow.add({title: "The Prodigul Son"}))
const showMovies = store.getState().movie.movies
const showTVShow = store.getState().tvShow.tvShows
console.log("ADDED MOVIES" + showMovies)
console.log("ADDED TVSHOWS" + showTVShow)
store.dispatch(movie.remove({title: "Caddy Shack"}))
store.dispatch(tvShow.remove({title:"All In The Family"}))
const showMoviesRemove = store.getState().movie.movies
const showTVShowRemove = store.getState().tvShow.tvShows
console.log(showMoviesRemove)
console.log(showTVShowRemove)