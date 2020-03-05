import React, { Component } from 'react';

import { Form, Input } from 'antd';
import { Button, Block } from '../../../components';
import { Link } from 'react-router-dom';

import { UserOutlined, LockOutlined } from '@ant-design/icons';

class RegisterForm extends Component {
    render() {
        const onFinish = values => {
            console.log('Received values of form: ', values);
          };
        return (
            <Block>
                <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                >
                <Form.Item
                    name="mail"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Email!',
                    },
                    ]}
                    hasFeedback
                >
                    <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
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
                        Register
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Link className="auth__register-link" to="/login">
                        Sign In
                    </Link>
                </Form.Item>
            </Form>
            </Block>
        )
    }
}

export default RegisterForm;