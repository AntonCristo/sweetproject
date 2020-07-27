import * as actionTypes from '../actions/actionTypes';
import { updateShallowObject } from '../utility';


const initialState = {
    progress: 0,
    err:null  
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case actionTypes.UPLOAD_IMAGE_START:
            return updateShallowObject(state,{progress:0,err:null});
        case actionTypes.UPLOAD_IMAGE_IN_PROGRESS:
            return updateShallowObject(state,{progress:action.payload});
        case actionTypes.UPLOAD_IMAGE_FAILED:
            return updateShallowObject(state,{err:action.payload});
        case actionTypes.UPLOAD_IMAGE_CANCELED:
            return updateShallowObject(state,{progress:0});
        case actionTypes.UPLOAD_IMAGE_SUCCESS:
            return updateShallowObject(state);
        default: return updateShallowObject(state);
    }

}

export default reducer;