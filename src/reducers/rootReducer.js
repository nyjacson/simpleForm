import { combineReducers } from 'redux';
import dishes from './dishesReducer';

const rootReducer = combineReducers({
  dishes,
});

export default rootReducer;