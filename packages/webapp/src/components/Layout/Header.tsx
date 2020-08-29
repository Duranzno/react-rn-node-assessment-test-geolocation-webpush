import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'components/Button'

const Header = () => {
  return (
    <div className="px-16 h-16 bg-black text-white w-full flex justify-between items-center">
      <Link to="/">Logo</Link>
      <Link to="/login">
        <Button title="Login" />
      </Link>
    </div>
  )
}

export default Header
