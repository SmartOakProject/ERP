import { combineReducers } from 'redux';
import { fastChatReducer } from './fastChatReducer';
import { postsReducer } from './postsReducer';
import { userReducer } from './userReducer';
import { appReducer } from './appReducer';
import { activeUsersReducer } from './activeUsersReducer';
import { navigationReducer } from './navigationReducer';

export default combineReducers({
    users: userReducer,
    activeUsers: activeUsersReducer,
    posts: postsReducer,
    setup: appReducer,
    fastChat: fastChatReducer,
    navigation: navigationReducer
});
