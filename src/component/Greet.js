import React from 'react'

//normal function

// function Greet() {
//     return(
//         <h1>Hello, Reshma Suresh</h1>
//     )
// }

//dealing with ES6 arrow funcion
const Greet = (props) => {
    //Destructing props
    const {name , age} = props
    return(
        <>
        <h1>Lets Learn React</h1>
        <p>{name} {age}</p>
        </>
    )   
}

export default Greet