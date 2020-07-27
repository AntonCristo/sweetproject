import React from 'react';
import classes from './button.module.scss';

const Button = (props) => {
    
    let buttonClass = [classes.myButton,classes.default];
    if(props.outlined){
        buttonClass = [classes.myButton,classes.outlined];
    }
    if(props.contained){
        buttonClass = [classes.myButton,classes.contained];
    }
    if(props.disabled){
        buttonClass = [classes.myButton,classes.disabled];
    }
    return (
        <button disabled={props.disabled} onClick={props.clicked}  className={buttonClass.join(' ')}>
            {props.children}
        </button>
    );
}

export default Button;