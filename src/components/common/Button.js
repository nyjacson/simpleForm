// @flow
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { baseButton } from './Styles';

type Props = {
  isDisabled?: boolean,
  label: string
}

const style = css`
  button {
    ${baseButton}
    background: #0336ff;
    color: #ffffff;
    font-weight: bold;
    padding: 0 20px;
    width: 250px;

    &:disabled {
      background-color: #efefef;
      color: #aaaaaa;
    }
  }
`

function Button({ isDisabled, label }: Props) {
  return (
    <div css={style}>
      <button disabled={isDisabled}>{label}</button>
    </div>
  );
}

export default Button;
