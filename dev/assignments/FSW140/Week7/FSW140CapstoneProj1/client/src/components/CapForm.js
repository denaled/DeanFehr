import React, {useState} from "react";


function CapForm(props) {
    const initInputs = {
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        // freeCap: props.freeCap || false,
        // favTeams:props.favTeams || [],
        hatNum: props.hatNum || 0
        
    }
    // const initInputs2 ={
    //     favBaseball: "",
    //     favFootball:""
    // }
    const [inputs, setInputs] = useState(initInputs)
    //const [inputs2, setInputs2] = useState(initInputs2)
    function handlechange(e){
        const {name,value} = e.target
        // console.log("Name is  : " + name)
        // console.log("Typeis  : " + type)
        // console.log("Value is :" + value)
        // console.log("Checked is :" + checked)
         
        // console.log("*************************")
        // if (name === "favFootball" || name === "favBaseball"){
        //     setInputs2(prevInputs2 => ({...prevInputs2, [name]: value}))
        //     console.log("I am In inputs 2 setting state" , inputs2)
        // }else if(type === "checkbox" ){
        //     checked ?setInputs(prevInputs => ({...prevInputs, [name]: true})) : setInputs(prevInputs => ({...prevInputs, [name]: false}))
        // } else{
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
        //  }
        //type === "checkbox" ?setInputs(prevInputs => ({...prevInputs, [name]: checked})) :setInputs(prevInputs => ({...prevInputs, [name]: value}))

    }
    function handleSubmit(e){
        //e.preventDefault()
        //const {name,value,type,checked} = e.target
        //post request
        //props.addBounty(inputs)
        // favTeams: []
        
       
        console.log("I am in Handle Submit on CapForm")
        console.log(inputs)
        // setInterval(()=>{props.submit(inputs, props._id)}, 1)
        props.submit(inputs,props._id)
        //setInputs(initInputs)

    }
    
    

  return (
    <div className="capFormDiv" onSubmit={handleSubmit}>
        <form className="capForm">
            {/* {console.log(typeof props.freeCap)} */}
            <input
            type="text"
            name="firstName"
            value={inputs.firstName}
            onChange={handlechange}
            placeholder="First Name">
            </input>
            <input
            type="text"
            name="lastName"
            value={inputs.lastName}
            onChange={handlechange}
            placeholder="Last Name">
            </input>
           
            <label>How many Hat do you Own?
            <input
            type="number"
            name="hatNum"
            value={inputs.hatNum}
           
            onChange={handlechange}>
            </input >
            </label>
            <button>{props.btnText}</button>
        </form>

    </div>
  );
}

export default CapForm;
