import * as actionTypes from './actionTypes';
import axios from 'axios';
import { firebaseConfig } from '../../firebaseConfigs';

const AUTH_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`;

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (userData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: userData
    }
}

export const authFailed = (err) => {
    return {
        type: actionTypes.AUTH_FAILED,
        payload: err.message
    }
}

export const auth = (email,password,history,saveCredentialsToStorage) => dispatch => {
    dispatch(authStart());
    axios.post(AUTH_URL,{
        email:email,
        password:password,
        returnSecureToken:true
    }).then( res => {
        
        dispatch(authSuccess(res.data));
        if(saveCredentialsToStorage){
            localStorage.setItem("email",email);
            localStorage.setItem("password",password);
        }
        history.push('/cakes/sweet');

    }).catch( err => {
        dispatch(authFailed(err))
    })

}