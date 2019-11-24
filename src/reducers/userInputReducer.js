import * as constants from '../constants/const';

export const initialState = {
  selectedMeal: "",
  numberOfPeople: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.USER_INPUT_1:
      return Object.assign({}, state, {
        ...action.data
      });
    case constants.USER_INPUT_2:
        return Object.assign({}, state, {
          restaurant: action.data
        });
    case constants.USER_INPUT_3:
        return Object.assign({}, state, {
          ...action.data
        });
    default:
      return state;
  }
}
