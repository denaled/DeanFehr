import React, {useState} from 'react'

export const CalcContext = React.createContext();

const  StoreThis = props =>{
    const [num1, setNum1] = useState('X');
    const [num2, setNum2] = useState('X');
    const [operand, setOperand] = useState('X');
    //const [functionType, setFunctionType] = useState('');
  

    return(
        <div>
            <p> test</p>
          <CalcContext.Provider
          value={num1}
          >
              <p>{num1}     </p>

          </CalcContext.Provider>
        </div>
      //  <CalcContext.Provider
        // value = {{
        //     num1,
        //     num2,
        //     setNum1,
        //     setNum2,
        //     operand,
        //     setOperand,
        // }}
        //>
          //  {props.childern}
       // </CalcContext.Provider>
    )
    
}

export default StoreThis