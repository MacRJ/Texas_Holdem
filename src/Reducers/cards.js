import {DEFAULT_KEY, generateCacheTTl} from 'redux-cache';

const initialState = {
  [DEFAULT_KEY]: null
}


export default(state = initialState, action) => {
switch (action.type) {
  case 'GET_CARDS_FULFILLED': {
    return {
        ...state,
        [DEFAULT_KEY]: generateCacheTTl(),
        results: action.payload.data.cards
    };
  }
  case 'ERROR_GETTING_CARDS': {
    return {
        ...state,
        results: action.payload.data
    }
  }
    default: {
      return state;
    }
  }
}
