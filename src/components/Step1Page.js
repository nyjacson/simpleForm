/** @jsx jsx */
import { Component } from 'react';
import { css, jsx } from '@emotion/core'
import Stepper from './common/Stepper';
import Button from './common/Button';
import Select from './common/Select';
import Input from './common/Input';
import { Link } from 'react-router-dom';
import { label } from './common/Styles';

export default class Step1Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMeal: props.userInput.selectedMeal || "",
      numberOfPeople: props.userInput.numberOfPeople || 0
    };
  }

  componentDidMount() {
    this.props.initDishes();
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

  onClickNext = () => {
    this.props.updateUserInput1(this.state)
  }

  render() {
    const buttonArea = css`{
      text-align: right;
    }`;

    return (
      <div>
        <div>
          <Stepper step={0} />
        </div>
        <p css={label}>Please select a meal</p>
        <Select name="meal" id="meal" onChange={this.onChangeSelect} defaultValue={this.state.selectedMeal || "default"}>
          <option value="default" disabled hidden>------</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </Select>
        <p css={label}>Please Enter Number of Table</p>
        <Input type="number" onChange={this.onChangeInput} value={this.state.numberOfPeople} />
        <div css={buttonArea}>
          <Link to='step2' onClick={this.onClickNext}><Button label="Next" isDisabled={!this.state.numberOfPeople || !this.state.selectedMeal}/></Link>
        </div>
      </div>
    );
  }
}
