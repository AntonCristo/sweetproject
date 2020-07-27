import React,{useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../navigationbar.module.scss';
import cls from './navigationItems.module.scss';
import { connect } from 'react-redux';


const navigationItems = (props) => {

    useEffect(()=>{
        console.log('[NavigationItems.js] rendered...');
    });
    return (
        <div onClick={props.onNavigate} className={cls.items}>
            <NavLink activeClassName={classes.activelink} exact to="/cakes/sweet" >CAKES</NavLink>
            <NavLink activeClassName={classes.activelink} to="/cakes/other" >OTHER SWEETS</NavLink>
            <NavLink activeClassName={classes.activelink} exact to="/message" >LEAVE A MESSAGE</NavLink>
            <NavLink activeClassName={classes.activelink} exact to="/favorites" >FAVORITES</NavLink>
            {
                props.isAdmin 
                ?
                <React.Fragment>
                    <br/>
                    <NavLink activeClassName={classes.activelink} exact to="/inbox" >READ MESSAGES</NavLink>
                    <NavLink activeClassName={classes.activelink} exact to="/upload" >UPLOAD NEW</NavLink> 
                </React.Fragment>
                :
                null

            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isAdmin: state.auth.uid
    }
}

export default connect(mapStateToProps)(navigationItems);