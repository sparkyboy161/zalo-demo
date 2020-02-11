import React from 'react';

import { Layout } from 'antd';

const { Sider, Content } = Layout;

function App() {
  return (
    <div>
      <Layout>
        <Sider style={{ backgroundColor: 'blue' }} width='100'>
          <p>h1</p>
        </Sider>
        <Content style={{ backgroundColor: 'red' }}>
          <p>h2</p>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
