import * as actionTypes from '../actions/types';

export const userReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_USER:
            return [...state, action.payload];
            break;
        default:
            return state;
            break;
    }
};
