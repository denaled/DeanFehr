import React from 'react'
import Vote from './Vote.js'

export default function VoteList(props){
  const { votes } = props
  return (
    <div className="vote-list">
      { votes.map(vote => <Vote {...vote} key={vote._id}/> ) }
      
    </div>
  )
}