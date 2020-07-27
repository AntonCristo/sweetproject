import * as actionTypes from './actionTypes';
import axios from 'axios';
import { firebaseConfig } from '../../firebaseConfigs';


const MESSAGES_URL = `https://${firebaseConfig.projectId}.firebaseio.com/messages.json` ;

export const sendMessageStart = () => {
    return {
        type: actionTypes.SEND_MESSAGE_START
    }
}

export const sendMessageSuccess = newPost => {
    return {
        type: actionTypes.SEND_MESSAGE_SUCCESS,
        payload: newPost.name
    }
}

export const sendMessageFailed = err => {
    return {
        type: actionTypes.SEND_MESSAGE_FAILED,
        payload: err
    }
} 

export const sendMessageReset = () => {
    return {
        type: actionTypes.SEND_MESSAGE_RESET
    }
}

export const sendMessage = (senderName,senderContact,messageBody) => dispatch => {
    dispatch(sendMessageStart());
    const d = new Date();
    axios.post(MESSAGES_URL,{
        senderName,
        senderContact,
        messageBody,
        timestamp: d.toLocaleDateString() +" "+d.toLocaleTimeString()
    })
    .then(response => {
        dispatch(sendMessageSuccess(response.data));
        dispatch(sendMessageReset())
        
    })
    .catch(err => {
        dispatch(sendMessageFailed(err));
    })

}



