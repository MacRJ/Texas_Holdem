import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './Store';
import {Provider} from 'react-redux';
import axios from 'axios'

let store = new Store()

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
  , document.getElementById('root'));

  store.dispatch((dispatch) => {
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2')
    .then((deckObject) => {

      var deckId = deckObject.data.deck_id;

      test(deckId)
      dispatch({type: "GET_DECK_FULFILLED", payload: deckId});
    })
  })

  function test(deckId){
    store.dispatch((dispatch) => {
      axios.get('https://deckofcardsapi.com/api/deck/'+ deckId + '/draw/?count=2')
      .then((cards) => {
        console.log("cards", cards)
        if(cards.data !== undefined) {
          store.dispatch({type: "GET_CARDS_FULFILLED", payload: cards})
        }
      })
    })

  }
