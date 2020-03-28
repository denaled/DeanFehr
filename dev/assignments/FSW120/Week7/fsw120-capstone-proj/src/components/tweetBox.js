import React, { useContext } from 'react'
import {MyContext} from './myContext'

function TweetBox (props){
    const context = useContext(MyContext)
    return (
        <div>
            <input type='text' placeholder = {props.placeholder} onChange={e => {context.updateMessage(e.target.value)}}></input>
        </div>
    )
}

export default TweetBox