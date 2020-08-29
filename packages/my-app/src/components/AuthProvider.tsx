import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useEffectOnce } from 'react-use'

type Props = {
  children: React.ReactNode
  forbiddenPath?: string
  loadingComponent?: any
  client?: any
}

export interface AuthType {
  user?: any
  onForbidden?: any
  getUserInfo?: any
  login?: any
  logout?: any
}

const Context = React.createContext({})

export const AuthProvider = ({
  children,
  forbiddenPath = '/forbidden',
  loadingComponent = () => <div>Loading</div>,
  client = {
    login: () => Promise.resolve(),
    register: () => Promise.resolve(),
    getUserInfo: () =>
      Promise.resolve({
        id: 1,
        name: 'Mock',
      }),
    logout: () => Promise.resolve(),
  },
}: Props) => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  const history = useHistory()

  useEffectOnce(() => {
    const getUser = async () => {
      try {
        const res: any = await client.getUserInfo()
        setUser(res)
      } catch (e) {
        console.log('Not authenticated')
      } finally {
        setLoading(false)
      }
    }
    getUser()
  })

  if (loading) {
    return loadingComponent()
  }
  const getUserInfo = async () => {
    const user = await client.getUserInfo()
    setUser(user)
    return user
  }
  const contextValue: AuthType = {
    user,
    onForbidden: () => history.push(forbiddenPath),
    ...client,
    getUserInfo,
    login: async (payload: any) => {
      await client.login(payload)
      return await getUserInfo()
    },
    logout: async () => {
      await client.logout()
      setUser(undefined)
      return
    },
  }
  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

export const useAuth = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('useAuth should be use in side auth context')
  }
  return context
}
