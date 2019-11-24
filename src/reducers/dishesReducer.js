import * as constants from '../constants/const';

export const initialState = {
  items: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.INIT_DISHES:
      const items = action.items;
      return Object.assign({}, state, {
        items: items
      });
    default:
      return state;
  }
}
