/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { baseBox } from './Styles';

const style = css`{
  position: relative;
  select {
    ${baseBox}
    background: #ffffff;
    padding: 0 20px;
    margin-bottom: 25px;
    outline: none;
  }

  img {
    position: absolute;
    width: 13px;
    height: 20px;
    top: 8px;
    right: 10px;
  }
}`

function Select({ children, name, id, onChange, defaultValue}) {
  return (
    <div css={style}>
      <select name={name} id={id} onChange={onChange} defaultValue={defaultValue}>{children}</select>
      <img src={`${process.env.PUBLIC_URL}/arrowDown.svg`} alt="arrow" />
    </div>
  );
}

export default Select;
