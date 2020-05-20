import React from "react";

function MovieList(props) {
  const movies = props.sendMovies;
  const listMovies = movies.map(movie => 
    <div className="card"  >
         <h5 className="card-header bg-secondary text-white" >{movie.title}</h5>
    <div className="card-body">
       <h6 className="card-subtitle mb-2 text-dark">Movie Relase Date:{movie.release_date}</h6>
       <h6 className="card-subtitle mb-2 text-muted">Director: {movie.director}</h6>
      <p className="card-text">{movie.opening_crawl}</p>
    </div>
  </div>
  );

  return <div className="movieList">{listMovies}</div>;
}
export default MovieList;


