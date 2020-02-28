import React, { Component} from 'react';



class DiceBox extends Component {
    constructor(){
        super()
        this.state={
            border: '3px solid blue',
            buttonColor: 'white'
        }
    }

    isFrozen=(ev)=>{
        ev.preventDefault();
        console.log(this.props.name)
        console.log(this.props.isFrozen)
       // console.log(this.props.isFrozen)
        this.props.passHandleClick(this.props.name)
        //this.props.passHandleClick(this.props.isFrozen)
        
    }
 
  render(){
    return (
      <div style={{border:this.state.border, width:75, margin:5, textAlign:"center"}}>
        <button style={{fontSize: 40, width:68,backgroundColor:this.state.buttonColor}} onClick={this.isFrozen}>{this.props.number}</button>
      </div>
    )
  }
}

export default DiceBox;
