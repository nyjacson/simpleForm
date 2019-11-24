import React, { Component } from 'react';
import Stepper from './common/Stepper';
import { Link } from 'react-router-dom'

export default class Step4Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit = () => {
    this.props.initDishes();
  }

  render() {
    return (
      <div>
        <div>
          <Stepper step={4} />
        </div>
        <div>
          <div>
            <p>Meal</p>
            <p>Lunch</p>
          </div>
          <div>
            <p>No. of. People</p>
            <p>Lunch</p>
          </div>
          <div>
            <p>Restaurant</p>
            <p>A</p>
          </div>
          <div>
            <p>Dishes</p>
            <p>
              <span>A</span><span>-</span><span>2</span>
            </p>
          </div>
        </div>
        <div>
          <Link to='step3'>Previous</Link>
          <Link to="" onClick={this.onSubmit}>Submit</Link>
        </div>
      </div>
    );
  }
}
