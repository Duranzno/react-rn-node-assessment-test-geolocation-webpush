import React from 'react'

type Props = {
  title: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: any
}

const Button = ({ title, ...props }: Props) => {
  return (
    <button
      {...props}
      className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer p-2 rounded focus:outline-none"
    >
      {title}
    </button>
  )
}

export default Button
