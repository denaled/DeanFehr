import React, { Component } from "react";
import DiceBox from "./DiceBox";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0,
      isFrozen1: false,
      isFrozen2: false,
      isFrozen3: false,
      isFrozen4: false,
      isFrozen5: false,
      clickCount: 0,
      names: ["num1", "num2", "num3", "num4", "num5"]
    };
  }
  handleClick = name => {
    const min = 0;
    const max = 6;

    //Math.ceil(Math.random() * (+max - +min) + +min);
    this.setState(prevState => {
      let random1 = this.state.isFrozen1
        ? prevState.num1
        : Math.ceil(Math.random() * (+max - +min) + +min);
      let random2 = this.state.isFrozen2
        ? prevState.num2
        : Math.ceil(Math.random() * (+max - +min) + +min);
      let random3 = this.state.isFrozen3
        ? prevState.num3
        : Math.ceil(Math.random() * (+max - +min) + +min);
      let random4 = this.state.isFrozen4
        ? prevState.num4
        : Math.ceil(Math.random() * (+max - +min) + +min);
      let random5 = this.state.isFrozen5
        ? prevState.num5
        : Math.ceil(Math.random() * (+max - +min) + +min);
        //***********not a good way makes warnings BAD FORM */
        // recieved --> index.js:1 Warning: An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.
        //****************************** */
      // if (this.state.clickCount === 3) {
      //   this.setState({ clickCount: 0 })
      //   this.setState({isFrozen1:false})
      //   this.setState({isFrozen2:false})
      //   this.setState({isFrozen3:false})
      //   this.setState({isFrozen4:false})
      //   this.setState({isFrozen5:false})
      //   random1=0
      //   random2=0
      //   random3=0
      //   random4=0
      //   random5=0
      // } 
      //*********************************************** */
      return {
        
        num1: this.state.clickCount===3?0:random1,
        num2: this.state.clickCount===3?0:random2,
        num3: this.state.clickCount===3?0:random3,
        num4: this.state.clickCount===3?0:random4,
        num5: this.state.clickCount===3?0:random5,
        isFrozen1:this.state.clickCount===3?false:prevState.isFrozen1,
        isFrozen2:this.state.clickCount===3?false:prevState.isFrozen2,
        isFrozen3:this.state.clickCount===3?false:prevState.isFrozen3,
        isFrozen4:this.state.clickCount===3?false:prevState.isFrozen4,
        isFrozen5:this.state.clickCount===3?false:prevState.isFrozen5,
        clickCount: this.state.clickCount===3?0:prevState.clickCount + 1
      };
    });
  };
  setFrozen = freezeWho => {
    if (freezeWho === "num1") {
      this.setState({ isFrozen1: true });
    } else if (freezeWho === "num2") {
      this.setState({ isFrozen2: true });
    } else if (freezeWho === "num3") {
      this.setState({ isFrozen3: true });
    } else if (freezeWho === "num4") {
      this.setState({ isFrozen4: true });
    } else if (freezeWho === "num5") {
      this.setState({ isFrozen5: true });
    }
  };
 

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1>Week 3 Rolling Dice</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <DiceBox
                number={this.state.num1}
                name={this.state.names[0]}
                passHandleClick={this.setFrozen}
                isFrozen={this.state.isFrozen0}
              ></DiceBox>
              <DiceBox
                number={this.state.num2}
                name={this.state.names[1]}
                passHandleClick={this.setFrozen}
               isFrozen={this.state.isFrozen1}
              ></DiceBox>
              <DiceBox
                number={this.state.num3}
                name={this.state.names[2]}
                passHandleClick={this.setFrozen}
                isFrozen={this.state.isFrozen2}
              ></DiceBox>
              <DiceBox
                number={this.state.num4}
                name={this.state.names[3]}
                passHandleClick={this.setFrozen}
                isFrozen={this.state.isFrozen3}
              ></DiceBox>
              <DiceBox
                number={this.state.num5}
                name={this.state.names[4]}
                passHandleClick={this.setFrozen}
                isFrozen={this.state.isFrozen4}
              ></DiceBox>
              <button onClick={this.handleClick} className="btn btn-primary">
                Click Me
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

// const min=0;
//         const max=6;
//         const random =Math.ceil( Math.random() * (+max - +min) + +min);

// handleClick = (name) => {
//   const min = 0;
//   const max = 6;
//   const random1 = Math.ceil(Math.random() * (+max - +min) + +min);
//   const random2 = Math.ceil(Math.random() * (+max - +min) + +min);
//   const random3 = Math.ceil(Math.random() * (+max - +min) + +min);
//   const random4 = Math.ceil(Math.random() * (+max - +min) + +min);
//   const random5 = Math.ceil(Math.random() * (+max - +min) + +min);
//   console.log(this.state.clickCount);

//     this.setState(prevState => {
//       return {
//         clickCount: prevState.clickCount + 1,
//         num1: Math.ceil(Math.random() * (+max - +min) + +min),
//         num2: Math.ceil(Math.random() * (+max - +min) + +min),
//         num3: Math.ceil(Math.random() * (+max - +min) + +min),
//         num4: Math.ceil(Math.random() * (+max - +min) + +min),
//         num5: Math.ceil(Math.random() * (+max - +min) + +min)
//       };
//     });
// };
