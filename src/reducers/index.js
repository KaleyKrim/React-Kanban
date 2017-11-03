import { combineReducers } from 'redux';

import cards from './cards';
import users from './users';
import priorities from './priorities';

export default combineReducers({
  cards,
  users,
  priorities
});