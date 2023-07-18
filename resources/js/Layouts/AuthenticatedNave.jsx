import React from 'react'
import { Menu } from 'antd';
import { HomeOutlined, UsergroupAddOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from '@inertiajs/react';

export default function Navbar() {
    return (
        <Menu className='height-inherit pt-4' mode="inline">
            <Menu.Item key="1">
                <HomeOutlined />
                <span><Link href="/dashboard">Dashboard</Link></span>
            </Menu.Item>

            <Menu.SubMenu
                key="sub1"
                title={
                    <span>
                        <UsergroupAddOutlined />
                        <span>User Control</span>
                    </span>
                }
            >
                <Menu.Item key="6"><Link href="/">Users</Link></Menu.Item>
                <Menu.Item key="7"><Link href="/">Roles</Link></Menu.Item>
                <Menu.Item key="8"><Link href="/permissions">Permissions</Link></Menu.Item>
            </Menu.SubMenu>

            <Menu.Item> <ShoppingCartOutlined className='mr-2' />Orders</Menu.Item>
        </Menu>
    )
}