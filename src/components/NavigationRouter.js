import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

function NavigationRouter() {
  const auth = useAuth();
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/call-recording">Call recording</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        {!auth.user && <NavLink to="login">Login</NavLink>}
    </nav>
  )
}

export default NavigationRouter