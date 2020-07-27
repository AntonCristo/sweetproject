import * as actionTypes from './actionTypes';
import { firebaseApp,firebaseConfig } from '../../firebaseConfigs';
import { getRandomNumber } from '../utility';
import axios from 'axios';

const UPLOAD_URL = `https://${firebaseConfig.projectId}.firebaseio.com/images/` ;


export const uploadImageStart = () => {
    return {
        type: actionTypes.UPLOAD_IMAGE_START
    }
}

export const uploadImageSuccess = () => {
    return {
        type: actionTypes.UPLOAD_IMAGE_SUCCESS
    }
}

export const uploadImageInProgress = progress => {
    return {
        type: actionTypes.UPLOAD_IMAGE_IN_PROGRESS,
        payload: progress
    }
}

export const uploadImageFailed = err => {
    return {
        type: actionTypes.UPLOAD_IMAGE_FAILED,
        payload: err
    }
}

export const uploadImageCanceled = () => {
    return {
        type: actionTypes.UPLOAD_IMAGE_CANCELED
    }
}

export const uploadImageUrlAfterSuccess = (filename,downloadURL,folder) => dispatch => {
    axios.post(UPLOAD_URL+folder+".json",{filename,downloadURL})
    .catch(err=> console.log(err.message));

}

export const uploadImage = (imgFile,storageRef,uploadTaskBundler) => dispatch => {
    dispatch(uploadImageStart());

    const filename = getRandomNumber()+imgFile.name;
    const blob = new Blob([imgFile],{type:'image/*'})
    const thisUpload = firebaseApp.storage().ref('images/'+storageRef+"/").child(filename).put(blob);

    thisUpload.on("state_changed", 
        snapshot => {
            uploadTaskBundler(thisUpload);
            const transfered = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            dispatch(uploadImageInProgress(transfered.toFixed(2)));
        },
        err => {
            dispatch(uploadImageFailed(err.message));
        },
        () => {
            dispatch(uploadImageSuccess());
            thisUpload.snapshot.ref.getDownloadURL()
            .then( url => {
                dispatch(uploadImageUrlAfterSuccess(filename,url,storageRef));
            } )
            .catch(err => {
                dispatch(uploadImageFailed(err));
            })
        }
    
    )


}