import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios';
import { initDishesAction } from '../dishesAction';
import * as constants from '../../constants/const';

jest.mock('axios');
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Actions (dishesAction)', () => {
  it('should initDishesAction works', () => {
    const store = mockStore({ dishes: [] })

    const resp = {
      data: {
        id: 2,
        name: "Ham Burger",
        restaurant: "Mc Donalds",
        availableMeals: ["lunch", "dinner"]
      }
    };

    const expectedActions = [
      { type: constants.INIT_DISHES, items: resp.data }
    ]

    axios.get.mockResolvedValue(resp);
    return store.dispatch(initDishesAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });
})

