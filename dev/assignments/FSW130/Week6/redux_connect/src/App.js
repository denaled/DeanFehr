import React from 'react';
//import './App.css';
import {useSelector, useDispatch} from "react-redux"
//import {addContact, removeContact} from './redux'
//const contact = require('./redux/contacts')

import ContactForm from './components/contactForm'
import {addContact, removeContact} from './redux/contacts'
import Contacts from './components/Contacts'

function App() {
  const contact = useSelector(state => state.contacts.contacts)
  //console.log(contact[0])
  const dispatch = useDispatch()

  function AddingContact (newContact){
    console.log("I am in the addign contact")
    console.log (newContact.name)
    dispatch(addContact(newContact))
  }
  function DeleteContact (newContact){
    console.log(newContact)
    dispatch(removeContact(newContact.name))
  }
  return (
    <div className="App">
      <h1 className = "mainHead">FSW130 Week 6 Contacts</h1>
      <ContactForm submit ={AddingContact} btnText={"Add Contact"}/>
      {contact.map(contact =>
        <Contacts
        {...contact}
        key={contact.name}
        deleteContact = {DeleteContact}
        />
      )}
      
    </div>
  );
}

export default App;
