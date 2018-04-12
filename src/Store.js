import {compose, applyMiddleware, createStore} from 'redux';
import rootReducer from './Reducers';
import logger from 'redux-logger';
import promises from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import {cacheEnhancer} from 'redux-cache'


export default(initialState) => {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(logger, promises(), thunk),
      cacheEnhancer()
    )

  )
}
