import React from 'react';
import {useSelector, useDispatch} from "react-redux"
import MovieList from './components/movieList'
import TvShowList from './components/tvShowList'

function App() {
  const movies = useSelector(state=> state.movie.movies)
  const tvShows = useSelector(state=> state.tvShow.tvShows)
  //console.log(movies[0])
  return (
    <div className="App">
      <h1>FSW130 Week 6 Gary,Sam and Dean Project</h1>
      <br/>
      <h1>Movies</h1>
      <MovieList sendMovies = {movies}/>
      <h1>TV Shows</h1>
      <TvShowList sendTvShows = {tvShows}/>

    </div>
  );
}

export default App;
