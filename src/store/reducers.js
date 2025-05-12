import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import rootPersistConfig from "./persistConfig";
import usersSlice from "./slices/usersSlice.js";
const reducers = combineReducers({
  users: usersSlice,
});

const persistedReducers = persistReducer(rootPersistConfig, reducers);

export default persistedReducers;
