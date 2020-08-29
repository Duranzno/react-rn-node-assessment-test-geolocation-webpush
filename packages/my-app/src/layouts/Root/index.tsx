import React from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'
import Layout from 'components/Layout'
import Header from 'components/Layout/Header'
import Content from 'components/Layout/Content'

type Props = {
  route: RouteConfig
  someProp: string
}

const Root = ({ route }: Props) => (
  <Layout>
    <Header />
    <Content>{renderRoutes(route.routes)}</Content>
  </Layout>
)

export default Root
