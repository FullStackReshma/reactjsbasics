import React from 'react'
import { useNavigate } from 'react-router-dom'

//how it works with jsx
const Home = () => {
    const navigator = useNavigate()
    
    return (
        <div>
            <h1>Home Page!!</h1>
            {/* <button onClick={() => navigator('order-summary', {replace: true} )}>Place Order</button> */}
            <button onClick={() => navigator('order-summary')}>Place Order</button>
        </div>
    )
}


export default Home