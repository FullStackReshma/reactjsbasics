import { COUNT_INCREASE, COUNT_DECREASE, COUNT_RESET } from "./countTypes"

const initialState = {
    count: 0
}

const countReducer = (state = initialState,action) => {
    switch(action.type) {
        case COUNT_INCREASE: return {
            ...state,
            count : state.count + 1
        }
        case COUNT_DECREASE: return {
            ...state,
            count : state.count - 1
        }
        case COUNT_RESET: return {
            ...state,
            count : 0
        }  
        default : return state
    }
}

export default countReducer