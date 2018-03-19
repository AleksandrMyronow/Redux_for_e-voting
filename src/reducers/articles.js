const initialState = [];

export default function articles(state = initialState, action) {
  if(action.type === 'ADD_ARTICLES') {
    return [
      ...state,
      action.payload
    ]
  } else if (action.type === 'FETCH_ARTICLES_SUCCESS') {
    return [
        action.payload
    ]
  }
  return state;
}
