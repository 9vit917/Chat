import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import { dialogsActions } from '../../store/actions';
import { DialogItem } from "../../components";

import './index.scss';


const Dialogs = ( { currentDialog, setCurrentDialog, fetchAllDialogs, items } ) => {
    useEffect(() => {
        /**
         * Получается что за всю сессию диалоги загрузятся только один раз?
         * А если новый?
         * Но при этом если диалогов 0, то грузится будут они при каждом пересоздании компонента
         * Трохи странная логика
         */
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