import React from 'react';
import Stepper from './common/Stepper';
import { Link } from 'react-router-dom'

export default function Step4Page(props) {
  const onSubmit = () => {
    props.submit();
  }

  return(
    <div>
      <Stepper step={4} />
      <div>
        <div><p>Meal</p><p>{props.userInput.selectedMeal || ""}</p></div>
        <div><p>No. of People</p><p>{props.userInput.numberOfPeople || ""}</p></div>
        <div><p>Restaurant</p><p>{props.userInput.restaurant || ""}</p></div>
        {/* <div><p>Dishes</p><div>{props.userInput.order || ""}</div></div> */}
      </div>
      <div>
        <Link to='step3'>Previous</Link>
        <Link to="step4" onClick={onSubmit}>Submit</Link>
      </div>
    </div>
  )
}
