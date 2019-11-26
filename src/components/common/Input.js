/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { baseBox } from './Styles';

const style = css`
  input {
    ${baseBox}
    background: #ffffff;
    padding: 0 20px;
    margin-bottom: 25px;
    outline: none;

    &:disabled {
      background-color: #efefef;
      color: #aaaaaa;
    }
  }
`

function Input({ type, label, onChange, value, name }) {
  return (
    <div css={style}>
      <input type={type} onChange={onChange} value={value} name={name || ''} />
    </div>
  );
}

export default Input;
