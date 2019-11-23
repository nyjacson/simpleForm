import React, { PropTypes } from 'react';

function Stepper({ step }) {
  console.log('step', step);
  return (
    <div>
      <ul>
        <li>Step 1</li>
        <li>Step 2</li>
        <li>Step 3</li>
        <li>Review</li>
      </ul>
    </div>
  );
}

// Stepper.propTypes = {
//   Step: PropTypes.number.isRequired
// };

export default Stepper;
