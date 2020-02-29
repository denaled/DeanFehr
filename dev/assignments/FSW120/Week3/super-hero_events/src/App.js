import React,{Component} from 'react';
import HeroData from './data.json'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import SuperHero from './SuperHero'


class App extends Component {
  constructor(){
    super()
    this.state={
      superData: HeroData,
      isHidden: "hidden"
    }
  }
  setImagePath=(thePath)=>{
    //this.setState({isHidden:"visible"})
    this.setState({isHidden:this.state.isHidden==="hidden"?"visible":"hidden"})
  }
  render(){
  return (
    <div>
      <h1 className="jumbotron">Super Hero</h1>
      <Container>
        <Row>
      {this.state.superData.map(heroDetail=>(
         <div key={heroDetail.name} id='cardItem' className="col-xs-1">
          <SuperHero passData={heroDetail} passFunct={this.setImagePath} hideIt={this.state.isHidden}></SuperHero>
          </div>
      ))}
      <button style={{ margin: 5 , width:150}} type="button" className="btn btn-primary" onClick= {this.setImagePath}>Click For Pic</button>
      </Row>
      </Container>
    </div>
  );
      
}
}


export default App;


// {HeroData.map((heroDetail)=>{
//   return <div>
//     <h1>{heroDetail.name}</h1>
//     </div>
// })}