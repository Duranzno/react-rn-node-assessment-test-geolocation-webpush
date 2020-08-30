import React from 'react'

export const Content: React.FC = ({ children }) => {
  return (
    <div className="sm:px-3 md:px-4 lg:px-12 xl:px-16 pt-10">{children}</div>
  )
}
