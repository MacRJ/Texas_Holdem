import axios from 'axios';
import Store from '../Store.js';
import {checkCacheValid} from 'redux-cache';

export const getCards = () => (dispatch, getState) => {
  const isCacheValid = checkCacheValid(getState, 'cards');
  if (isCacheValid) {return null;}

  dispatch({
    type: 'GET_CARDS_FULFILLED'
  });

Store.dispatch((dispatch) => {
  axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2')
  .then((deckObject) => {
    var deckId = deckObject.data.deck_id;
    test(deckId)
    dispatch({type: "GET_DECK_FULFILLED", payload: deckId});
  })
  .catch((error) => {
    dispatch({
      type: 'ERROR_GETTING_DECKID',
      payload: error,
    })
  })
})

function test(deckId){
  Store.dispatch((dispatch) => {
    axios.get('https://deckofcardsapi.com/api/deck/'+ deckId + '/draw/?count=2')
    .then((cards) => {
      console.log("cards", cards)
      if(cards.data !== undefined) {
        store.dispatch({type: "GET_CARDS_FULFILLED", payload: cards})
      }
    })
    .catch((error) => {
      dispatch({
        type: 'ERROR_GETTING_CARDS',
        payload: error,
      })
    })
  })
}
}
