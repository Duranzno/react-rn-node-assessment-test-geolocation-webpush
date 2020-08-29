import React from 'react'

type Props = {
  label: string
  name: string
  value: string
}

export const FormInput = ({ label, ...props }: Props) => {
  return (
    <div className="">
      <label>{label}</label>
      <input {...props} className="border border-gray-400 rounded" />
    </div>
  )
}
