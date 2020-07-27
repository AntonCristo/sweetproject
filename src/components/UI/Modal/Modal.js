import React from 'react';
import classes from './modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';

const modal = (props) => {
    return (
        <React.Fragment>
            <Backdrop onClose={props.close} show={props.show} />
            <div className={classes.modal}>
                {props.children}
            </div>
        </React.Fragment>
        
    );
}

export default modal;