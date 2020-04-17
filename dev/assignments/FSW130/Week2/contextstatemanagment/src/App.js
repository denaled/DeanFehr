import React,{Component} from 'react';
import MovieInput from './Components/movieInput'
import Button from './Components/Button'
import MovieList from './Components/movieList'


class App extends Component {
  constructor(){
    super()
    this.state={
      listMovies:[],
      movieTitle:"generic"
    }
  }

  render(){
  return (
    <div className="App">
      <MovieInput placeholder = "Movie Title" onChange={e=> this.setState({movieTitle:e.target.value})}/>
      <br/>
      <br/>
      <Button nameIt=" Add Movie"/>
      <MovieList/>

    </div>
  );
}
}

export default App;
