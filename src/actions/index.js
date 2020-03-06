import jsonPlaceholder from 'api/jsonPlaceholder';
import toRemoveApi from 'api/toRemoveApi';
import * as actionTypes from './types';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();

    _.chain(getState().posts)
        .map('id')
        .uniq()
        .forEach(id => dispatch(fetchComments(id)))
        .value();
};

export const fetchUsers = () => async (dispatch, getState) => {
    const response = await jsonPlaceholder.get('/users');

    dispatch({ type: actionTypes.FETCH_USERS, payload: response.data });
};

export const fetchActiveUsers = () => async (dispatch, getState) => {
    const response = await jsonPlaceholder.get('/users');

    dispatch({ type: actionTypes.FETCH_ACTIVE_USERS, payload: response.data });
};

export const fetchUser = id => async (dispatch, getState) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: actionTypes.FETCH_USER, payload: response.data });
};
export const fetchNavigation = () => async dispatch => {
    const response = await toRemoveApi.get();

    dispatch({ type: actionTypes.FETCH_NAVIGATION, payload: response.data });
};
export const fetchComments = id => async (dispatch, getState) => {
    const response = await jsonPlaceholder.get(`/posts/${id}/comments`);

    dispatch({
        type: actionTypes.FETCH_COMMENTS,
        payload: { data: response.data, id },
    });
};
export const fetchPosts = () => async (dispatch, getState) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: actionTypes.FETCH_POSTS, payload: response.data });
};
export const fetchUserPosts = id => async (dispatch, getState) => {
    const response = await jsonPlaceholder.get(`/users/${id}/posts`);

    dispatch({ type: actionTypes.FETCH_USER_POSTS, payload: response.data });
};
export const toggleCreatePost = () => ({
    type: actionTypes.TOGGLE_CREATE_POST,
});

export const openFastChat = id => {
    return {
        type: actionTypes.OPEN_FAST_CHAT,
        payload: id,
    };
};
export const toggleSidebar = () => ({ type: actionTypes.TOGGLE_SIDEBAR });
export const toggleMainChat = () => ({ type: actionTypes.TOGGLE_MAIN_CHAT });

export const closeFastChat = () => ({ type: actionTypes.CLOSE_FAST_CHAT });
