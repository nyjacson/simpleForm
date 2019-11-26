/** @jsx jsx */
import {css, jsx} from '@emotion/core'

const style = css`
  {
    border: solid 1px #ff0266;
    color: #ff0266;
    list-style: none;
    display: inline-flex;
    margin-bottom: 25px;
    font-size: 12px;

    > li {
      padding: 5px 10px;
      border-right: solid 1px #ff0266;

      &:last-child {
        border-right: none;
      }
    }
  }
`
const selected = css`
  {
    background: #ff0266;
    color: #ffffff;
    box-shadow: 2px 4px 10px rgba(0,0,0,.2);
  }
`

function Stepper({ step }) {
  const stepList = ['Step 1', 'Step 2', 'Step 3', 'Review']
  return (
    <div>
      <ul css={style}>
        {stepList.map((s, index) => {
          return <li key={index} css={index === step ? selected : undefined}>{s}</li>
        })}
      </ul>
    </div>
  );
}

export default Stepper;
