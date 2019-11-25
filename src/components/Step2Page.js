import React, { Component } from 'react';
import Stepper from './common/Stepper';
import Button from './common/Button';
import { Link } from 'react-router-dom'

export default class Step2Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRestaurant: props.selectedRestaurant || ""
    };
  }

  onChangeSelect = e => {
    this.setState({
      selectedRestaurant: e.target.value
    });
  };

  onClickNext = () => {
    this.props.updateUserInput2(this.state.selectedRestaurant)
  }

  render() {
    const options = this.props.restaurantList.map((r, idx) => {
      return <option key={idx} value={r.restaurant} selected={r.restaurant === this.state.selectedRestaurant}>{r.restaurant}</option>
    })
    return (
      <div>
        <div>
          <Stepper step={3} />
        </div>
        <p>Please select a Restaurant</p>
        <select name="restaurant" id="restaurant" onChange={this.onChangeSelect}>
          <option selected disabled hidden>------</option>
          {options}
        </select>
        <div>
          <Link to='/'><Button label="Previous"/></Link>
          <Link to='step3' onClick={this.onClickNext}><Button label="Next" isDisabled={!this.state.selectedRestaurant}/></Link>
        </div>
      </div>
    );
  }
}
