/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const button = css`
  button {
    background: #ffffff;
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

function Button({ isDisabled, label }) {
  return (
    <div css={button}>
      <button disabled={isDisabled}>{label}</button>
    </div>
  );
}

export default Button;
