import * as constants from '../constants/const';

export function updateUserInput1(step1Input) {
  return {
    type: constants.USER_INPUT_1,
    data: step1Input
  }
}

export function updateUserInput2(step2Input) {
  return {
    type: constants.USER_INPUT_2,
    data: step2Input
  }
}
