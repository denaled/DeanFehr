import React, {Component} from "react";
const MyContext = React.createContext()

const DoMath =()=> {
//console.log(useContext())
//   switch (props.passOperand) {
//     case "add":
//       return setAnswerValue(+num1 + +num2);
//     case "sub":
//       return setAnswerValue(+num1 - +num2);
//     case "multiply":
//       return setAnswerValue(+num1 * +num2);
//     case "divide":
//       return setAnswerValue(+num1 / +num2);
//   }
}

export default DoMath;

class MyContextProvider extends Component{
   state ={
      answer:"NOTE ==> Was able to get Context to work "
   }

   render(){
      return(
      <MyContext.Provider
      value ={{
         answerTest: this.state.answer
      }}
      >
         {this.props.children}
      </MyContext.Provider>
      )
   }
   

}

export {MyContextProvider, MyContext}

