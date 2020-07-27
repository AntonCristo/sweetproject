import React from 'react';
import classes from './progressbar.module.scss';

const progressBar = (props) => {
    return (
        <div className={classes.progressbar} >
            <div style={{width:`${props.progress}%`}}  className={classes.progress}></div>
        </div>
    );
}

export default progressBar;