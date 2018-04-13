import {DEFAULT_KEY, generateCacheTTL} from 'redux-cache';

const initialState = {
  [DEFAULT_KEY]: null
}


export default(state = initialState, action) => {
switch (action.type) {
  case 'GET_CARDS_FULFILLED': {
    console.log('theaction', action.payload.data)
    return {
        ...state,
        [DEFAULT_KEY]: generateCacheTTL(),
        results: action.payload
    };
  }
  case 'ERROR_GETTING_CARDS': {
    return {
        ...state,
        results: action.payload.data
    }
  }
  case 'GET_CARDS_CACHED': {
    return {
        ...state
    }
  }
    default: {
      return state;
    }
  }
}
