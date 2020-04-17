import React, { useContext } from 'react'
import {MyContext} from './MyContext'

function Button (props){
    const context = useContext(MyContext)
    
    return (
        
        <div>
            <input type='button' 
            value={props.nameIt}
            // id={props.idIT} 
            // className={props.passMessage}
            // name={props.passName}
            
             onClick={e => {context.doWhat(e.target)}}></input>
           
            
        </div>
    )
}

export default Button