import React from 'react'

//how it works with jsx
const ChildComponent = ({handleSubmit}) => {
    return (
        <div>
           <button onClick={() => handleSubmit('reshma')}>Submit</button>
        </div>
    )
}

export default ChildComponent