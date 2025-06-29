// Redux/StoreRedux.ts

import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./Feature/taskSlice";

import userReducer from "./Feature/userSlice";

export const store = configureStore({
  reducer: {
    todo: taskReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
