import * as actionTypes from './actionTypes';
import { firebaseConfig }  from '../../firebaseConfigs';
import axios from 'axios';

const DELETE_URL = `https://${firebaseConfig.projectId}.firebaseio.com/messages/`;

export const deleteMessageStart = () => {
    return {
        type: actionTypes.DELETE_MESSAGE_START
    }
}

export const deleteMessageSuccess = status => {
    return {
        type: actionTypes.DELETE_MESSAGE_SUCCESS,
        payload: status
    }
}

export const deleteMessageFailed = err => {
    return {
        type: actionTypes.DELETE_MESSAGE_FAILED,
        payload: err
    }
}

export const deleteMessage = messageID => dispatch => {

    dispatch(deleteMessageStart());
    axios.delete(DELETE_URL+messageID+".json")
    .then( response => {
        dispatch(deleteMessageSuccess(response.status))
    })
    .catch(err => {
        dispatch(deleteMessageFailed(err));
    })

}