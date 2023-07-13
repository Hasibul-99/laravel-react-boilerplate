import React from 'react'
import { Menu } from 'antd';

export default function Navbar() {
    return (
        <Menu className='height-inherit' mode="inline">
            <Menu.Item>item 1 3</Menu.Item>
            <Menu.Item>item 2</Menu.Item>
            <Menu.SubMenu title="sub menu">
                <Menu.Item>item 3</Menu.Item>
            </Menu.SubMenu>
        </Menu>
    )
}
