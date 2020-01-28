import jsonPlaceholder from '../../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({type : 'FETCH_POSTS' ,payload : response.data});
};

export const fetchuser = id => async dispatch => {
  const response = await jsonPlaceholder.get('/users/${id}');
  dispatch({type : 'FETCH_USER' ,payload : response.data});
}

export const createProject = (project) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'CREATE_PROJECT', project });
  }
};