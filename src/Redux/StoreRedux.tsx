// Redux/StoreRedux.ts

import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./Feature/taskSlice";

import userReducer from "./Feature/userSlice";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    todo: taskReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
