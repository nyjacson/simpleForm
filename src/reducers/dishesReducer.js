import * as Dishes from '../constants/dishesConst';

const initialState = {
  dishesList: []
};

export default function dishes(state = initialState, action) {
  switch (action.type) {
    case Dishes.INIT_DISHES:
      const items = action.items;
      return Object.assign({}, state, {
        list: items
      });
    default:
      return state;
  }
}
