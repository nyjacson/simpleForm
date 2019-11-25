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

export function updateUserInput3(step3Input) {
  return {
    type: constants.USER_INPUT_3,
    data: step3Input
  }
}

export const submitAction = () => {
  return (dispatch, getState) => {
    const state = getState();
    const submitData = {
      meal: state.userInput.selectedMeal,
      numberOfPeople: state.userInput.numberOfPeople,
      restaurant: state.userInput.restaurant,
      dishes: state.userInput.order
    }
    console.log('submit Data:', JSON.stringify(submitData))
  }
}
