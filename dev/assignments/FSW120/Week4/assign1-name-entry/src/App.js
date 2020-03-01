import React, {Component} from 'react';
import MakeList from './MakeList'


class App extends Component {
  constructor(){
    super()
    this.state={
      name:"",
      itemArr:[]
      
    }
    this.handleChange = this.handleChange.bind(this)
    this.nameInput = null
  }  
  componentDidUpdate(){
    this.nameInput.focus()
  }
  handleChange(event){
    //const{name, value, type} = event.target
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleOnSubmit = (event) =>{
    event.preventDefault()
    //console.log("made it here")
    // let newItemArr = this.state.itemArr
    // newItemArr.push(this.state.name)
    // this.setState({itemArr:newItemArr})
    this.setState({
      itemArr: this.state.itemArr.concat(this.state.name),
      name:"",
      
    })
  }
  render(){
    return (
      <div>
        <form>
          <input 
             type="text"
             name="name"
             value={this.state.name}
             onChange={this.handleChange}
             ref = {elem=>(this.nameInput = elem)}
             placeholder="Input Name"
          />
          <br/>
          <h1>{this.state.name}</h1>
          
          <br/>
          <button onClick={this.handleOnSubmit}>Submit</button>
        </form>
        
        <MakeList passArr = {this.state.itemArr}/>
      </div>
    );
}
}

export default App;
