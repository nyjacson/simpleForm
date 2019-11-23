import React, { Component } from 'react'
import { connect } from 'react-redux'
import Step1Page from '../components/Step1Page'
import { initDishesAction } from '../actions/dishesAction'

class Step1Container extends Component {
  render() {
    const { dishesList, initDishes } = this.props;
    return (
      <Step1Page dishesList={dishesList} initDishes={initDishes} />
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state.dishes)
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
)(Step1Container)