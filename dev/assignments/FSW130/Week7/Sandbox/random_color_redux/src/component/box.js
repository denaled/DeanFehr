import React from "react";

function Box(props) {
    console.log(props.color)
  return (
    <div className="wrapper">
      <div style={{
          backgroundColor:`${props.color}`
      }} className="box">
        <button onClick={()=>{props.handleClick()}}>Change Color</button>
        <p>{props.color}</p>
      </div>
    </div>
  );
}
export default Box;
