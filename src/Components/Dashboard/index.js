import React from 'react';
import { Layout, Row, Col } from 'antd';
import Inbox from './Messages/Inbox';
import ChatHistory from './Messages/ChatHistory';

const { Header, Content, Footer } = Layout;

function Dashboard() {
    return (
        <Layout>
            <Header style={{ backgroundColor: 'gray' }}>
                <p>User Info</p>
            </Header>
            <Content style={{ backgroundColor: 'green' }}>
                <Row>
                    <Col span={7}>
                        <Inbox />
                    </Col>
                    <Col span={17}>
                        <ChatHistory />
                    </Col>
                </Row>
            </Content>
            <Footer style={{ backgroundColor: 'pink' }}>
                <p>3</p>
            </Footer>
        </Layout>
    )
}

export default Dashboard;