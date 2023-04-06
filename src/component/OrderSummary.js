import React from 'react'
import { useNavigate } from 'react-router-dom'

//how it works with jsx
const OrderSummary = () => {
    const navigator = useNavigate()
    return (
    <>
        <div>
            <h1>Order Confirmed!!</h1>
            <button onClick={() => navigator(-1)}>Go Back</button>
        </div>
    </>
        
    )
}


export default OrderSummary