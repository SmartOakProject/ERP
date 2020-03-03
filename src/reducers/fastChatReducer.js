import * as actionTypes from '../actions/types';

export const fastChatReducer = (
    state = { isOpen: false, idUserSelected: null },
    { type, payload }
) => {
    switch (type) {
        case actionTypes.OPEN_FAST_CHAT:
            return {
                ...state,
                isOpen: true,
                idUserSelected: payload
            };
            break;
        case actionTypes.CLOSE_FAST_CHAT:
            return {
                ...state,
                isOpen: false,
                idUserSelected: null
            };
            break;
        default:
            return state;
            break;
    }
};
