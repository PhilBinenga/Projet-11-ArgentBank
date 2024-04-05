import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from './reducers/userReducer.jsx';


const rootReducer = combineReducers({
    user: userReducer,
});

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

export default store;