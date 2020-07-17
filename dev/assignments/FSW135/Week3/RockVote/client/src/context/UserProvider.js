import React, { useState } from 'react'
import Axios from 'axios'


const userAxios = Axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props){
    const initState = { 
      user: JSON.parse(localStorage.getItem("user")) || {}, 
      token: localStorage.getItem("token") || "", 
      votes: [] ,
      errMsg:""
    }
  
    const [userState, setUserState] = useState(initState)
  
    function signup(credentials){
      Axios.post("/auth/signup", credentials)
      // Wamt keep the Votes and not alter, So will just be updating user, token with SetState
        .then(res => {
          const { user, token } = res.data
          //localStorage to help when refresing page
          localStorage.setItem("token", token)
          localStorage.setItem("user", JSON.stringify(user))
          setUserState(prevUserState => ({
            ...prevUserState,
            user,
            token
          }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }
  
    function login(credentials){
      Axios.post("/auth/login", credentials)
        .then(res => {
          const { user, token } = res.data
          localStorage.setItem("token", token)
          localStorage.setItem("user", JSON.stringify(user))
          getUserVotes()
          setUserState(prevUserState => ({
            ...prevUserState,
            user,
            token
          }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }
  
    function logout(){
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      setUserState({
        user: {},
        token: "",
        votes: []
      })
    }

    function handleAuthErr(errMsg){
      setUserState(prevState=>({
        ...prevState,
        errMsg
      }))
    }

    function resetAuthErr(errMsg){
      setUserState(prevState=>({
        ...prevState,
        errMsg: ""
      }))
    }
  
    function getUserVotes(){
      userAxios.get("/api/rockVote/user")
        .then(res => {
          setUserState(prevState => ({
            ...prevState,
            votes: res.data
          }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }
  
    function addVote(newVote){
      userAxios.post("/api/rockVote", newVote)
      //console.log("I AM IN ADD VOTE")
        .then(res => {
          setUserState(prevState => ({
            ...prevState,
            votes: [...prevState.votes, res.data]
          }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }
  
    return (
      <UserContext.Provider
        value={{
          ...userState,
          signup,
          login,
          logout,
          addVote,
          resetAuthErr
        }}>
        { props.children }
      </UserContext.Provider>
    )
  }




export const UserContext = React.createContext()