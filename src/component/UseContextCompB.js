import React,{useContext} from 'react'
import UseContextCompC from './UseContextCompC'
import { UserContext , UserAge } from '../App'

//how it works with jsx
const UseContextCompB = () => {
    const user = useContext(UserContext)
    const age =  useContext(UserAge)
    return (
        <div>
           {/* <UseContextCompC/> */}
           {user}-{age}
        </div>
    )
}

export default UseContextCompB