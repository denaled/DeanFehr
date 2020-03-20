import React from "react";
import NumberInput from "./components/NumberInput";
import OperandDropDown from './components/OperandDropDown';
import SubmitButton from './components/SubmitButton'
import Answer from './components/Answer'
import StoreThis from "./components/StoreThis";

function App() {
  return (
      
     <div>
      <NumberInput />
      <OperandDropDown />
      <NumberInput />
      <hr/>
      <SubmitButton/>
      <Answer/>
      </div>
     
   
  );
}

export default App;
