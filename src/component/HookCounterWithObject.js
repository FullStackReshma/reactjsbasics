import React, { useState } from 'react';

const HookCounterWithObject = () => {  
    const initialVal =  {firstName:'',lastName:''}
    const [name,setName] = useState(initialVal);
    
    return(
        <form>
         <input 
            type= "text" 
            value={name.firstName}
            onChange={e => setName({...name,firstName:e.target.value})}
            placeholder="firstName" />
         <input 
            type= "text" 
            value={name.lastName}
            onChange={e => setName({...name,slastName:e.target.value})}
            placeholder="lastName" />
          <h3>firstName: {name.firstName}</h3>
          <h3>lastName: {name.lastName}</h3>
        </form>
        
    )

}

export default HookCounterWithObject