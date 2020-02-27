import React from 'react';
import './App.css';
import MakeSquare from "./squareComponent"
import MakeButton from "./buttonComponent"
import {Container, Row} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(){
    super()
      this.state = {
        colors: ["white", "white","white", "white"],
        name:["Small","Party","Pro1","Pro2","Big Time 1","Big Time 2","Big Time 3","Big Time 4"],
      }
      //this.handleClick = this.handleClick.bind(this)
  }
    
   
    colorClick = (name) =>{
      let setColorArr = []
      this.setState(prevState =>{
        if (name === this.state.name[0] && prevState.colors[0] === "white"){
          setColorArr= ["black","black","black","black"]
        }else if (name === this.state.name[0]){
          setColorArr = ["white", "white","white", "white"]
        }else if (name === this.state.name[1]){//party
          setColorArr = ["purple", "purple",prevState.colors[2], prevState.colors[3]]
        }else if (name === this.state.name[2]){//pro 1
          setColorArr = [prevState.colors[0], prevState.colors[1],"blue", prevState.colors[3]]
        }else if (name === this.state.name[3]){//pro 2
          setColorArr = [prevState.colors[0], prevState.colors[1], prevState.colors[2],"blue"]
        }else if (name === this.state.name[4]){//bt 1
          setColorArr = [prevState.colors[0], prevState.colors[1], prevState.colors[2],"yellow"]
        }else if (name === this.state.name[5]){//bt 2
          setColorArr = ["grey",prevState.colors[1], prevState.colors[2], prevState.colors[3]]
        }else if (name === this.state.name[6]){//bt 3
          setColorArr = [prevState.colors[0],"green", prevState.colors[2], prevState.colors[3]]
        }else if (name === this.state.name[7]){//bt 4
          setColorArr = [prevState.colors[0],prevState.colors[1],"tomato",  prevState.colors[3]]
        }else{
          setColorArr= ["white", "white","white", "white"]
        }
        return{
          colors: setColorArr,
        }
      })
    }
  render(){
  return (
    <Container>
      <Row style={{height: "300px"}}>
        <MakeSquare  squareColor = {this.state.colors[0]}/>
        <MakeSquare  squareColor = {this.state.colors[1]}/>
      </Row>
      <Row style={{height: "300px"}}>
      <MakeSquare  squareColor = {this.state.colors[2]}/>
      <MakeSquare  squareColor = {this.state.colors[3]}/>
      </Row>
      <Row>
      <MakeButton name = {this.state.name[0]} colorChange = {this.colorClick}/>
      <MakeButton name = {this.state.name[1]} colorChange = {this.colorClick}/>
      <MakeButton name = {this.state.name[2]} colorChange = {this.colorClick}/>
      <MakeButton name = {this.state.name[3]} colorChange = {this.colorClick}/>
      <MakeButton name = {this.state.name[4]} colorChange = {this.colorClick}/>
      <MakeButton name = {this.state.name[5]} colorChange = {this.colorClick}/>
      <MakeButton name = {this.state.name[6]} colorChange = {this.colorClick}/>
      <MakeButton name = {this.state.name[7]} colorChange = {this.colorClick}/>
      {/* <button onClick={this.handleClick} >{this.state.name[0]}</button> */}
      </Row>
    </Container>

  );
}
}

// function testColor(){
//   let arrColor = ["black","black","black","black"]
//   return arrColor
// }
// function smallDJColor(){
//   let arrColor = ["white","white", "white","white"]
//   return arrColor
// }

export default App;

//<MakeSquare squareColor="green" />
    // <Container>
    //   <Row style={{height: "300px"}}>
    //     <Col style= {squareColor}>
    //     {'test'}
    //     </Col>
    //     <Col style= {squareColor}>
    //     {'test'}
    //     </Col>
    //   </Row>
    //   <Row style={{height: "300px"}}>
    //     <Col style= {squareColor}>
    //     {'test'}
    //     </Col>
    //     <Col style= {squareColor}>
    //     {'test'}
    //     </Col>
    //   </Row>
    // </Container>

    // colorClick = (name) =>{
    //   let setColorArr = []
    //   let isHuh = false
    //   this.setState(prevState =>{
    //     if (name === this.state.name[0] && prevState.smallDJON === false){
    //       setColorArr= ["black","black","black","black"]
    //       isHuh = true
    //     }else if (name === this.state.name[0]){
    //       setColorArr = ["green", "green","green", "green"]
    //     }else{
    //       setColorArr = ["green", "green","blue", "green"]
    //     }
    //     return{
    //       colors: setColorArr,
    //       smallDJON: isHuh
    //     }
    //   })
    // }

    // handleClick(){
    //   this.setState(prevState =>{
    //     let colorArr =[]
    //     let isWhat = false
    //     console.log(prevState.name)
    //     if (prevState.smallDJON === false){
    //       colorArr = ["black","black","black","black"]
    //       isWhat = true
    //     }else{
    //       colorArr =["blue","blue","blue","blue"]
    //     }
    //     return{
    //       colors: colorArr,
    //       smallDJON: isWhat
    //     }
    //   })
    // }
