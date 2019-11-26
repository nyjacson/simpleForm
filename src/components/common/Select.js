/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const select = css`
  select {
    background: #ffffff;
    padding: 0 20px;
    height: 35px;
    line-height: 35px;
  }
`

function Select({ children, name, id, onChange, defaultValue}) {
  return (
    <div css={select}>
      <select name={name} id={id} onChange={onChange} defaultValue={defaultValue}>{children}</select>
    </div>
  );
}

export default Select;
