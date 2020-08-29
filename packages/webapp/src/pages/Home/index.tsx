import React from 'react'
import { useAuth, AuthType } from 'components/AuthProvider'

const Home = () => {
  const { user }: AuthType = useAuth()

  return (
    <div>
      <h2>Home</h2>
      <div>
        {user.id} {user.name}
      </div>
    </div>
  )
}

export default Home
