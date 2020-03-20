import React from 'react'

const OperandDropDown = () =>
{
    return(
        <div>
            <select>
                <option value='add'>Add</option>
                <option value='sub'>Subtract</option>
                <option value='multiply'>Multiply</option>
                <option value='divide'>Divide</option>

            </select>
        </div>
    )
}

export default OperandDropDown