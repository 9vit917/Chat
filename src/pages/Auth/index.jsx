import React from 'react';

import { Button, Block } from '../../components';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './index.scss';

const Auth = (props) => {
    const onFinish = values => {
        console.log('Received values of form: ', values);
      };

    return (
        <div className="auth">
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
                    onFinish={onFinish}
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
                        <a className="auth__register-link" href="#">
                            Register
                        </a>
                    </Form.Item>
                    </Form>
                </Block>
            </div>
        </div>
    );
};

export default Auth;