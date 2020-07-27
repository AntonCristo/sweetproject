import * as actionTypes from './actionTypes';
import axios from 'axios';
import { firebaseConfig } from '../../firebaseConfigs';

const FETCH_IMAGES_URL = `https://${firebaseConfig.projectId}.firebaseio.com/images/`;


export const fetchImagesStart = () => {
    return {
        type: actionTypes.FETCH_IMAGES_START
    }
}

export const fetchImagesSuccess = images => {
    return {
        type: actionTypes.FETCH_IMAGES_SUCCESS,
        payload: images
    }
}

export const fetchImagesFailed = err => {
    return {
        type: actionTypes.FETCH_IMAGES_FAILED,
        payload: err.message
    }
}

export const fetchImages = ref => dispatch => {
    
    dispatch(fetchImagesStart());
    axios.get(FETCH_IMAGES_URL+ref+".json")
    .then(res => {

        let imagesList = [];

        for(let key in res.data){
            imagesList.push({
                ...res.data[key],
                uid:key
            })
        }
        dispatch(fetchImagesSuccess(imagesList));
    })
    .catch(err => dispatch(fetchImagesFailed(err)));

}