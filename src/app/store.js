import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "../services/newsApi";
import categoryReducer from "../features/currCategory";
// import userReducer from "../features/auth";
export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    currCategory: categoryReducer,
    // user: userReducer,
    // player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});
