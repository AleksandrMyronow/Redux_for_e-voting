let ApiData = [
  {
    id: 1,
    name: 'Hello from Ukraine'
  },
  {
    id: 2,
    name: 'Hello from USA'
  },
  {
    id: 3,
    name: 'Hello from Germany'
  }
]

export const getArticles = () => dispatch => {
    setTimeout(() => {
      console.log('articles');
      dispatch({type: 'FETCH_ARTICLES_SUCCESS', payload: ApiData});
    }, 1000)
}
