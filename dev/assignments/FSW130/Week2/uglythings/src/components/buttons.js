import React, { useContext } from 'react'
import {MyContext} from './myContext'
import PopUp from './PopUp'

function Button (props){
    const context = useContext(MyContext)
    
    return (
        
        <div>
            <input type='button' 
            value={props.nameIt}
            id={props.idIT} 
            className={props.passMessage}
            name={props.passName}
            
             onClick={e => {context.doWhat(e.target)}}></input>
            {context.showPopUp ? 
            <PopUp 
            
            
            />
            : null}
        </div>
    )
}

export default Button