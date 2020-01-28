import authReducer from './authReducer'
import projectReducer from './projectReducer'
import postsReducer from './postsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  posts: postsReducer
});

export default rootReducer

// the key name will be the data property on the state object