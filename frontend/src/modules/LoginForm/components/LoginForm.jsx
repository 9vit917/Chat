import React, { Component } from 'react';

import { Form, Input } from 'antd';
import { Button, Block } from '../../../components';
import { Link } from 'react-router-dom';

import { UserOutlined, LockOutlined } from '@ant-design/icons';

// Можно сделать функцией
class LoginForm extends Component {
    render() {
        /**
         * 1. В функции рендер не надо писать коллбэки - она каждый раз пересоздаётся, что плохо для перформанса
         * В классовых компонентах лучше это сделать полем класса, в функциональных - юзать useCallback
         * 
         * 2. А рега и логин не работает??
        **/
        const onFinish = values => {
            console.log('Received values of form: ', values);
          };
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
                    // Сделай норм отступы
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
                        <Link className="auth__register-link" to="/registe">
                            Register
                        </Link>
                    </Form.Item>
                </Form>
                </Block>
            </div>
        )
    }
}

export default LoginForm;