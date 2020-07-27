import * as actionTypes from '../actions/actionTypes';
import { updateShallowObject } from '../utility';

const initialState = {
    loading: false,
    newPostId: null,
    err: null
}

const reducer = (state = initialState ,action) => {
    switch(action.type){
        case actionTypes.SEND_MESSAGE_START: 
            return updateShallowObject(state,{loading:true,newPostId:null,err:null});
        case actionTypes.SEND_MESSAGE_FAILED: 
            return updateShallowObject(state,{loading:false,err:action.payload.message})
        case actionTypes.SEND_MESSAGE_SUCCESS: 
            return updateShallowObject(state,{loading:false,newPostId:action.payload});
        case actionTypes.SEND_MESSAGE_RESET:
            return updateShallowObject(state,initialState)
        default: return updateShallowObject(state);
    }
}

export default reducer;