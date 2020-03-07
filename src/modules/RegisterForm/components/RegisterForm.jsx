import React, { Component } from 'react';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

import { Button, Block } from '../../../components';
import validateReg from '../../../global/validations'

class RegisterForm extends Component {
    render() {
        const onFinish = values => {
            console.log('Received values of form: ', values);
        };
        const onFinishFailed = values => {
            console.log('Fail', values);
        };
        return (
            <div className="auth__content">
                <div className="auth__top">
                    <h2>Welcome</h2>
                    <p>
                        To registration
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
                    onFinishFailed={onFinishFailed}
                    >
                    <Form.Item
                        name="mail"
                        rules={[
                        {   
                            type: 'email',
                            message: 'Please input correct Email!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                        ]}
                        hasFeedback
                    >
                        <Input size="large" prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
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
                        () => ({
                            validator(rule,value) {
                                return (
                                    validateReg.isPasswordValid(value) ?
                                    Promise.resolve():
                                    Promise.reject('Too easy password, please add upercase symbol and number ')
                                    )
                            }
                        })
                        ]}
                        hasFeedback
                    >
                        <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="Password"
                        size="large"
                        />
                    </Form.Item>

                    <Form.Item
                        name="confirm-password"
                        rules={[
                        {   
                            required: true,
                            message: 'Please input your Password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('The two passwords that you entered do not match!');
                            },
                        })
                        ]}
                        hasFeedback
                    >
                        <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="Comfirm your password"
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
            </div>
        )
    }
}

export default RegisterForm;