import React,{Component} from 'react';
//import HeroData from './data.json'
import "bootstrap/dist/css/bootstrap.min.css";
//import { Container, Row, Col } from "react-bootstrap";

class SuperHero extends Component{
    
    buttonClick=(ev)=>{
        ev.preventDefault();
        console.log(this.props.passData.imageName)
        this.props.passFunct(this.props.passData.imageName)
    }

    render(){
    const passedHeroData = this.props.passData
    const doWhat = this.props.hideIt
      console.log(this.props.hideIt)
        return(
            <div className='card' style={{width:'18rem'}}>
              <div className="card-body">
                <h5 className="card-title">{passedHeroData.name}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>{passedHeroData.show}</h6>
                <p className='card-text'>{passedHeroData.catchPhrase}</p>
                <img className="img-responsive" src={passedHeroData.imageName} style={{width:'100px', visibility:this.props.hideIt}}/>
                {/* <button style={{ margin: 5 , width:150}} type="button" className="btn btn-primary" onClick= {this.buttonClick}>Click For Pic</button> */}
              </div>
            </div>
        )
    }
}
export default SuperHero