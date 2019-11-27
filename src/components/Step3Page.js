/** @jsx jsx */
import { Component } from 'react';
import { css, jsx } from '@emotion/core'
import Stepper from './common/Stepper';
import Select from './common/Select';
import Button from './common/Button';
import Input from './common/Input';
import { Link } from 'react-router-dom'
import { label } from './common/Styles';

export default class Step3Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: props.order.length > 0 ? props.order : [
        {
          numberOfServings: props.numberOfServings || 0,
          selectedDish: props.selectedDish || '',
        }
      ],
      sectionCount: props.sectionCount || 1,
      isDisabled: true
    };
  }

  componentDidMount() {
    this.checkIsDisabled();
  }

  checkIsDisabled = () => {
    if (this.state.order.length === this.state.sectionCount) {
      const list = this.state.order.filter(o => {
        return o.numberOfServings && o.selectedDish
      })
      if (list.length === this.state.sectionCount) {
        this.setState({isDisabled: false})
      } else {
        this.setState({isDisabled: true})
      }
    } else {
      this.setState({isDisabled: true})
    }
  }

  onChangeHandle = (e, i) => {
    const order = this.state.order;
    switch (e.target.name) {
      case 'select':
        order[i] ? order[i].selectedDish = e.target.value : order[i] = {selectedDish: e.target.value}
        break;
      case 'input':
        order[i] ? order[i].numberOfServings = e.target.value : order[i] = {numberOfServings: e.target.value}
        break;
      default: return null
    }
    this.checkIsDisabled();
    this.setState({
      order: order
    });
  };

  onClickIncrease = () => {
    let count = this.state.sectionCount + 1
    this.setState({
      sectionCount: count
    }, () => {
      this.checkIsDisabled();
    })
  }

  onClickNext = () => {
    this.props.updateUserInput3(this.state)
  }

  render() {
    const buttonArea = css`{
      display: flex;
      justify-content: space-between;
    }`;

    const section = css`{
      margin-bottom: 30px;
      border-bottom: #999999 dotted 1px;
    }`

    const inputSection = [];
    for (let i=0; i < this.state.sectionCount; i++) {
      const options = this.props.dishesList.map((d, idx) => {
        return <option key={idx} value={d.name} name="select">{d.name}</option>
      })
      const contents = (
        <div key={i} css={section}>
          <p css={label}>Please select a Dish</p>
          <Select name="select" onChange={e => this.onChangeHandle(e, i)} defaultValue={(this.state.order[i] && this.state.order[i].selectedDish) || "default"}>
            <option value="default" disabled hidden>------</option>
            {options}
          </Select>
          <p css={label}>Please Enter Number of Servings</p>
          <Input type="number" name="input" onChange={e => this.onChangeHandle(e, i)} value={(this.state.order[i] && this.state.order[i].numberOfServings) || 0} />
        </div>
      )
      inputSection.push(contents)
    }

    const floatingButton = css`{
      margin-bottom: 30px;
      height: 35px;
      width: 35px;
      border-radius: 50%;
      background: #1DE9B6;
      color: #ffffff;
      box-shadow: 2px 4px 10px rgba(0,0,0,.2);
      outline: none;
    }`;

    return (
      <div>
        <div>
          <Stepper step={2} />
        </div>
        <div>
          {inputSection}
          <div><button css={floatingButton} onClick={this.onClickIncrease}>+</button></div>
        </div>
        <div css={buttonArea}>
          <Link to='step2'><Button label="Previous"/></Link>
          <Link to='step4' onClick={this.onClickNext}><Button label="Next" isDisabled={this.state.isDisabled}/></Link>
        </div>
      </div>
    );
  }
}
