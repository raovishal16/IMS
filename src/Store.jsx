import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import registerReducer from "./Utils/Slice";
import branchReducer from "./Utils/BranchSlice";
import roleReducer from "./Utils/RoleSlice";
import courseReducer from "./Utils/CourseSlice";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["register"],
};

const rootReducer = combineReducers({
  register: registerReducer,
  branch: branchReducer,
  role: roleReducer,
  course: courseReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
