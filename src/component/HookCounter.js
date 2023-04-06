import React, { useEffect, useState } from 'react';

const HookCounter = () => {

    const initialVal = 0    
    const [counter,setCounter] = useState(initialVal);
    const [name,setName] = useState('')

    const handleClick = () => {
        for(let i = 0; i < 5; i++ ) {
            setCounter((counter) => counter + 1)
        }
    }

    // useEffect(() => {
    //     console.log("useEffect")
    //     document.title = `${counter}`
    // },[])
    
    return(
        <div>
            <div>
             <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            </div>
            Count:{counter}
            <button onClick={() => setCounter(initialVal) }>Reset</button>
            {/* <button onClick={() => setCounter((preValue) => preValue  + 1) }>IncrementHook</button>
            <button onClick={() => setCounter((preValue) => preValue  - 1) }>DecrementHook</button> */}
            <button onClick={() => setCounter(counter  + 1) }>Increment</button>
            <button onClick={() => setCounter(counter  - 1) }>Decrement</button>
            <button onClick={ handleClick() }>Increment 5</button>

          
        </div>
        
    )

}

export default HookCounter