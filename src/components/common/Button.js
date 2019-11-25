import React from 'react';

function Button({ isDisabled, label }) {
  return (
      <button disabled={isDisabled}>{label}</button>
  );
}

export default Button;
