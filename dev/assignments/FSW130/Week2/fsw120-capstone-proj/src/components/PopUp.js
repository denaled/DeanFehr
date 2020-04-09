import React, { useContext } from "react";
import { MyContext } from "./myContext";

function PopUp(props) {
    const context = useContext(MyContext)
 // const context = useContext(MyContext);
  console.log("I am in PopUp")
  return (
    <div className="popup">
      <div className="popup_inner">
  <h1>Make Your Edits</h1>
  <input type='text' placeholder={context.currentName} onChange={e=>{context.updateCurrentName(e.target.value)}}></input>
  <input type='text' placeholder={context.currentMessage} onChange={e=>{context.updateCurrentMessage(e.target.value)}}></input>
        <button onClick={context.togglePopUp}>Cancel</button>
        <button value="Save" onClick={e=>context.doWhat(e.target)}>Save</button>

      </div>
    </div>
  );
}
export default PopUp;
