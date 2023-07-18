import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined, DownOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Dropdown, message, Space } from 'antd';
import Navbar from './AuthenticatedNave';
import { Logo, LogoShort } from "../Scripts/svg"
const { Header, Sider, Content } = Layout;
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    const items = [
        {
            label: <Link href={route('profile.edit')}>Profile</Link>,
            key: '0',
        },
        {
            label: <a href="#">Change Password</a>,
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: <Link method="post" className='w-full text-left' href={route('logout')} as="button">Log Out</Link>,
            key: '3',
        },
    ];

    const onClick = ({ key }) => {
        message.info(`Click on item ${key}`);
    };

    return (
        <Layout>
            <Sider className='overflow-hidden' trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical p-5">
                    {
                        collapsed ? <LogoShort /> : <Logo />
                    }
                </div>

                <Navbar />
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    <div className='mx-5'>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}

                        <div className='float-right'>
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                trigger={['click']}
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        {user.name}
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                </Header>

                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        height: "85vh"
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}
