import React from 'react';
import ToDoListComponents from './inputComponents';

function App(){
  return (
    <div>
      <h1>Step12: Week 1 Assignment To Do list Part 1</h1>
      <ToDoListComponents todoTask = 'Mow the Lawn' varient = "dark"></ToDoListComponents>  
      <ToDoListComponents todoTask = 'Weed the garden' varient = "success"></ToDoListComponents>  
      <ToDoListComponents todoTask = 'Pick up milk' varient = "primary"></ToDoListComponents>  
    </div>
  )
}

export default App;
