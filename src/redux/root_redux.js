import {combineReducers} from 'redux';
import {persistReducer} from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import userReducer from "./user/user_redux";
import profileDataReducer from './signup_redux/signup_redux';
import dataReducer from "./data_redux/data_redux";

const persistConfig={
    key:"root",
    storage:storageSession,
    whitelist:['user','profileData','data']
}

const rootReducer= combineReducers({
    user:userReducer,
    profileData:profileDataReducer,
    data:dataReducer
});

export default persistReducer(persistConfig,rootReducer);