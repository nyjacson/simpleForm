import React, { Component } from 'react'
import { connect } from 'react-redux'
import Step3Page from '../components/Step3Page'
import { updateUserInput3 } from '../actions/userInputAction'
import { getDishList } from '../selector/userInputSelector';

class Step3Container extends Component {
  render() {
    const { dishesList, updateUserInput3 } = this.props;
    return (
      <Step3Page dishesList={dishesList} updateUserInput3={updateUserInput3} />
    );
  }
}

const mapStateToProps = state => {
  return {
    dishesList: getDishList(state)
  };
}

const mapDispatchToProps = dispatch => ({
  updateUserInput3: (selected) => dispatch(updateUserInput3(selected)) 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step3Container)