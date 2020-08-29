import React, { Suspense, lazy } from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from 'layouts/Root'
import ErrorBoundary from 'components/ErrorBoundary'

const Home = lazy(() => import('pages/Home'))
const Login = lazy(() => import('pages/Login'))

type Props = {
  route: RouteConfig
  someProp: string
}

const Child = ({ route }: Props) => (
  <div>
    <h2>Child</h2>
    {renderRoutes(route.routes, { someProp: 'these extra props are optional' })}
  </div>
)

const GrandChild = ({ someProp }: Props) => (
  <div>
    <h3>Grand Child</h3>
    <div>{someProp}</div>
  </div>
)

const routes: any = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/login',
        exact: true,
        component: Login,
      },
      {
        path: '/child/:id',
        component: Child,
        routes: [
          {
            path: '/child/:id/grand-child',
            component: GrandChild,
          },
        ],
      },
    ],
  },
]

const Routes = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          {renderRoutes(routes)}
        </Suspense>
      </ErrorBoundary>
    </Router>
  )
}

export default Routes
