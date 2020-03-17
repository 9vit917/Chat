import React from 'react';
import { Route } from 'react-router-dom';

import {LoginForm, RegisterForm} from '../../modules';

import './index.scss';

const Auth = (props) => {
    return (
        <div className="auth">
            <Route exact path={['/','/login']} component={ LoginForm } />
            <Route exact path="/registe" component={ RegisterForm } />
        </div>
    );
};

export default Auth;