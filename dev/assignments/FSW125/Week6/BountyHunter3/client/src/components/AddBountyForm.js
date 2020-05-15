import React, {useState} from 'react'

function AddBountyForm(props){
    const initInputs = {
        FirstName: props.FirstName || "", 
        LastName: props.LastName || "",
        BountyAmount: props.BountyAmount || 0
    }
    const [inputs, setInputs] = useState(initInputs)


    function handlechange(e){
        const {name,value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        //post request
        //props.addBounty(inputs)
        console.log("I am here")
        props.submit(inputs, props._id)
        setInputs(initInputs)

    }
    return(
        <form onSubmit={handleSubmit} className="bountyForm">
            <input
            type="text"
            name="FirstName"
            value={inputs.FirstName}
            onChange={handlechange}
            placeholder="First Name"/>
            <input
            type="text"
            name="LastName"
            value={inputs.LastName}
            onChange={handlechange}
            placeholder="Last Name"/>
            <label className= "moneyLabel"> Bounty Amount
            <input
            type="number"
            name="BountyAmount"
            min="0"
            max="99999"
            value={inputs.BountyAmount}
            onChange={handlechange}
            />
            </label>
            <button>{props.btnText}</button>
        </form>
    )
}
export default AddBountyForm