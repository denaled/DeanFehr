import React from 'react'

export default function Vote(props){
  const { User, Issue, Comments, _id } = props
  return (
    <div className="vote">
      <h1>NAME: { User }</h1>
      <h3>ISSUE: { Issue }</h3>
      <textarea>{ Comments }</textarea>
      
    </div>
  )
}