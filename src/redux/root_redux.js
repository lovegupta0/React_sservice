import {combineReducers} from 'redux';
import {persistReducer} from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import userReducer from "./user/user_redux";
import profileDataReducer from './signup_redux/signup_redux';
import dataReducer from "./data_redux/data_redux";
import caroRedux from "./carosel/caro_redux";

const persistConfig={
    key:"root",
    storage:storageSession,
    whitelist:['user','profileData','userData','caroData']
}

const rootReducer= combineReducers({
    user:userReducer,
    profileData:profileDataReducer,
    userData:dataReducer,
    caroData:caroRedux
    
});

export default persistReducer(persistConfig,rootReducer);