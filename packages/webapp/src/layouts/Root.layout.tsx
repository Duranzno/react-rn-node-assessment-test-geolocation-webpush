import React from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'
import { Layout, Content } from 'components'

type Props = {
  route: RouteConfig
  someProp: string
}

export const Root = ({ route }: Props) => (
  <Layout>
    <Content>{renderRoutes(route.routes)}</Content>
  </Layout>
)
