import React, { useContext } from 'react'
import {MyContext} from './myContext'

const Answer = (props) =>{
    const context =useContext(MyContext)
    return(
        <div>
    <p>Answer : {props.answerValue}</p>
    <p>{context.answerTest}</p>
    </div>
    )
}

export default Answer