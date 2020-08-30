/* eslint-disable */
//@ts-ignore
import React from 'react'
import Select, { ValueType, OptionsType } from 'react-select'
interface Props {
  onChange: (data:string[])=>void;
  options: string[];
}
type OptionType = { value: string; label: string }
const parser = (data: string[]): OptionsType<OptionType> =>
  data.map((v) => ({ value: v, label: v }))
const unparser = (data: OptionsType<OptionType>) => data.map(({ value }) => value)
export const Selector:React.FC<Props> = ({ options, onChange }) => (
  <Select
    isMulti
    name="colors"
    options={parser(options)}
    onChange={(selectedOption: ValueType<OptionType>):void => {
      const value = (selectedOption as OptionsType<OptionType>)
      if(Array.isArray(value)){
        onChange(unparser(value))
      }
      return 
    }}
    className="basic-multi-select"
    classNamePrefix="select"
  />
)
