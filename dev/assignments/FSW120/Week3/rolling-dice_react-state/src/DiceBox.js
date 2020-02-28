import React, {Component} from 'react';

class  DiceBox extends Component{
    state={
        value:0
    }
    random=()=>{
        const min=0;
        const max=6;  
        const random =Math.ceil( Math.random() * (+max - +min) + +min);
        console.log("You clicked me");
        //this.setState({value: random})
        return random
      }
    refreshDisplay(){
        this.setState({value: this.random});
    }
  
    render(){
        return(
            
            <div>
                <label>
                    {this.state.value}
                </label>
        
            </div>
        )
    }
}

export default DiceBox