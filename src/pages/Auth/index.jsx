import React from 'react';
import { Route } from 'react-router-dom';

import {LoginForm, RegisterForm} from '../../modules';

import './index.scss';

const Auth = (props) => {
    return (
        <div className="auth">
            <div className="auth__content">
                <div className="auth__top">
                    <h2>Welcome</h2>
                    <p>
                        Please logIn
                    </p>
                </div>
                <Route exact path={['/','/login']} component={ LoginForm } />
                <Route exact path="/registe" component={ RegisterForm } />
            </div>
        </div>
    );
};

export default Auth;