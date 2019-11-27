/** @jsx jsx */
import { css } from '@emotion/core'

export const baseBox = css`{
  border: 1px #999999 solid;
  border-radius: 3px;
  color: #333333;
  height: 35px;
  line-height: 35px;
  width: 250px;
  font-size: 15px;

  &:hover {
    border-color: #cccccc;
  }
}`

export const baseButton = css`{
  border-radius: 3px;
  height: 35px;
  line-height: 35px;
  font-size: 15px;
  width: 120px;
  }
`

export const label = css`{
  font-size: 13px;
  text-align: left;
  }
`
