import React from 'react'
//import Button from './buttons'

function ContactList (props){
    const  contacts = props.sendContacts
    const listContacts = contacts.map((contact)=>
    <div key={contact.name}>{contact.name}
    <li >{contact.phone}</li>
    <li >{contact.email}</li>
    <button>Delete</button>
    </div>
    )

    return(
        <div>
            <ul>
                {listContacts}
            </ul>
            
        </div>
    )

}
export default ContactList