import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

const NavBar = () => {
    const auth = useAuth()
    return (
        <nav className ='primary-nav'>  
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            {/* <NavLink to='/login'>Login</NavLink> */}
            {!auth.user &&
            <NavLink to='/login'>Login</NavLink>
            }
        </nav>
    )
}


export default NavBar