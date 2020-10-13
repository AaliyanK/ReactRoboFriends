import { CHANGE_SEARCH_FIELD } from './constants'

const initialState = {
    // In app.js, the initial state had an empty string as searchfield
    searchField: ''
}

// Create reducer: pure function, return new state
export const searchRobots = (state=initialState, action={}) => {
    // Take the state and action, if they 
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            // Return object new state with whatever the user has entered (action.payload)
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;


    }
}