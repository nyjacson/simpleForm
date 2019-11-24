import React, { Component } from 'react'
import { connect } from 'react-redux'
import Step2Page from '../components/Step2Page'
import { updateUserInput2 } from '../actions/userInputAction'
import { getRestrantList } from '../selector/userInputSelector';
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step2Container)