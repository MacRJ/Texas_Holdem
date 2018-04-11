import {applyMiddleware, createStore} from 'redux';
import rootReducer from './Reducers';
import logger from 'redux-logger';
import promises from 'redux-promise-middleware';
import thunk from 'redux-thunk';


export default(initialState) => {
  return createStore(
    rootReducer,
    applyMiddleware(logger, promises(), thunk)
  )
}
