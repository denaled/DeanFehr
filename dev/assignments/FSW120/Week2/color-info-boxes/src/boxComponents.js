import React from 'react';
//thought seeing the assignment had box in it ...
const boxStyle = {
    width:200,
    background: 'lightgrey'
}
function BoxComponents(props){
    return(
        <div style = {boxStyle}>
            <p style = {props.style}>Title: {props.title} </p>
            <p >Subtitle: {props.subtitle} </p>
            <p >Information: {props.info}</p>
        </div>
    )
}

export default BoxComponents