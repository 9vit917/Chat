import React from 'react';
import classNames from "classnames";
import { SmileOutlined, SendOutlined } from "@ant-design/icons";

import { Input } from 'antd';

import './index.scss';

const SendOptions = ( props ) => (
    <div className="sendOptions">
        <div>
        <SmileOutlined />
        </div>
        <Input.TextArea id="newMessage" rows={1} cols="50" placeholder="Write a message...." />
        <div>
            <button>
                <SendOutlined />
            </button>
        </div>
    </div>
);

export default SendOptions;