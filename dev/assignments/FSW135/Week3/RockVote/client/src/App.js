import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import ProtectedRoute from './components/ProtectedRoute'
import { UserContext } from './context/UserProvider.js'

export default function App(){
  const { token, logout } = useContext(UserContext)
  return (
    <div className="app">
      {/* Adding a truthy statement around the NavBar...makes it only show up if there is a token
      Note: Can also do samething in the Nav Component if you have a bunch of buttons and only a couple requireing a token to see. */}
      {token &&<Navbar logout={logout}/>}
      <Switch>
        <Route 
          exact path="/" 
          render={()=> token ? <Redirect to="/profile"/> : <Auth />}
        />
        <ProtectedRoute 
          path="/profile"
          component ={Profile}
          redirectTo="/"
          token={token}
        />
        <ProtectedRoute 
          path="/public"
          component ={Public}
          redirectTo="/"
          token={token}
        />
      </Switch>
      
    </div>
  )
}