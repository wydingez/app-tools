import React, { useState } from 'react'
import './App.scss'
import { Layout, Menu } from 'antd'
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link
}  from 'react-router-dom';
import router from './router'

const { Header, Content, Footer } = Layout

interface RouteInfo {
  url: string;
  name: string;
  component: React.FunctionComponent | React.ComponentClass<any, any>
}

function App() {
  const [routes] = useState<RouteInfo[]>(router())
  const defalutPage: string = router()[0].url

  return (
    <>
      <Router>
        <Layout className="app">
          <Header className="app-header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[defalutPage]}>
              {
                routes.map(item => (
                  <Menu.Item key={item.url}>
                    <Link to={item.url}>{item.name}</Link>
                  </Menu.Item>
                ))
              }
            </Menu>
          </Header>
          <Content className="app-main">
            <div className="app-main-background">
              <Switch>
                {
                  routes.map(item => (
                    <Route path={item.url} key={item.url} component={item.component} />
                  ))
                }
              </Switch>
            </div>
          </Content>
          <Footer className="app-footer">App tools ©2020 Created by wydingez</Footer>
        </Layout>
      </Router>
    </>
  )
}

export default App;
