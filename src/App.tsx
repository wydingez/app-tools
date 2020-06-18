import React, { useState, useEffect } from 'react'
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
  component: React.FunctionComponent
}

let rs : RouteInfo[] = []

const getRoutes = async () => {
  rs = await router()
}
getRoutes()

function App() {
  const [routes, setRoutes] = useState<RouteInfo[]>([])
  
  useEffect(() => {
    setRoutes(rs)
  }, [])

  return (
    <>
      <Router>
        <Layout className="app">
          <Header className="app-header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['/page1']}>
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
                    <Route path={item.url} key={item.url}>
                      {item.component}
                    </Route>
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
