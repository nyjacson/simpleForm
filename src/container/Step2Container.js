import React, { Component } from 'react'
import { connect } from 'react-redux'
import Step2Page from '../components/Step2Page'
import { initDishesAction } from '../actions/dishesAction'

class Step2Container extends Component {
  render() {
    const { dishesList, initDishes } = this.props;
    return (
      <Step2Page dishesList={dishesList} initDishes={initDishes} />
    );
  }
}

const mapStateToProps = state => {
  console.log('test')
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
)(Step2Container)