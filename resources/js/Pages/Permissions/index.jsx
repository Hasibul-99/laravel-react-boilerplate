import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Col, Card, Row } from 'antd';

export default function Permissions({ auth, permissions }) {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (name) => <a>{name}</a>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Edit</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <div>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {
                        permissions?.length ? <>
                            {
                                permissions.map(item => <Col className="gutter-row" span={4} key={item.id}>
                                    <Card >
                                        {item.name}
                                    </Card>
                                </Col>)
                            }
                        </> : ''
                    }
                </Row>
            </div>
        </AuthenticatedLayout>
    )
}
