import React from 'react';

import { Layout } from 'antd';
import SideBar from './Components/SideMenu/SideBar';
import Dashboard from './Components/Dashboard';

const { Sider, Content } = Layout;

function App() {
  return (
    <div>
      <Layout>
        <Sider style={{ backgroundColor: 'blue' }} width='100'>
          <SideBar />
        </Sider>
        <Content style={{ backgroundColor: 'red' }}>
          <Dashboard />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
