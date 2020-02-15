import React from 'react';
import './App.css';

function ToDoListComponents(props){
    return(
        <div>
            <input type = 'checkbox'></input>
            <p>{props.todoTask}</p>
        </div>
    );
}

export default ToDoListComponents