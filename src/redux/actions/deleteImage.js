import * as actionTypes from './actionTypes';
import axios from 'axios';
import { firebaseConfig } from '../../firebaseConfigs';
import * as actions from './index';

const DELETE_URL = `https://${firebaseConfig.projectId}.firebaseio.com/images/`;

export const deleteImageStart = () => {
    return {
        type: actionTypes.DELETE_MESSAGE_START
    }
}

export const deleteImageSuccess = status => {
    return {
        type: actionTypes.DELETE_MESSAGE_SUCCESS,
        payload: status
    }
}

export const deleteImageFailed = err => {
    return {
        type: actionTypes.DELETE_MESSAGE_FAILED,
        payload: err.message
    }
}

export const deleteImage = (imageID,ref) => dispatch => {
    dispatch(deleteImageStart());
    axios.delete(DELETE_URL+"/"+ref+"/"+imageID+".json")
    .then(res => {
        dispatch(deleteImageSuccess(res.status))
    })
    .catch(err => {
        dispatch(deleteImageFailed(err));
    })
}