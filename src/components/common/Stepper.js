/** @jsx jsx */
import {css, jsx} from '@emotion/core'

function Stepper({ step }) {
  const stepList = ['Step 1', 'Step 2', 'Step 3', 'Review']
  return (
    <div>
      <ul css={css`
        list-style: none;
        padding: 0;
        display: inline-flex;
        border: solid 1px #999999;
        > li {
          padding: 5px 10px;
          border-right: solid 1px #999999;

          &:last-child {
            border-right: none;
          }
        }
      `}>
        {stepList.map((s, index) => {
          return <li key={index}>{s}</li>
        })}
      </ul>
    </div>
  );
}

export default Stepper;
