import React from 'react'
import { Menu } from 'antd';
import { HomeOutlined, ShopOutlined, ShoppingCartOutlined } from '@ant-design/icons';

export default function Navbar() {
    return (
        <Menu className='height-inherit pt-4' mode="inline">
            <Menu.Item> <HomeOutlined className='mr-2' />Dashboard</Menu.Item>
            <Menu.SubMenu icon={<ShopOutlined />} title={'property'}>
                <Menu.Item>Product List</Menu.Item>
                <Menu.Item>Product Add</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item> <ShoppingCartOutlined className='mr-2' />Orders</Menu.Item>
        </Menu>
    )
}
