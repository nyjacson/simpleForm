import axios from 'axios';
import * as constants from '../constants/const';

export const initDishesAction = () => {
  return dispatch => {
    axios.get('http://localhost:3001/dishes').then(
      response => {
        dispatch({
          type: constants.INIT_DISHES,
          items: response.data
      })}
    ).catch(
      (e) => console.log('error', e)
    );
  }

}
