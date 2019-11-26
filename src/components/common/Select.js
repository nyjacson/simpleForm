/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { baseBox } from './Styles';

const style = css`{
  select {
    ${baseBox}
    background: #ffffff;
    padding: 0 20px;
    margin-bottom: 25px;
    outline: none;
  }
}`

function Select({ children, name, id, onChange, defaultValue}) {
  return (
    <div css={style}>
      <select name={name} id={id} onChange={onChange} defaultValue={defaultValue}>{children}</select>
    </div>
  );
}

export default Select;
