import * as actionTypes from '../actions/types';
export const activeUsersReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_ACTIVE_USERS:
            return action.payload;
            break;
        default:
            return state;
            break;
    }
};
