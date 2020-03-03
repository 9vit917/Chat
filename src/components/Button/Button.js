import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import { Button as BaseButton } from "antd";

import './index.scss';

const Button = ( props ) => <BaseButton { ...props } className={ classNames('button', props.className) } />


Button.propTypes = {
    className: PropTypes.string
};

export default Button;