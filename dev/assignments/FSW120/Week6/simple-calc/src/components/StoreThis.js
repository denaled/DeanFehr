import React, {useState} from 'react'

export const CalcContext = React.createContext();

const  StoreThis = props =>{
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operand, setOperand] = useState('');


    return(
        <CalcContext.Provider
        value = {{
            num1,
            num2,
            setNum1,
            setNum2,
            operand,
            setOperand
        }}
        >
            {props.childern}
        </CalcContext.Provider>
    )
    
}

export default StoreThis