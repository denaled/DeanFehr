import React from 'react';
//import './App.css';
import {useSelector, useDispatch} from "react-redux"
//import {addContact, removeContact} from './redux'
//const contact = require('./redux/contacts')
import ContactList from './components/contactsList'
import ContactForm from './components/contactForm'

function App() {
  const contact = useSelector(state => state.contacts.contacts)
  console.log(contact[0])
  return (
    <div className="App">
      <h1>HELLO</h1>
      <ContactForm/>
      <ContactList sendContacts ={contact}/>
      
    </div>
  );
}

export default App;
