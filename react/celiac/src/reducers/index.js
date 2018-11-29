import { combineReducers } from 'redux';

const INITIAL_STATE = [
    {title: "Chipotle"},
    {title: "McDonalds"},
    {title: "Panera Bread"}
]

const restaurantReducer = (state = INITIAL_STATE, action) => {
    if (action.type === 'FETCH_RESTAURANTS') {
        return [...state]
    }
    return [...state];
}

export default combineReducers({
    restaurants: restaurantReducer
});