import * as actionTypes from '../actions/actionTypes';
import { updateShallowObject } from '../utility';

const initialState = {
    err: null,
    uid: null,
    token: null,
    loading: false
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case actionTypes.AUTH_START: return updateShallowObject(state,{loading: true});
        case actionTypes.AUTH_FAILED: 
            return updateShallowObject(state,{err: action.payload,token: null,uid: null,loading: false});
        case actionTypes.AUTH_SUCCESS:
            return updateShallowObject(state,{
                    token: action.payload.idToken,
                    uid: action.payload.localId,
                    loading: false
                }
            );
        default: return updateShallowObject(state);
    }
}

export default reducer;