import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super()
        this.state ={
            count: 0
        }
    }

    handleChangeWithObject() {
         //only by using setState we caa re-render the component
        this.setState({                      
            count : this.state.count + 1
        })
        console.log("count(sync)::",this.state.count)
    }

    //function as an argument instead of regular object
    handleChangeWtihFunction() { 
        //use previous value of a component     
        this.setState((preValue) => ({               
            count: preValue.count + 1
        }))    
    }

    handleChangeThree() {
        this.handleChangeWithObject()
        this.handleChangeWithObject()
        this.handleChangeWithObject()

        // this.handleChangeWtihFunction()
        // this.handleChangeWtihFunction()
        // this.handleChangeWtihFunction()
    }

    render() {
        return(
            <div>
               <div>Count-{this.state.count}</div>
               <button onClick={() => this.handleChangeThree()}>Increment</button>
            </div>
        )
    }

}

export default Counter