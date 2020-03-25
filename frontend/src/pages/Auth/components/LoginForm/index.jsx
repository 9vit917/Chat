import React from 'react';

import { Form, Input } from 'antd';
import { Button, Block } from '../../../../components';
import { Link } from 'react-router-dom';

import { UserOutlined, LockOutlined } from '@ant-design/icons';


const LoginForm = () => {
    return (
        <div className="auth__content">
            <div className="auth__top">
                <h2>Welcome</h2>
                <p>
                    Please logIn
                </p>
            </div>
            <Block>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={console.log('Finish')}
                >
                <Form.Item
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                    ]}
                    hasFeedback
                >
                    <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                    ]}
                    hasFeedback
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        size="large"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Link className="auth__register-link" to="/registe">
                        Register
                    </Link>
                </Form.Item>
            </Form>
            </Block>
        </div>
    )
} 

export default LoginForm;