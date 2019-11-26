import reducer, { initialState } from '../userInputReducer';
import * as constants from '../../constants/const';

const testSeed = {
  selectedMeal: "",
  numberOfPeople: 0,
  order: [],
  restaurant: ""
}

const testSeed2 = "Blue ocean"

const testExpected2 = {
  selectedMeal: "",
  numberOfPeople: 0,
  order: [],
  restaurant: "Blue ocean"
}

describe('Reducer: userInput', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle USER_INPUT_1', () => {
    const returned = reducer(initialState, {
      type: constants.USER_INPUT_1,
      data: testSeed
    })
    expect(
      returned
    ).toEqual(
      testSeed
    );
  });

  it('should handle USER_INPUT_2', () => {
    const returned = reducer(initialState, {
      type: constants.USER_INPUT_2,
      data: testSeed2
    })
    expect(
      returned
    ).toEqual(
      testExpected2
    );
  });

  it('should handle USER_INPUT_3', () => {
    const returned = reducer(initialState, {
      type: constants.USER_INPUT_3,
      data: testSeed
    })
    expect(
      returned
    ).toEqual(
      testSeed
    );
  });
})