import React, { useContext } from 'react'
import {MyContext} from './MyContext'

function MovieInput (props){
    const context = useContext(MyContext)
 
    return (
        <div>
          
            <input type='text' autofocus="true" placeholder = {props.placeholder} onChange={e => {context.updateMovieInput(e.target.value)}} ></input>
            
        </div>
    )
}

export default MovieInput