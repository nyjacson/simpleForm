import React, { Component } from 'react';
import Stepper from './common/Stepper';
import { Link } from 'react-router-dom'

export default class Step3Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // dishesList: props.dishesList || [],
      order: [
        {
          numberOfServings: props.numberOfServings || 0,
          selectedDish: props.selectedDish || '',
        }
      ],
      sectionCount: 1
    };
  }

  onChangeInput = e => {
    this.setState({
      numberOfServings: e.target.value
    });
  };

  onChangeSelect = e => {
    this.setState({
      selectedDish: e.target.value
    });
  };

  onClickNext = () => {
    this.props.updateUserInput3(this.state.selectedRestaurant)
  }

  render() {
    const options = this.props.dishesList.map((d, idx) => {
      return <option key={idx} value={d.name}>{d.name}</option>
    })

    const inputSection = [];
    for (let i=0; i < this.state.sectionCount; i++) {
      const contents = (
        <div>
          <p>Please select a Dish</p>
          <select name="dish" id="dish" onChange={this.onChangeSelect}>
            {options}
          </select>
          <p>Please Enter Number of Servings</p>
          <input type="number" onChange={this.onChangeInput} value={this.state.numberOfServings} />
          <div>+</div>
        </div>
      )
      inputSection.push(contents)
    }

    return (
      <div>
        <div>
          <Stepper step={3} />
        </div>
        <div>
          {/* <p>Please select a Dish</p>
          <select name="dish" id="dish" onChange={this.onChangeSelect}>
            {options}
          </select>
          <p>Please Enter Number of Servings</p>
          <input type="number" onChange={this.onChangeInput} value={this.state.numberOfServings} />
          <div>+</div> */}
          {inputSection}
        </div>
        <div>
          <Link to='step2'>Previous</Link>
          <Link to='step4' onClick={this.onClickNext}>Next</Link>
        </div>
      </div>
    );
  }
}
