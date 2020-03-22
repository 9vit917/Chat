import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import { dialogsActions } from '../../store/actions';
import { DialogItem } from "../../components";

import './index.scss';


const Dialogs = ( {setCurrentDialog, fetchAllDialogs, items } ) => {
    const [dialogs, setDialogs] = useState([]);

    useEffect(() => {
        if(!items.length){
            fetchAllDialogs();
        }
        else {
            setDialogs(items.map((el) => <DialogItem onSelect={setCurrentDialog} key={el.id} {...el}/>));
        }
    }, [items])

    return (
        <div className="dialogs-bar">
            { dialogs }
        </div>
    )
}


Dialogs.propTypes = {
    
};

export default connect(
    ({ dialogs }) => dialogs, 
     dialogsActions
    )(Dialogs);