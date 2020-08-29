import React from 'react'

type Props = {
  children: React.ReactChildren
}

const Text = ({ children }: Props) => {
  return <span>{children}</span>
}

export default Text
