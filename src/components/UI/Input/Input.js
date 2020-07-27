import React from 'react';
import './input.module.scss';

const input = (props) => {
    
    let myInput = null;
    switch(props.inputType){
        case 'input':
            myInput = <input value={props.value} onChange={e => props.changeHandler(e)} {...props.configs}/>
            break;
        case 'textarea':
            myInput = <textarea value={props.value} onChange={e => props.changeHandler(e)} {...props.configs}/>
            break;
        default:
            return <input type="text" />
    }
    return myInput;
}

export default input;