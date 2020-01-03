import jsonPlaceholer from '../apis/jsonPlaceholder'

// Action Creator
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholer.get('/posts')
  
  dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

