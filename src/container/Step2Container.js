import React, { Component } from 'react'
import { connect } from 'react-redux'
import Step2Page from '../components/Step2Page'
import { updateUserInput2 } from '../actions/userInputAction'
import { createSelector } from 'reselect';
var uniq = require('lodash/uniq');
class Step2Container extends Component {
  render() {
    const { restaurantList, updateUserInput2, selectedRestaurant } = this.props;
    return (
      <Step2Page restaurantList={restaurantList} updateUserInput2={updateUserInput2} selectedRestaurant={selectedRestaurant} />
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurantList: getRestrantList(state),
    selectedRestaurant: state.userInput.restaurant
  };
}

const mapDispatchToProps = dispatch => ({
  updateUserInput2: (selected) => dispatch(updateUserInput2(selected)) 
})

const getDishes = state => state.dishes || null;
const getSelectedMeal = state => state.userInput.selectedMeal || null;

const getRestrantList = createSelector(
  [getDishes, getSelectedMeal],
  (dishes, selectedMeal) => {
    let list = dishes.items.filter(d => {
      return d.availableMeals.indexOf(selectedMeal) >= 0 || false
    })
    return uniq(list)
  }
)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step2Container)