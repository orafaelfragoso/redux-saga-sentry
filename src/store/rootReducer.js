import { combineReducers } from 'redux'

function authReducer(state = '', payload) {
  return state
}

export default combineReducers({
  auth: authReducer,
})