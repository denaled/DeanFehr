import React, { useContext } from 'react'
import {MyContext} from './myContext'

function NameInput (props){
    const context = useContext(MyContext)
    return (
        <div>
            <input type='text'placeholder = {props.placeholder} onChange={e => {context.updateUserName(e.target.value)}} ></input>
        </div>
    )
}

export default NameInput