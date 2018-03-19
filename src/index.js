import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();

// import {createStore} from 'redux';
//
// function users(state = [], action) {
//   if(action.type === 'ADD_USER') {
//     return [
//       ...state,
//       action.payload
//     ]
//   }
//   return state;
// }
//
// const store = createStore(users);
//
// const list = document.querySelectorAll('.list')[0];
// const userInput = document.querySelectorAll('.userInput')[0];
// const addUserBtn = document.querySelectorAll('.addUser')[0];
//
// store.subscribe(() => {
//   list.innerHTML = '';
//   document.querySelectorAll('.userInput')[0].value = '';
//   store.getState().forEach(user => {
//     const li = document.createElement('li');
//     li.textContent = user
//     list.appendChild(li);
//   })
// });
//
// addUserBtn.addEventListener('click', () => {
//   const userName = userInput.value;
//   store.dispatch({type: 'ADD_USER', payload: userName});
// });
