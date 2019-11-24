import React, { Component } from 'react'
import { connect } from 'react-redux'
import Step1Page from '../components/Step1Page'
import { initDishesAction } from '../actions/dishesAction'
import { updateUserInput1 } from '../actions/userInputAction'

class Step1Container extends Component {
  render() {
    const { dishes, initDishes, updateUserInput1, userInput } = this.props;
    return (
      <Step1Page dishes={dishes} initDishes={initDishes} updateUserInput1={updateUserInput1} userInput={userInput} />
    );
  }
}

const mapStateToProps = state => {
  return {
    userInput: state.userInput
  };
}

const mapDispatchToProps = dispatch => ({
  initDishes: () => dispatch(initDishesAction()),
  updateUserInput1: (step1Input) => {
    dispatch(updateUserInput1(step1Input))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step1Container)