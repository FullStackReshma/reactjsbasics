import { COUNT_INCREASE, COUNT_DECREASE, COUNT_RESET } from './countTypes'

export const increaseCount = () => {
    return {
        type: COUNT_INCREASE
    }
}

export const decreaseCount = () => {
    return {
        type: COUNT_DECREASE
    }
}

export const resetCount = () => {
    return {
        type: COUNT_RESET
    }
}