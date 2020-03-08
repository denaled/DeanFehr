import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import MakeCont from './MakeCont'
import MakeBadge from './MakeBadge'

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      infoArr: []
    };
  }

 getInfo=(arr)=>{
   
   console.log("made it to app.js")
   console.log(arr)
   this.setState({infoArr: arr})
   console.log(this.state.infoArr)


  }
  
  render() {
    return (
      <div style={{margin:'100px'}}>
        <MakeCont getInfo = {this.getInfo} > </MakeCont>
        <MakeBadge gotInfo={this.state.infoArr}></MakeBadge>
        
      </div>
    );
  }
}

export default App;
