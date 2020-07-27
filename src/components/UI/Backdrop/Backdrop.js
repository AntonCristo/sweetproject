import React from 'react';
import classes from './backdrop.module.scss';
import PropsTypes from 'prop-types';


const Backdrop = (props) => {

    let backdropDiv = null; 
    if(props.show){
        backdropDiv = (<div onClick={props.onClose} className={classes.backdrop}></div>);
    }

    return (
        backdropDiv
    );
}


Backdrop.propTypes = {
    show: PropsTypes.bool.isRequired,
    onClose: PropsTypes.func.isRequired
}


export default Backdrop;