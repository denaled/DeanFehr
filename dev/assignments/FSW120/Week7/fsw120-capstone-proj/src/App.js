import React, { Component, useContext } from "react";

import NameInput from "./components/nameInput";
import TweetList from "./components/tweetList";
import TweetBox from "./components/tweetBox";
import Button from "./components/buttons";
import axios from "axios";
import PopUp from './components/PopUp'
import {MyContext} from './components/myContext'

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      listTweetItems: ["1", "2", "3"],
      name:"something",
      tweetMessage:""
    };
  }
  
  componentDidMount() {
    axios.get("https://swapi.dev/api/films").then(response => {
      const films = response.data;
      console.log(films)
      console.log(films.results[0].title)
      console.log(films.results[0].producer)
      console.log(films.results[0].release_date)
      console.log(films.results[0].episode_id)

      //this.setState({ listTweetItems });
    });
    // axios.get("https://api.vschool.io/dean/todo").then(response => {
    //   const listTweetItems = response.data;
    //   console.log(this.state.name)
    //   this.setState({ listTweetItems });
    // });
  }
  
  render() {
   // const context =useContext(MyContext)
    return (
      <div>
        <NameInput placeholder=" Your name" onChange={e => this.setState({name:e.target.value})} ></NameInput>
        <TweetBox placeholder="What you want to say"></TweetBox>
        <br />
        <br />
        <br />
        <br />
        
        <Button nameIt="Add" ></Button>
        <br />
        <br />
        <br />
        <br />
        <TweetList sendItems={this.state.listTweetItems}></TweetList>
        
      </div>
    );
  }
}

export default App;
