import { combineReducers } from 'redux'
import postsReducer from './postsReducer'

// Reducers
export default combineReducers({
  posts: postsReducer
})
