import React from 'react'
import Select from 'react-select'
interface Props {
  onChange: Function
  options: string[]
}
type OptionType = { value: string; label: string }
const parser = (data: string[]): OptionType[] =>
  data.map((v) => ({ value: v, label: v }))
const unparser = (data: OptionType[]) => data.map(({ value }) => value)
export const Selector = ({ options, onChange }: Props) => (
  <Select
    isMulti
    name="colors"
    options={parser(options)}
    onChange={(v) => {
      //@ts-ignore
      onChange(unparser(v))
    }}
    className="basic-multi-select"
    classNamePrefix="select"
  />
)
