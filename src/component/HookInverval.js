import React, { useEffect, useState } from 'react';

const HookInterval = () => {

    const initialVal = 0    
    const [counter,setCounter] = useState(initialVal);

    const handleCount = () => {
        setCounter(preValue => preValue + 1)
    }

    useEffect(() => {
      const num =  setInterval(handleCount,1000)
      console.log("num",num);
      return() =>{
        clearInterval(num)
      }
    })
    
    return(
        <div>{counter}</div>
        
    )

}

export default HookInterval