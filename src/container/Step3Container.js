import React, { Component } from 'react'
import { connect } from 'react-redux'
import Step3Page from '../components/Step3Page'
import { initDishesAction } from '../actions/dishesAction'

class Step3Container extends Component {
  render() {
    const { dishesList, initDishes } = this.props;
    return (
      <Step3Page dishesList={dishesList} initDishes={initDishes} />
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
)(Step3Container)