import React, { useState} from 'react';
import PropTypes from "prop-types";

import { DialogItem } from "../../components";
import { api } from "../../global/helpers/api";

import './index.scss';


const Dialogs = ( { items } ) => {
    const [dialogs, setDialogs] = useState([]);
    if(!dialogs.length) {
        api.getAll().then(res => {
            setDialogs(res.data.map((el) => <DialogItem key={el._id} {...el}/>));
        });
    }

    return (
        <div className="dialogs-bar">
            { dialogs }
        </div>
    )
}


Dialogs.propTypes = {
    
};

export default Dialogs;