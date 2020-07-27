import React,{useEffect} from 'react';
import './navigationbar.module.scss';
import classes from './navigationbar.module.scss';
import hamburger from '../../../assets/icons/hamburger.svg';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';
const Navigationbar = (props) => {

    useEffect(()=>{
        console.log('[Navigationbar.js] rendered...');
    });

    return (
        <div className={classes.bar}>
            <div className={classes.logo}>
                <Logo width="50px" borderWidth="1" />
                <h1>Sweet Sweet</h1>
            </div>
            
            <div onClick={props.toggleDrawer} className={classes.hamburgericon}>
                <img src={hamburger} alt="hamburger"  />
            </div>
            <div className={classes.navItems}>
                <NavigationItems/>
            </div>
        </div>
            
    
        
    );
}

export default Navigationbar;