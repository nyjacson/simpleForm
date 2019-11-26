import { updateUserInput1, updateUserInput2, updateUserInput3 } from '../userInputAction';
import * as constants from '../../constants/const';

describe('Actions (userInputAction)', () => {
  it('should updateUserInput1 works', () => {
    const inputState = {
      item: 'item'
    }
    const expectedAction = {
      type: constants.USER_INPUT_1,
      data: inputState
    };
    expect(updateUserInput1(inputState))
      .toEqual(expectedAction);
  });
})

describe('Actions (userInputAction)', () => {
  it('should updateUserInput2 works', () => {
    const inputState = {
      item: 'item'
    }
    const expectedAction = {
      type: constants.USER_INPUT_2,
      data: inputState
    };
    expect(updateUserInput2(inputState))
      .toEqual(expectedAction);
  });
})

describe('Actions (userInputAction)', () => {
  it('should updateUserInput3 works', () => {
    const inputState = {
      item: 'item'
    }
    const expectedAction = {
      type: constants.USER_INPUT_3,
      data: inputState
    };
    expect(updateUserInput3(inputState))
      .toEqual(expectedAction);
  });
})

