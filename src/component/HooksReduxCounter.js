import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { increaseCount } from '../redux/reduxCounter.js/countActions'
import { decreaseCount } from '../redux/reduxCounter.js/countActions'
import { resetCount } from '../redux/reduxCounter.js/countActions'


const HooksReduxCounter = () => {
    const count =   useSelector(state => state.numCount.count)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Count = {count}</h2>
            <button onClick={() => dispatch(increaseCount())}>Increase</button>
            <button onClick={() => dispatch(decreaseCount())}>Decrease</button>
            <button onClick={() => dispatch(resetCount())}>Reset</button>
        </div>
    )
}


export default  HooksReduxCounter