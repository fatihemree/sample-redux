import { INCREMENT, SET_USER } from "./actionType"


export const setUser=(payload) => {
    return {
        type: SET_USER,
        payload
    }
}


export const increment=() => {
    return {
        type: INCREMENT,
    }
}