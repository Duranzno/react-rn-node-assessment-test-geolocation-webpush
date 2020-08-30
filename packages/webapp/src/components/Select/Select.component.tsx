import React from 'react'
import Select, { ValueType, OptionsType } from 'react-select'

type OptionType = { value: string; label: string }

//Functions to abstract the use of react-select library
const parser = (data: string[]): OptionsType<OptionType> =>
  data.map((v) => ({ value: v, label: v }))
const unparser = (data: OptionsType<OptionType>): string[] => data.map(({ value }) => value)

interface Props {
  onChange: (data: string[]) => void;
  options: string[];
}
export const Selector: React.FC<Props> = ({ options, onChange }) => {

  //Workaround recommended by the community https://github.com/JedWatson/react-select/issues/2902
  const onChangeImplementation=(selectedOption: ValueType<OptionType>): void => {
    const value = (selectedOption as OptionsType<OptionType>)
    if(Array.isArray(value)){
      onChange(unparser(value))
    }
    return 
  }

  return (
  <Select
    isMulti
    name="colors"
    options={parser(options)}
    onChange={onChangeImplementation}
    className="basic-multi-select"
    classNamePrefix="select"
  />
)}
