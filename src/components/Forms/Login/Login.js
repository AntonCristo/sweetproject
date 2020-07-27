import React,{useState,useEffect} from 'react';
import classes from './login.module.scss';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import eyetext from '../../../assets/icons/eyetext.svg';
import eyepassword from '../../../assets/icons/eyepassword.svg';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';
import Spinner from '../../UI/Spinner/Spinner';

const login = (props) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isPassword,setIsPassword] = useState('password');
    const [eye,setEye] = useState(eyepassword);
    const [saveCredentials,setSaveCredentials] = useState(false);

    const loginForm = {
        email: {
            inputType: 'input',
            configs: {
                type: 'email',
                placeholder: 'email',
                name: 'email',
                maxLength: '30'
            },
            value: email
        },
        password: {
            inputType: 'input',
            configs: {
                type: isPassword,
                placeholder: 'password',
                name: 'password',
                maxLength: '12'
            },
            value: password
        }
    }

    const onToggleSaveCredentials = () => {
        setSaveCredentials(!saveCredentials);
    }

    const onChangeEmailHandler = e => {
        setEmail(e.target.value);
    }

    const onChangePasswordHandler = e => {
        setPassword(e.target.value);
    }

    const showHidePasswordHandler = () => {
        if(isPassword==='password'){
            setIsPassword('text');
            setEye(eyetext);
        }
        else{
            setIsPassword('password');
            setEye(eyepassword);
        }
    }

    const onLoginClickedHandler = () => {
        props.actionLogin(email,password,props.history,saveCredentials);
    }

    let spinnerArea = (
        <div>
            <section 
                onClick={showHidePasswordHandler} 
                style={{color:'#262626',marginBottom:'10px',display:'flex',alignItems:'center'}}
            >
                <label style={{margin:'10px'}}  htmlFor="eye">show/hide</label>
                <img id="eye" src={eye} alt="eye" />
            </section>
            <section onClick={onToggleSaveCredentials} style={{textDecoration:'underline'}}>
            {
                saveCredentials ? 'OK!' : 'save password?'
            }
            </section>
        </div>
    );

    if(props.loading){
        spinnerArea = <Spinner/>;
    }

    useEffect(()=>{
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");
        if(storedEmail && storedPassword){
            setPassword(storedPassword);
            setEmail(storedEmail)
        }
    },[])

    useEffect(()=>{
        console.log('[Login.js] rendered...');
    });

    return(
        
        <form onSubmit={e=>e.preventDefault()} className={classes.login}>
            <div><h1>Hello Admin, Login to continue</h1></div>
            {props.err ? props.err : null}
            <div>
                <Input 
                    changeHandler={onChangeEmailHandler} 
                    inputType="input"
                    value={loginForm.email.value}
                    configs={loginForm.email.configs} />
                <Input 
                    changeHandler={onChangePasswordHandler} 
                    inputType="input"
                    value={loginForm.password.value} 
                    configs={loginForm.password.configs} />
            </div>
            {spinnerArea}
            <div>
                <Button clicked={onLoginClickedHandler} outlined>Enter</Button>
                <Button clicked={props.close} contained>Cancel</Button>
            </div>
        </form>
    ); 
}

const mapDispatchToProps = dispatch => {
    return {
        actionLogin:(email,password,history,saveCred) => dispatch(actions.auth(email,password,history,saveCred))
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        err: state.auth.err
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(login);