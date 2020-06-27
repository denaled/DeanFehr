import React, { useState } from 'react'

const initInputs = {
  User: "",
  Issue: "",
  Comments: ""
}

export default function VoteForm(props){
  const [inputs, setInputs] = useState(initInputs)
  const { addVote } = props

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addVote(inputs)
    setInputs(initInputs)
  }

  const { User, Issue, Comments } = inputs
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="User" 
        value={User} 
        onChange={handleChange} 
        placeholder="User"/>
      <input 
        type="text" 
        name="Issue" 
        value={Issue} 
        onChange={handleChange} 
        placeholder="Issue"/>
      <textarea
        type="text" 
        name="Comments" 
        value={Comments} 
        onChange={handleChange} 
        placeholder="Comments"/>
      <button>Add Vote</button>
    </form>
  )
}