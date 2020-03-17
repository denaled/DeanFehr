import React from "react"
import {Link} from "react-router-dom"

function Header (){
    return(
    <header>
        
        <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/about">About</Link></li>
            <li><Link to ="/services">Services</Link></li>
        </ul>
        <h1 className='Name'>Elm Tree Plumbing</h1>
    </header>
    )
}

export default Header