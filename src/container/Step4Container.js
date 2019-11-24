import React, { Component } from 'react'
import { connect } from 'react-redux'
import Step4Page from '../components/Step4Page'
import { initDishesAction } from '../actions/dishesAction'

class Step4Container extends Component {
  render() {
    const { dishesList, initDishes } = this.props;
    return (
      <Step4Page dishesList={dishesList} initDishes={initDishes} />
    );
  }
}

const mapStateToProps = state => {
  return {
    dishesList: state.dishes
  };
}

const mapDispatchToProps = dispatch => ({
  initDishes: () => dispatch(initDishesAction()) 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step4Container)