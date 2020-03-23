import React from 'react';
import { Route } from 'react-router-dom';

/**
 * Компоненты которые будут только на одной странице лучше рядом и класть
 * Чтобы получилась примерно такая структура:
 * components/ <- всякие глобальные компоненты
 *   Button
 *   List
 *   ...
 * pages/
 *   Login/
 *     components/
 *        LoginForm <- компоненты которые относятся только к этой странице
 *        SthElse
 *     index.js <- верхний компонент страницы
 *   Registration/
 *     ...
 * 
 * Зачем папка modules тоже не совсем понял (что там должно лежать?)
 */

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