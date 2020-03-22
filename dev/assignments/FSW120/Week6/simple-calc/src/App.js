import React, { useState } from "react";

// import NumberInput from "./components/NumberInput";
// import OperandDropDown from "./components/OperandDropDown";
// import SubmitButton from "./components/SubmitButton";
import Answer from "./components/Answer";
// import StoreThis from "./components/StoreThis";
// import Display from "./components/Display";
// import KeyCaps from "./components/KeyCaps";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operand,setOperand] = useState('add');
  const [answerValue, setAnswerValue] = useState(0)

  const handleSubmit = e =>{
   //setAnswerValue(+num1 + +num2)//adding + before variable ensures that its a number
   e.preventDefault()
    switch (operand){  
      case 'add': return setAnswerValue(+num1 + +num2)
      case 'sub': return  setAnswerValue(+num1 - +num2)
      case 'multiply':return  setAnswerValue(+num1 * +num2)
      case 'divide': return  setAnswerValue(+num1 / +num2)  
    }
    
  }

  return (
    <div>
      
        <input
          type="number"
          name="num1"
          onChange={e => setNum1(e.target.value)}
        ></input>

        <select value={operand} onChange={e => setOperand(e.target.value)}>
          <option value="add">Add</option>
          <option value="sub">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select>

        <input
          type="number"
          name="num2"
          onChange={e => setNum2(e.target.value)}
        ></input>
      <input type="button" value="=" onClick={handleSubmit} />
      <Answer
        answerValue={" " + num1 + " ----- " + operand + " ----- " + num2 + " equals " + answerValue}
      ></Answer>
    </div>
  );
}
// const firstRowKeyCaps = ['7','8','9','/']
// const secondRowKeyCaps = ['4','5','6','*']
// const firstRowMap = firstRowKeyCaps.map(key =>
//   <KeyCaps keyVal={key} key ={key}  ></KeyCaps>
// )
// const App = ()=> (
//   <div>
//     <Display/>
//     <div>
//       {firstRowMap}
//     </div>
//   </div>
// )

export default App;
