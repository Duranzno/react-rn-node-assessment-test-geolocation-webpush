import React from 'react'
// import cx from 'classnames'
import { LikertRow } from "./LikertRow.component"
interface Props {
  options: string[];
  onClick: Function;
}
export const Likert: React.SFC<Props> = ({ onClick, options }) => {
  return (
    <div>
      {options.map((option,index) => (
        <LikertRow
          key={option}
          option={`${index+1}. ${option}`}
          onChange={(label: string): void => {
            onClick(label, option)
          }}
          value=" "
        />
      ))}
    </div>
  )
}
