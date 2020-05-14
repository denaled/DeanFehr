import React , {useState}from 'react'

function ContactForm (props){
    const initInputs = {
        Name: props.Name || "", 
        Phone: props.Phone || "",
        Email: props.Email || ""
    }
    const [inputs, setInputs] = useState(initInputs)


    function handlechange(e){
        const {name,value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
   function handleSubmit(e){
       e.preventDefault()

   }
    return(
        <div>
            <label>Name:
            <input type='text'></input>
            </label>
            <br/>
            <label>Phone:
            <input type='text' ></input>
            </label>
            <br/>
            <label>Email:
            <input type='text'></input>
            </label>
        </div>
    )
}
export default ContactForm