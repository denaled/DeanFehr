import React, { Component } from "react";

const MyContext = React.createContext();

class MyContextProvider extends Component{
    

     //update stuff here

     doWhat = value =>{
         //add Movie to Array
         this.setState(prevSate =>({
             movies:[...prevSate.movies, this.state.currentMovie]
         }))
         this.setState({currentMovie:""})
     }
     updateMovieInput =value=>{
       this.setState({currentMovie:value})
     }
     //State
    state={
        movies:["The Blues Brothers"],
        updateMovieInput: this.updateMovieInput,
        currentMovie:"",
        doWhat:this.doWhat
    }


    render(){
        return(
            <MyContext.Provider 
            value ={this.state}>
                {this.props.children}
            </MyContext.Provider>
        )
    }

   
}

export {MyContextProvider,MyContext}