import { combineReducers } from "redux";
import { DECREMENT, INCREMENT, SET_USER } from "./actionType";




const user = (state = {
    name: 'fatih',
    age: 22
}, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                name: action.payload
            }
        default:
            return state
    }
};

const counter = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1
        default:
            return state;
    }
};

const todo = (state = [
    {
        key: '3',
        task: 'lorem ipsum',
        statu: true,
    }
], action) => {
    switch (action.type) {

        default:
            return state
    }
};

export const rootReducer = combineReducers({
    todo,
    user,
    counter,
});