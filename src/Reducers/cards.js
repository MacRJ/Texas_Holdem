export default(state = [], action) => {
switch (action.type) {
  case 'GET_CARDS_PENDING':
    return "GET_CARDS_PENDING"
  case 'GET_CARDS_FULFILLED':
    return [...action.payload.data.cards]
  default:
    return state;
  }
}
