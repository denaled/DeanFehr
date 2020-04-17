import React, { useContext } from 'react'
import {MyContext} from './MyContext'
function MovieList (props){
    const context = useContext(MyContext)
    const items = context.movies
    console.log(items.length)
    const listItems =items.map((item,index)=>
   
        <li key ={index} className="list">{item}</li>
    
    )
    return(
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    )

}

export default MovieList