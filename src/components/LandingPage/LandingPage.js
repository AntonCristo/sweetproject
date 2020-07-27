import React,{ useState,useEffect,Suspense } from 'react';
import classes from './landingpage.module.scss';
import Logo from '../UI/Logo/Logo';
import Button from '../UI/Button/Button';
const Modal = React.lazy(() => import('../UI/Modal/Modal'));
const Login = React.lazy(() => import('../Forms/Login/Login'));


const LandingPage = (props) => {

    const [showLogin,setShowLogin] = useState(false);

    const onCloseLoginHandler = () => {
        setShowLogin(false);
    }

    const onOpenLoginHandler = () => {
        setShowLogin(true);
    }

    const onRedirect = () => {
        props.history.push('/cakes/sweet');
    }

    let loginModal = null;
    
    if(showLogin) {
        loginModal = (
            <Suspense fallback={<h1>Loading...</h1>}>
                <Modal close={onCloseLoginHandler} show={showLogin}>
                    <Login {...props} close={onCloseLoginHandler}/>
                </Modal>
            </Suspense>
        ); 
    }

    useEffect(()=>{
        console.log('[LandingPage.js] rendered...');
    });

    return (
        <div className={classes.landingPage}>
            <header className={classes.myheader}>Sweet Sweet</header>
            <Logo width="70%" borderWidth="5"/>
            <div className={classes.buttons}>
                <Button clicked={onRedirect}  contained>Guest</Button>
                <button className={classes.oldbutton} onClick={onOpenLoginHandler}>Admin</button>
            </div>
            {loginModal}
        </div>
    );
}

export default React.memo(LandingPage);