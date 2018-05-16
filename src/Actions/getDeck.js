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
    axios.get('https://deckofcardsapi.com/api/deck/'+ deckId + '/draw/?count=2')
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
