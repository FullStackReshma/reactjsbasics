import React, { useState } from 'react';

const HookWithArray = () => {  
   
    const [items,setItems] = useState([]);
     const handleClick = () => {
        setItems([...items,{
            id:items.length,
            value:items.length + 1
        }])
        
     }
    
    return(
        <div>
            <button onClick={handleClick}>Add</button>
            {items.map((item) => (
                <li key={item.id}>{item.value}</li>
                ))}
            <h3>{JSON.stringify(items)}</h3>
        </div>
        
    )

}

export default HookWithArray