import React, { Component } from 'react';
import Stepper from './common/Stepper';
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
      return <option key={idx} value={r.restaurant}>{r.restaurant}</option>
    })
    return (
      <div>
        <div>
          <Stepper step={3} />
        </div>
        <p>Please select a Restaurant</p>
        <select name="meal" id="meal" onChange={this.onChangeSelect} defaultValue={this.state.selectedRestaurant}>
          {options}
        </select>
        <div>
          <Link to='/'>Previous</Link>
          <Link to='step3' onClick={this.onClickNext}>Next</Link>
        </div>
      </div>
    );
  }
}
