import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./reducers/languageReducer";
import newsReducer from "./reducers/newsReducer";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    language: languageReducer,
    news: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
