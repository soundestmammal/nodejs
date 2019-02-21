import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    /*
    dispatch(fetchPosts()); <- The fetchPosts is Async and dispatches an action.type "FETCH_POSTS"
    ...
    We want to dispatch the action we receive back
    Then we call getState().posts <- (This is a redux thunk thing.)
    Map over the entire state.posts, denoting them 'userId'
    for each id : dispatch fetchUser(id);
    */
    await dispatch(fetchPosts());

    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)));

    //lodash library utility functions
    _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
};

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data })
    };


export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
}