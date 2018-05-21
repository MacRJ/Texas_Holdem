import {combineReducers} from 'redux';
import cardsObject from './cardsObject';
import cards from './cards';
import players from './players';


const rootReducer = combineReducers({
  cardsObject,
  cards,
  players
})




export default rootReducer;
