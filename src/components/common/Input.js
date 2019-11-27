// @flow
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { baseBox } from './Styles';

type Props = {
  type: string,
  label: string,
  onChange: function,
  value: string,
  name: string
}

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

function Input({ type, label, onChange, value, name }: Props) {
  return (
    <div css={style}>
      <input type={type} onChange={onChange} value={value} name={name || ''} />
    </div>
  );
}

export default Input;
