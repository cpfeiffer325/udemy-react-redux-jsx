import jsonPlaceholer from '../apis/jsonPlaceholder'

// Action Creator
export const fetchPosts = async () => {
  const response = await jsonPlaceholer.get('/posts')
  
  return {
    type: 'FETCH_POSTS',
    payload: response
  }
}
