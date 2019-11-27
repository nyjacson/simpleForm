import React, { Component } from 'react'
import { connect } from 'react-redux'
import Step2Page from '../components/Step2Page'
import { updateUserInput2 } from '../actions/userInputAction'
import { getRestrantList } from '../selector/userInputSelector';
import Redirect from '../components/common/Redirect';

class Step2Container extends Component {
  render() {
    const { restaurantList, updateUserInput2, selectedRestaurant } = this.props;
    return (
      <Step2Page restaurantList={restaurantList} updateUserInput2={updateUserInput2} selectedRestaurant={selectedRestaurant} />
    );
  }
}

const mapStateToProps = state => {
  const list = getRestrantList(state);
  return {
    restaurantList: list,
    selectedRestaurant: state.userInput.restaurant,
    redirectFlag: list.length
  };
}

const mapDispatchToProps = dispatch => ({
  updateUserInput2: (selected) => dispatch(updateUserInput2(selected)) 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Redirect(Step2Container))