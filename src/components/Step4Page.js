// @flow
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Stepper from './common/Stepper';
import Button from './common/Button';
import { Link } from 'react-router-dom'

type Props = {
  userInput: Object,
  submit: Function
};

export default function Step4Page(props: Props) {
  const onSubmit = () => {
    props.submit();
  }

  const buttonArea = css`{
    display: flex;
    justify-content: space-between;
  }`;

  const displaySection = css`{
    > div {
      display: flex;
      margin-bottom: 25px;
      font-size: 13px;

      > p:first-of-type {
        width: 95px;
        font-weight: bold;
        text-align: right;
        margin-right: 10px;
      }

      .dishesTitle {
        padding-top: 10px;
      }

      .dishes {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        width: 140px;
        background: #efefef;
      }
    }
  }`;

  return(
    <div>
      <Stepper step={3} />
      <div css={displaySection}>
        <div><p>Meal</p><p>{props.userInput.selectedMeal || ""}</p></div>
        <div><p>No. of People</p><p>{props.userInput.numberOfPeople || ""}</p></div>
        <div><p>Restaurant</p><p>{props.userInput.restaurant || ""}</p></div>
        <div><p className="dishesTitle">Dishes</p><div>{props.userInput.order && props.userInput.order.map((o, i) => {
          return <div key={i} className="dishes"><p>{o.selectedDish}</p><span> - </span><p>{o.numberOfServings}</p></div>
        })}</div></div>
      </div>
      <div css={buttonArea}>
        <Link to='step3'><Button label="Previous"/></Link>
        <Link to="step4" onClick={onSubmit}><Button label="Submit"/></Link>
      </div>
    </div>
  )
}
