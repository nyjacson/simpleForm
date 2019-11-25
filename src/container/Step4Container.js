import React, { Component } from 'react'
import { connect } from 'react-redux'
import Step4Page from '../components/Step4Page'
import { submitAction } from '../actions/userInputAction'

class Step4Container extends Component {
  render() {
    const { userInput, submit } = this.props;
    return (
      <Step4Page userInput={userInput} submit={submit} />
    );
  }
}

const mapStateToProps = state => {
  return {
    userInput: state.userInput
  };
}

const mapDispatchToProps = dispatch => ({
  submit: () => dispatch(submitAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step4Container)