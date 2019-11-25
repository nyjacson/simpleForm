import React, { Component } from 'react'
import { connect } from 'react-redux'
import Step3Page from '../components/Step3Page'
import { updateUserInput3 } from '../actions/userInputAction'
import { getDishList } from '../selector/userInputSelector';

class Step3Container extends Component {
  render() {
    const { dishesList, updateUserInput3, order, sectionCount } = this.props;
    return (
      <Step3Page dishesList={dishesList} updateUserInput3={updateUserInput3} order={order} sectionCount={sectionCount} />
    );
  }
}

const mapStateToProps = state => {
  return {
    dishesList: getDishList(state),
    order: state.userInput.order,
    sectionCount: state.userInput.sectionCount
  };
}

const mapDispatchToProps = dispatch => ({
  updateUserInput3: (order) => dispatch(updateUserInput3(order)) 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step3Container)