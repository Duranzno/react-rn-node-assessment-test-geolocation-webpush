import React from 'react'
interface Props {
  options: string[];
  onClick: Function;
}
export const Likert: React.SFC<Props> = ({ onClick, options }) => {
  return (
    <div>
      {options.map((option) => (
        <LikertRow
          key={option}
          option={option}
          onChange={(label: string) => {
            console.log(`Change option:${option} to have ${label}`)
            onClick(label, option)
            return { label, option }
          }}
          value=""
        />
      ))}
    </div>
  )
}
const scale = [
  'Strongly Disagree',
  'Disagree',
  'Undecided',
  'Agree',
  'Strongly Agree',
]
export const LikertRow: React.SFC<{
  option: string;
  onChange: Function;
  value: string;
}> = ({ option, onChange, value }) => (
  <div>
    <p>{option}</p>
    {scale.map((label) => (
      <LikertUnit
        key={label}
        label={label}
        value={value}
        onClick={onChange}
      ></LikertUnit>
    ))}
  </div>
)
const LikertUnit: React.SFC<{
  value: string;
  label: string;
  onClick: Function;
}> = ({ value, label, onClick }) => (
  <div>
    <button disabled={value === label} onClick={() => onClick(label)} />
    <label>{label}</label>
  </div>
)
