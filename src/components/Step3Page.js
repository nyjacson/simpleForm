import React, { Component } from 'react';
import Stepper from './common/Stepper';
import Select from './common/Select';
import Button from './common/Button';
import { Link } from 'react-router-dom'

export default class Step3Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: props.order || [
        {
          numberOfServings: props.numberOfServings || 0,
          selectedDish: props.selectedDish || '',
        }
      ],
      sectionCount: props.sectionCount || 1,
      isDisabled: true
    };
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
    const inputSection = [];
    for (let i=0; i < this.state.sectionCount; i++) {
      const options = this.props.dishesList.map((d, idx) => {
        return <option key={idx} value={d.name} name="select" selected={d.name === (this.state.order[i] && this.state.order[i].selectedDish)}>{d.name}</option>
      })
      const contents = (
        <div>
          <p>Please select a Dish</p>
          <Select name="select" onChange={e => this.onChangeHandle(e, i)}>
            <option selected disabled hidden>------</option>
            {options}
          </Select>
          <p>Please Enter Number of Servings</p>
          <input type="number" name="input" onChange={e => this.onChangeHandle(e, i)} value={this.state.order[i] && this.state.order[i].numberOfServings} />
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
          {inputSection}
          <div><button onClick={this.onClickIncrease}>+</button></div>
        </div>
        <div>
          <Link to='step2'><Button label="Previous"/></Link>
          <Link to='step4' onClick={this.onClickNext}><Button label="Next" isDisabled={this.state.isDisabled}/></Link>
        </div>
      </div>
    );
  }
}
