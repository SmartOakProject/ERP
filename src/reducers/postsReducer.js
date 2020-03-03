import * as actionTypes from '../actions/types';
export const postsReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS:
            return action.payload;
            break;
        case actionTypes.FETCH_USER_POSTS:
            return [...state, action.payload];
            break;
        default:
            return state;
            break;
    }
};
