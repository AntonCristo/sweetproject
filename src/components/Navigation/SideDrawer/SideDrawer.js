import React,{useEffect} from 'react';
import classes from './sidedrawer.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationBar/NavigationItems/NavigationItems';

const SideDrawer = (props) => {

    useEffect(()=>{
        console.log('[SideDrawer.js] rendered...');
    });

    return (
        <React.Fragment>
            <Backdrop show={props.show} onClose={props.close} />
            <div className={classes.drawer}>
                <NavigationItems onNavigate={props.close}/>
            </div>
        </React.Fragment>
    );
}

export default SideDrawer;