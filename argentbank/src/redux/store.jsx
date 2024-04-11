import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {userReducer} from './reducers/userReducer.jsx';
import {authReducer} from './reducers/authReducer.jsx'


const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
});

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

export default store;