import React from 'react'
import { LikertUnit } from "./LikertUnit.component"
import { strings } from "../../constant"
export const LikertRow: React.SFC<{
    option: string;
    onChange: Function;
    value: string;
  }> = ({ option, onChange, value }) => (
    <div>
      <p className="font-sans text-lg font-extrabold">{option}</p>
      <div className="flex flex-row flex-no-wrap">
      {strings.scale.map((label) => (
        <LikertUnit
          key={label}
          label={label}
          value={value}
          onClick={onChange}
        ></LikertUnit>
      ))}
      </div>
    </div>
  )