import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from '../reducers/authReducer'
import { noteReducer } from '../reducers/noteReducer';
import { uiReducer } from '../reducers/uiReducer';

// for aply thunk
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// reducers
const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notes: noteReducer
})


export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
