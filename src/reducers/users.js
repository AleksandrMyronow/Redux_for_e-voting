const initialState = [
  'Sasha',
  'Aproximo'
]

export default function users(state = initialState, action) {
  if(action.type === 'ADD_USER') {
    return [
      ...state,
      action.payload
    ]
  }
  return state;
}
