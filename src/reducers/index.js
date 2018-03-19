import {combineReducers} from 'redux';

import users from './users';
import articles from './articles';
import candidates from './candidates';
import filterCandidates from './filterCandidates';


export default combineReducers({
  users,
  articles,
  candidates,
  filterCandidates
})
