import axios from 'axios';
import * as Dishes from '../constants/dishesConst';

export const initDishesAction = () => {
  return dispatch => {
    axios.get('http://localhost:3001/dishes').then(
      response => {
        console.log(response.data);
        dispatch({
          type: Dishes.INIT_DISHES,
          items: response.data
      })}
    ).catch(
      (e) => console.log('error', e)
    );
  }

}
