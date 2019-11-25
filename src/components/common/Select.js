/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const button = css`
  button {
    background: #03dac5;
    padding: 0 20px;
    border-radius: 3px;
    height: 35px;
    line-height: 35px;

    &:disabled {
      background-color: #efefef;
      color: #aaaaaa;
    }
  }
`

function Select({ isDisabled, label }) {
  return (
    <div css={button}>
      <select disabled={isDisabled}>{label}</select>
    </div>
  );
}

export default Select;
