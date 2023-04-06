import React from 'react'
import { UserContext , UserAge } from '../App'

//how it works with jsx
const UseContextCompC = () => {
    return (
        <div>
            <UserContext.Consumer>
                {
                   user => {
                        return (
                              <UserAge.Consumer>
                                {
                                    age => (
                                        <div> {user} {age}</div>
                                    )
                                }
                              </UserAge.Consumer>
                        )
                   }
                }
            </UserContext.Consumer>

        </div>
    )
}

export default UseContextCompC