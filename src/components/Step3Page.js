import React, { Component } from 'react';
import Stepper from './common/Stepper';
import { Link } from 'react-router-dom'

export default class Step3Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMeal: props.selectedMeal || "Breakfast",
      numberOfPeople: props.numberOfPeople || 0
    };
  }

  onChangeInput = e => {
    this.setState({
      numberOfPeople: e.target.value
    });
  };

  onChangeSelect = e => {
    this.setState({
      selectedMeal: e.target.value
    });
  };

  onSubmit = () => {
    this.props.initDishes();
  }

  render() {
    console.log('dishes', this.props.dishesList)
    return (
      <div>
        <div>
          <Stepper step={3} />
        </div>
        <p>Please select a Dish</p>
        <select name="meal" id="meal" onChange={this.onChangeSelect}>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
        <p>Please Enter Number of Servings</p>
        <input type="number" onChange={this.onChangeInput} value={this.state.numberOfPeople} />
        +
        <div>
          <Link to='step2'>Previous</Link>
          <Link to='step4' onClick={this.onSubmit}>Next</Link>
        </div>
      </div>
    );
  }
}
