import * as actionTypes from '../actions/actionTypes';
import { updateShallowObject } from '../utility';

const initialState = {
    err: null,
    loading: false,
    images: []
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case actionTypes.FETCH_IMAGES_START:
            return updateShallowObject(state,{loading:true,err:null,images:[]});
        case actionTypes.FETCH_IMAGES_FAILED:
            return updateShallowObject(state,{err:action.payload,loading:false});
        case actionTypes.FETCH_IMAGES_SUCCESS:
            return updateShallowObject(state,{loading:false,images:action.payload});
        case actionTypes.DELETE_MESSAGE_START:
            return updateShallowObject(state,{loading:true,err:null,images:[]});
        case actionTypes.DELETE_IMAGE_FAILED:
            return updateShallowObject(state,{loading:false,err:action.payload});
        case actionTypes.DELETE_MESSAGE_SUCCESS:
            return updateShallowObject(state,{loading:false})
        default: return updateShallowObject(state);
    }
}

export default reducer;