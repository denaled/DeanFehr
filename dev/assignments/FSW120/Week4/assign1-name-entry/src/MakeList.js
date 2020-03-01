import React from 'react';


function MakeList (props) {

    return(
        <ol>
            {props.passArr.map(passedArr =>
                <li key = {passedArr}>{passedArr}</li>)}
        </ol>
    )

}

export default MakeList