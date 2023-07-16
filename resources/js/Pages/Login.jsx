import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

export default function Login() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
        <div>
            <div class="container">
                <div class="row justify-content-center mt-5">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="card shadow">
                            <div class="card-title text-center border-bottom">
                                <h2 class="p-3">Login</h2>
                            </div>
                            <div class="card-body">
                                <Form
                                    name="basic"
                                    onFinish={onFinish}
                                    autoComplete="off"
                                    layout='vertical'
                                    size='large'
                                >
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                        ]}
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className='w-100'>
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
