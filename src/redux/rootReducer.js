import { combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import countReducer from './reduxCounter.js/countReducer'
import userReducer from './user/userReducer'

 export const rootReducer = combineReducers({
    cake: cakeReducer,
    numCount: countReducer,
    user: userReducer
})