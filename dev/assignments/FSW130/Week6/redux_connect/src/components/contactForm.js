import React , {useState}from 'react'

function ContactForm (props){
    const initInputs = {
        name: props.name || "", 
        phone: props.phone || "",
        email: props.email || ""
    }
    const [inputs, setInputs] = useState(initInputs)


    function handlechange(e){
        const {name,value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
   function handleSubmit(e){
       e.preventDefault()
       props.submit(inputs)
       console.log(" I am in handle Submit")
       console.log(inputs)
       setInputs(initInputs)

   }
    return(
        <form onSubmit={handleSubmit} className="contactForm">
            <label>Name:
            <input 
            type='text'
            name= "name"
            value={inputs.name}
            onChange={handlechange}
            ></input>
            </label>
            <br/>
            <label>Phone:
            <input 
            type='text'
            name= "phone"
            value={inputs.phone}
            onChange={handlechange}
             ></input>
            </label>
            <br/>
            <label>Email:
            <input 
            type='text'
            name= "email"
            value={inputs.email}
            onChange={handlechange}
            ></input>
            </label>
            <button >{props.btnText}</button>
        </form>
    )
}
export default ContactForm