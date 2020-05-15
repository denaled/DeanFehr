import React, {useState} from 'react'
import ContactForm from './contactForm'

function Contacts(props){
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className="contactsMain">
            { !editToggle ?
            <>
            <h1>{props.name}</h1>
            <h2>Phone : {props.phone}</h2>
            <h2>Email : {props.email}</h2>
            <button 
            className = "delete-btn"
            onClick ={() => props.deleteContact(props.name)}>Delete</button>
            {/* Edit buttong goes here */}
            </>
            :
            <>
            <ContactForm
            name={props.name}
            phone={props.phone}
            email={props.email}
            submit={props.editContact}
            btnTxt = "Submit Edit"
            />
            </>
            }

        </div>
    )
}
export default Contacts