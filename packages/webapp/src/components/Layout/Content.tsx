import React from 'react'

type Props = {
  children: React.ReactNode
}

const Content = ({ children }: Props) => {
  return (
    <div className="sm:px-3 md:px-4 lg:px-12 xl:px-16 pt-10">{children}</div>
  )
}

export default Content
