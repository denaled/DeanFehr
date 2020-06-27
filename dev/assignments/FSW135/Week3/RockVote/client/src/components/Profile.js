import React, { useContext } from 'react'
import VoteForm from './VoteForm.js'
import VoteList from './VoteList.js'
import Vote from './Vote.js'
import { UserContext } from '../context/UserProvider.js'

export default function Profile(){
  const { 
    user: { 
      username 
    }, 
    addVote, 
    votes 
  } = useContext(UserContext)

  return (
    <div className="profile">
      <h1>Welcome {username}!</h1>
      <h3>Add A Vote</h3>
      <VoteForm addVote={addVote}/>
      <h3>Your Votes</h3>
      <VoteList votes={votes}/>
    </div>
  )
}