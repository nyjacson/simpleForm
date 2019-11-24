import { combineReducers } from 'redux';
import dishes from './dishesReducer';
import userInput from './userInputReducer';

const rootReducer = combineReducers({
  dishes,
  userInput
});

export default rootReducer;