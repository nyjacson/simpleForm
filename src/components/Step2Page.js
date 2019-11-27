/** @jsx jsx */
import { Component } from 'react';
import { css, jsx } from '@emotion/core'
import Stepper from './common/Stepper';
import Select from './common/Select';
import Button from './common/Button';
import { Link } from 'react-router-dom'
import { label } from './common/Styles';

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
    const buttonArea = css`{
      display: flex;
      justify-content: space-between;
    }`;

    const options = this.props.restaurantList.map((r, idx) => {
      return <option key={idx} value={r}>{r}</option>
    })

    return (
      <div>
        <div>
          <Stepper step={1} />
        </div>
        <p css={label}>Please select a Restaurant</p>
        <Select name="restaurant" id="restaurant" onChange={this.onChangeSelect} defaultValue={this.state.selectedRestaurant || "default"}>
          <option value="default" disabled hidden>------</option>
          {options}
        </Select>
        <div css={buttonArea}>
          <Link to='/'><Button label="Previous"/></Link>
          <Link to='step3' onClick={this.onClickNext}><Button label="Next" isDisabled={!this.state.selectedRestaurant}/></Link>
        </div>
      </div>
    );
  }
}
