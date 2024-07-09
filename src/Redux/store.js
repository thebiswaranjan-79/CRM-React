import { configureStore } from "@reduxjs/toolkit";
import authSliceReducers from "./Slices/AuthSlice";


const store = configureStore({
  reducer: {
    auth: authSliceReducers,
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck : false}),
  devTools: true,
});

export default store;
