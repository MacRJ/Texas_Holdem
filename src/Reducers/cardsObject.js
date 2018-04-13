import {DEFAULT_KEY, generateCacheTTL} from 'redux-cache';

const initialState = {
  [DEFAULT_KEY]: null
}


export default(state = initialState, action) => {
switch (action.type) {
  case 'GET_DECK_FULFILLED': {
    return {
      ...state,
      [DEFAULT_KEY]: generateCacheTTL(),
      results: action.payload
    };
  }
  case 'ERROR_GETTING_DECKID': {
     return {
       ...state,
       results: action.payload
     }
  }

  default: {
    return state;
    }    
  }
}
