import React from 'react'
//import Button from './buttons'

function ContactList (props){
    const  contacts = props.sendContacts
    const listContacts = contacts.map((contact)=>
    <div>{contact.name}
    <li >{contact.phone}</li>
    <li >{contact.email}</li>
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