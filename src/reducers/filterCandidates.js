const initialState = '';

export default function filterCandidates(state = initialState, action) {
  if(action.type === 'FIND_CANDIDATES') {
    return [
      action.payload
    ]
  }
  return state;
}
