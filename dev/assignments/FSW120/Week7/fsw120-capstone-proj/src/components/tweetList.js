import React from 'react'
import Button from './buttons'

function TweetList (props){
    const items = props.sendItems 
   console.log(props.sendItems[0]._id ? "yesy":"no")
    //const items = ['1','2','3']
    const listItems = items.map((item) =>
    <div id={item._id?item._id:1} className="label">{item.title}
    <li key={item._id?item._id:2} className="list">
        <div>{item.description}</div>
        </li> 
        <Button nameIt="Edit" idIT ={item._id} passName={item.title} passMessage={item.description}></Button>
        <Button nameIt="Delete" idIT ={item._id}></Button>
    <br/>
    </div>
    
    
    )
    return (
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default TweetList