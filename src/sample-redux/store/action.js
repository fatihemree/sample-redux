import { INCREMENT, SET_TODO, SET_USER } from "./actionType"


export const setUser=(payload) => {
    return {
        type: SET_USER,
        payload
    }
}

export const setTodo=(payload) => {
    return {
        type: SET_TODO,
        payload
    }
}


export const increment=() => {
    return {
        type: INCREMENT,
    }
}