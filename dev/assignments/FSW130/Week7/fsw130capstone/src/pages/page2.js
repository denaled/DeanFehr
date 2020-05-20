import React, {useEffect} from 'react';
import MovieList from '../components/movieList'
import {useSelector, useDispatch} from "react-redux"
import allActions from '../actions/index'

function Page2() {
  const dispatch = useDispatch()
  
    const movies = useSelector(state=> state.movie.movies)
    useEffect(()=>{
      dispatch(allActions.movieActions.getMovies())
    },[dispatch])
   
    console.log("In page 2")
    console.log(movies)
  return (
    <div className="page2">
      <h1 className="pageHeader">Star Wars Movies</h1>
       <MovieList  sendMovies = {movies}/>
    </div>
  );
}
export default Page2;
