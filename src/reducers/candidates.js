const initialState = [];

export default function candidates(state = initialState, action) {
  if(action.type === 'ADD_CANDIDATES') {
    return [
      ...state,
      action.payload
    ]
  }
  return state;
}
