import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducers from './reducers/userReducers'

const rootReducers = combineReducers({
  user: userReducers
})

export default createStore(
  rootReducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)