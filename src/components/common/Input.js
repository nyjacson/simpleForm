/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const input = css`
  input {
    background: #ffffff;
    padding: 0 20px;
    border-radius: 3px;
    font-size: 16px;
    height: 35px;
    line-height: 35px;
    outline: none;
    appearance: none;
    -webkit-appearance: none;

    &:disabled {
      background-color: #efefef;
      color: #aaaaaa;
    }
  }
`

function Input({ type, label, onChange, value }) {
  return (
    <div css={input}>
      <input type={type} onChange={onChange} value={value} />
    </div>
  );
}

export default Input;
