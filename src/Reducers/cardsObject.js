export default(state = [], action) => {
switch (action.type) {
  case 'GET_DECK_FULFILLED':
    return action.payload
  case 'ERROR_GETTING_DECKID':
    return action.payload
  default:
      return state
  }
}
