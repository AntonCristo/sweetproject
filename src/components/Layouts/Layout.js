import React,{useState,useEffect,Suspense} from 'react';
import classes from './layout.module.scss';
import NavigationBar from '../Navigation/NavigationBar/Navigationbar';
const SideDrawer = React.lazy(() => import('../Navigation/SideDrawer/SideDrawer'));

const layout = (props) => {

    const [showDrawer,setShowDrawer] = useState(false);

    const onCloseDrawerHandler = () => {
        setShowDrawer(false);
    }

    const onToggleDrawerHandler = () => {
        if(showDrawer){
            setShowDrawer(false);
        } else {
            setShowDrawer(true);
        }
    }

    let sideDrawer = null;

    if(showDrawer){
        sideDrawer = (
            <Suspense fallback={<h1>Loading...</h1>}>
                <SideDrawer show={showDrawer} close={onCloseDrawerHandler} />
            </Suspense>
        );
    }

    useEffect(()=>{
        console.log('[Layout.js] rendered...');
    });

    return (
        <div className={classes.layout}>
            <div className={classes.header}>
                <NavigationBar toggleDrawer={onToggleDrawerHandler}/>
            </div>
            <div className={classes.body}>{props.children}</div>
            <div className={classes.footer}><h4>ORDER NOW 054-3007046</h4></div>
            {sideDrawer}
        </div>
    );
}

export default layout;