import { combineReducers } from "redux";
import { DECREMENT, INCREMENT, SET_TODO, SET_USER } from "./actionType";
import produce from 'immer';


// old reducer
// const user = (state = {
//     name: 'fatih',
//     age: 22
// }, action) => {
//     switch (action.type) {
//         case SET_USER:
//             return {
//                 ...state,
//                 name: action.payload
//             }
//         default:
//             return state
//     }
// };

// immer modifed recuer
const user = produce((draft, action) => {
    switch (action.type) {
                case SET_USER:
                    draft.name=action.payload
                   break;
                default:
                    return draft;
            }

},{
        name: 'fatih',
        age: 22
    });

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

const todo = produce((draft, action) => {
    switch (action.type) {
case SET_TODO:
    draft[0].task = action.payload;
    break;
        default:
            return draft
    }
},[
    {
        key: '1',
        task: 'birinci',
        statu: true,
    },{
        key: '2',
        task: 'ikinci',
        statu: true,
    }
]);

export const rootReducer = combineReducers({
    todo,
    user,
    counter,
});