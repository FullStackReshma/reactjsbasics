import React from 'react'
import { buyCake } from '../redux/cake/cakeActions'
import { connect } from 'react-redux'

const ReactRedux = ({numOfCakes,buyCake}) => {
    return (
        <div>
            <h2>No of cakes-{numOfCakes}</h2>
            <button onClick={buyCake}>Buy cake</button>
        </div>
    )
}

const mapStateToProps = state => ({
        numOfCakes: state.numOfCakes 
})

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps) (ReactRedux)