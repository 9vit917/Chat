import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import { dialogsActions } from '../../../../store/actions';
import { DialogItem } from "../../../../components";

import './index.scss';


const Dialogs = ( { currentDialog, setCurrentDialog, fetchAllDialogs, items } ) => {
    useEffect(() => {
        fetchAllDialogs();
    }, [items.length]) // (Post Review)Вопрос, сработатет ли так? Проверить смогу только после добаления функцианала по созданию диалога

    return (
        <div className="dialogs-bar">
            { 
                items.map((el) => 
                <DialogItem 
                currentDialog={currentDialog} 
                onSelect={setCurrentDialog} 
                key={el.id} 
                {...el}/>) 
            }
        </div>
    )
}


Dialogs.propTypes = {
    
};

export default connect(
    ({ dialogs }) => dialogs, 
     dialogsActions
    )(Dialogs);