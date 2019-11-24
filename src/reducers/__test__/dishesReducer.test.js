import reducer, { initialState } from '../dishesReducer';
import * as constants from '../../constants/const';

const testData = {
  "dishes":[
     {
        "id": 1,
        "name": "Chicken Burger",
        "restaurant": "Mc Donalds",
        "availableMeals": "lunch"
      }
  ]
}

describe('Reducer: dishes', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle INIT_DISHES', () => {
    const data = reducer(initialState, {
      type: constants.INIT_DISHES,
      items: testData
    })
    expect(
      data.items
    ).toEqual(
      testData
    );
  });
})