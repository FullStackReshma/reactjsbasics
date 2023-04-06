import React, { useState, useRef,useEffect } from 'react';

const UseRefInput = () => {
 
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [] )
    
    return(
        <div>
         <input ref={inputRef} type="text"/>
        </div>
        
    )

}

export default UseRefInput 