import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./Utils/Slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  register: persistReducer(persistConfig, registerReducer),
});

const store = configureStore({
  reducer: rootReducer,
});
const persistor = persistStore(store);
export { store, persistor };
