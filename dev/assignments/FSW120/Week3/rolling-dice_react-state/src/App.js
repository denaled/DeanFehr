import React,{Component} from 'react';
import './App.css';
import DiceBox from './DiceBox'

class App extends Component {
  state = {
    min:0,
    max:0
  };

  handleClick=(event)=>{
    
    this.setState({max: 0, min:6})
  }

  triggerChildComponent(){
    this.refs.child.refreshDisplay();
  }
  render(){
    return (
      <div>
        
        <div className="App">
          <DiceBox ref ="child"></DiceBox>
          {/* <DiceBox random={this.state}></DiceBox>
          <DiceBox random={this.state}></DiceBox>
          <DiceBox random={this.state}></DiceBox>
          <DiceBox random={this.state}></DiceBox>      */}
        </div>
        <div>
          <button onClick={this.triggerChildComponent}>Click Me</button>
        </div>
      </div>
     
    );

  }
}

export default App;
