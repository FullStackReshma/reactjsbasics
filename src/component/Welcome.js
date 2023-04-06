import React, { Component } from 'react'

//Class Component
class Welcome extends Component {
    render(props) {
        //destructuring props in class component
        const {name,typeOne,typeTwo} = this.props
        return(
            <div>
            <h2>{name}</h2>
             <h3>{typeOne}</h3>
             <h3>{typeTwo}</h3>
            </div>
        )
    }
}

//Function Component
// const Welcome = (nameProp) => {
//     return (
//         <div>
//             <h1>Welcome {nameProp.name} Actor {nameProp.heroName} {nameProp.children}</h1>
//         </div>
//     )
// }

export default Welcome