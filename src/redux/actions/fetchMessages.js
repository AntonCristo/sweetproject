import * as actionTypes from './actionTypes';
import axios from 'axios';
import { firebaseConfig } from '../../firebaseConfigs';

const FETCH_MESSAGES_URL = `https://${firebaseConfig.projectId}.firebaseio.com/messages.json`

export const fetchMessagesStart = () => {
    return {
        type: actionTypes.FETCH_MESSAGES_START
    }
}

export const fetchMessagesSuccess = messages => {
    return {
        type: actionTypes.FETCH_MESSAGES_SUCCESS,
        payload: messages
    }
}

export const fetchMessagesFailed = err => {
    return {
        type: actionTypes.FETCH_MESSAGES_FAILED,
        payload: err
    }
}

export const fetchMessages = () => dispatch => {
    dispatch(fetchMessagesStart());
    axios.get(FETCH_MESSAGES_URL)
    .then( response => {
        let tempMessages = [];
        for(let key in response.data){
            tempMessages.push({
                ...response.data[key],
                id:key
            });
        }
        dispatch(fetchMessagesSuccess(tempMessages));
    })
    .catch( err => {
        dispatch(fetchMessagesFailed(err));
    })
}