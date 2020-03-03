import * as actionTypes from '../actions/types';

export const navigationReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_NAVIGATION:
            return action.payload;
            break;
        default:
            return state;
            break;
    }
};
