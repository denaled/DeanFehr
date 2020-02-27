import React, {Component} from "react";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import wavURL1 from "./sounds/Chewbacca Sound 6.mp3"
import wavURL2 from "./sounds/Hary Caray  Holy Cow .mp3"
import wavURL3 from "./sounds/I have you now.mp3"
import wavURL4 from "./sounds/Its alive  Frankenstien.mp3"

// function MakeButton(props){
    
//     return(
//     <div>
//         <button type="button" className="btn btn-primary">{props.name}</button>
    
//     </div>
//     )
// }
class MakeButton extends Component{
    
    doSomething = (ev) =>{
        ev.preventDefault();
        console.log(this.props.name)
        let path =  (Math.floor(Math.random()*4)+1)
        //this.soundPath = "wavURL" + (Math.floor(Math.random()*4)+1)
        
        if(path === 1){
            this.soundPath = wavURL1
        }else if (path === 2){
            this.soundPath = wavURL2
        }else if (path === 3){
            this.soundPath = wavURL3
        }else if (path === 4){
            this.soundPath = wavURL4
        }
        console.log(this.soundPath)
        this.audio = new Audio(this.soundPath);
        this.props.colorChange(this.props.name) 
        this.audio.play()
    }
    render(){
        return(
            <Col>
                <button style={{ margin: 5 , width:100}} type="button" className="btn btn-primary" onClick= {this.doSomething}>{this.props.name}</button>
            </Col>
        )
    }
}
export default MakeButton