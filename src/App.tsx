import React from 'react';
import './App.scss';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="app">
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          Content
        </div>
      </Content>
      <Footer className="app-footer">Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}

export default App;
