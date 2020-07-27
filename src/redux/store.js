import { createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import auth from './reducers/auth';
import sendMessages  from './reducers/sendMessage';
import fetchMessages from './reducers/fetchMessages';
import uploadImage from './reducers/upload';
import fetchImages from './reducers/fetchImages';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

export default createStore(
    combineReducers({
        auth,
        sendMessages,
        fetchMessages,
        uploadImage,
        fetchImages
    }),{},
    composeEnhancers(applyMiddleware(...middleware))
);
