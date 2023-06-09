import React, { useState, useMemo } from 'react';

const UseMemoCounter = () => {
 
    const [counterOne,setCounterOne] = useState(0);
    const [counterTwo,setCounterTwo] = useState(0);
    
    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }
     
    const isEven  = useMemo(() => {
        let i = 0
        while(i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne] )
    // const isEven = () => {
    //     let i = 0
    //     while(i < 2000000000) i++
    //    return counterOne % 2 === 0
    // }
    
    return(
        <div>
          <div>
          <button onClick={incrementOne}>CountOne-{counterOne}</button>
          <span>{isEven ? "even": "odd"}</span>
          </div>  
            <div>
            <button onClick={incrementTwo}>CountTwo-{counterTwo}</button> 
            </div>
        </div>
        
    )

}

export default UseMemoCounter