import * as actionTypes from '../actions/types';

const initialState = {
    isCreatePostOpen: false,
    isSidebarOpen: false,
    isMainChatOpen: false
};
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_CREATE_POST:
            return {
                ...state,
                isCreatePostOpen: !state.isCreatePostOpen
            };
            break;
        case actionTypes.TOGGLE_SIDEBAR:
            return {
                ...state,
                isSidebarOpen: !state.isSidebarOpen
            };
            break;
        case actionTypes.TOGGLE_MAIN_CHAT:
            return {
                ...state,
                isMainChatOpen: !state.isMainChatOpen
            };
            break;

        default:
            return state;
            break;
    }
};
