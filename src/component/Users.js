import React from 'react'
import { Outlet, Link } from 'react-router-dom'

// Relative links concepts
const Users = () => {
    return (
      <>
        <div>
             Welcome Users!!
        </div>
        <nav>       
        <Link to=':userId'>UserDetails</Link>
        <Link to='admin'>Admin</Link>
       </nav>
       <div>
            <Outlet/>
        </div>
       
       
    </>
    )
}


export default Users