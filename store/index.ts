import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const INCREMENT = "INCREMENT"
const REDUCE = "REDUCE"
const TURNLIGHT = "TURNLIGHT"


interface Action {
    type: string,
    [key: string]: any,
}


const intialState = {
    moon: true,
    night: false,
    count: 0,
}

const state_store = ( state = intialState, action: Action ):any => {
    switch(action.type) {
        case INCREMENT:
            return { ...state, moon: true, night: false, count: action.count };
        case REDUCE:
            return { ...state, moon: false, night: true, count: action.count };
        case TURNLIGHT:  
            return { ...state, moon: !state.moon, night: !state.night };
        default: 
            return state;
    }
}


export default createStore(state_store , compose(applyMiddleware(...[thunk])));