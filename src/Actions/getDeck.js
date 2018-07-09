import axios from 'axios';
import {checkCacheValid} from 'redux-cache';

export const getCards = (numberOfDecks) => (dispatch, getState) => {
  const isCacheValid = checkCacheValid(getState, 'cards');
  if (isCacheValid) {return null;}

  dispatch({
    type: 'GET_CARDS_CACHED'
  });

  axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=' + numberOfDecks)
  .then((deckObject) => {
    var deckId = deckObject.data.deck_id;
      test(deckId)
      dispatch({type: "GET_DECK_FULFILLED",
                payload: deckId});
  })
  .catch((error) => {
    dispatch({
      type: 'ERROR_GETTING_DECKID',
      payload: error,
    })
  })

  function test(deckId) {
    var cardCount = numberOfDecks * 52
    axios.get('https://deckofcardsapi.com/api/deck/'+ deckId + '/draw/?count=' + cardCount)
    .then((cards) => {
      console.log("cards", cards)
      if(cards !== undefined) {
        dispatch({type: "GET_CARDS_FULFILLED", payload: cards.data.cards})
      }
    })
    .catch((error) => {
      dispatch({
        type: 'ERROR_GETTING_CARDS',
        payload: error,
      })
    })
  }
}

export const debug = (dispatch, getState) => {
  var deckId = null;
  axios.get('https://deckofcardsapi.com/api/deck/' + deckId + '/draw/?count=' + '156')
  .then((cards) => {
    dispatch({type: "GET_CARDS_FULFILLED", payload: cards.data.cards})
  })
  .catch((error) => {
    dispatch({
      type: 'ERROR_GETTING_CARDS',
      payload: error,
    })
  })
}
