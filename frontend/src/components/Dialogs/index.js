import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import { dialogsActions } from '../../store/actions';
import { DialogItem } from "../../components";

import './index.scss';


const Dialogs = ( { currentDialog, setCurrentDialog, fetchAllDialogs, items } ) => {
    useEffect(() => {
        if(!items.length){
            fetchAllDialogs();
        }
    }, [items])

    return (
        <div className="dialogs-bar">
            { items.map((el) => 
            <DialogItem 
            currentDialog={currentDialog} 
            onSelect={setCurrentDialog} 
            key={el.id} 
            {...el}/>) }
        </div>
    )
}


Dialogs.propTypes = {
    
};

export default connect(
    ({ dialogs }) => dialogs, 
     dialogsActions
    )(Dialogs);