var AIPlayerNames = [
  "Steve",
  "Adam",
  "Richard",
  "Mike",
  "Cody"
]

export default(state= [AIPlayerNames], action) => {
  switch (action.type) {
    case 'ADD_PLAYER': {
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
