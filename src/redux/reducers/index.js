/* eslint-disable import/no-named-as-default */
import { combineReducers } from 'redux';
import data from './movies.reducer';
import hero from './hero.reducer';

export default combineReducers({
  data,
  hero,
});
