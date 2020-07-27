import React from 'react';
import PropsTypes from 'prop-types';
import classes from './logo.module.scss';
import myLogo from '../../../assets/logo.png';

const Logo = (props) => {
    return (
        <div style={{width:props.width}} className={classes.logo}>
            <img style={{border:`${props.borderWidth}px solid #b12643`}} src={myLogo} />
        </div>
    );
}

Logo.propTypes = {
    width: PropsTypes.string.isRequired,
    borderWidth: PropsTypes.string.isRequired
}

export default Logo;