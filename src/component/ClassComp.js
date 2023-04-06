import React ,{ Component } from 'react'

class ClassComp extends Component {
    constructor() {
        super()
            this.state = {
                message:"Class State"
            }  
    }

    changeMessage = () => {
        this.setState({
            message:"Class Changed State"
        })
    }
    render() {
        return(
            <div>
            <h2>{this.state.message}</h2>
            <button onClick={this.changeMessage}>Click Me</button>
            </div>
        )
         
         
    }
}

export default ClassComp