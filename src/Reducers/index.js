import {combineReducers} from 'redux';
import cardsObject from './cardsObject';
import cards from './cards';


const rootReducer = combineReducers({
  cardsObject,
  cards
})




export default rootReducer;
