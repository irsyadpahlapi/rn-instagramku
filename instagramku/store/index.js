import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import data from './data/data'


const reducers = combineReducers({
  data: data
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk))

export default store;
