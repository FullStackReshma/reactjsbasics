import React, { Component } from 'react'

//Class Component
class ClassClick extends Component {

        clickHandler = () => {
            alert()
        }

    render() {
        return(
            <div>
            <button onClick={this.clickHandler}>ClickClass</button>
            </div>
        )
    }
}

export default ClassClick