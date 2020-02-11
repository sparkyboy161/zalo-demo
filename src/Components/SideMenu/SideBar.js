import React from 'react';
import { Menu, Avatar } from 'antd';

function SideBar() {
    return (
        <Menu
            mode="inline">
            <Avatar size="large" icon="user" />
            <Menu.Item>Message</Menu.Item>
        </Menu>
    )
}

export default SideBar;