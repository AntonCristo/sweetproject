import * as actionTypes from '../actions/actionTypes';
import { updateShallowObject } from '../utility';

const initialState = {
    loading: false,
    err: null,
    messages: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_MESSAGES_START: 
            return updateShallowObject(state,{loading: true,err: null,messages: [],refreshMessages:false});
        case actionTypes.FETCH_MESSAGES_FAILED:
            return updateShallowObject(state,{loading: false,err: action.payload.message,messages: []});
        case actionTypes.FETCH_MESSAGES_SUCCESS:
            return {
                ...state,
                loading:false,
                messages: state.messages.concat(action.payload)
            }
        case actionTypes.DELETE_MESSAGE_START: 
            return updateShallowObject(state,{loading:true,err:null,messages:[]});
        case actionTypes.DELETE_MESSAGE_SUCCESS: 
            return updateShallowObject(state,{loading:false});
        case actionTypes.DELETE_MESSAGE_FAILED:
            return updateShallowObject(state,{loading:false,err: action.payload.message})
        default: return state;
    }
}

export default reducer;