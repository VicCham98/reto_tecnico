import { combineReducers } from 'redux';
import Divisiones from './Division/reducer';

const reducers = combineReducers({
  division: Divisiones,
});

export default reducers;
