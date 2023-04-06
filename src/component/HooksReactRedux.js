import React,{ useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

const HooksReactRedux = () => {
    const [number, setNumber] = useState(1)
    const numOfCakes =   useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()

    const handleClick = (number) => {
        console.log("number::",number);
        dispatch(buyCake(number))
    }
    return (
        <div>
            <h2>No of cakes = {numOfCakes}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={() => handleClick(number)}>Buy {number} cake</button>
        </div>
    )
}

export default  HooksReactRedux