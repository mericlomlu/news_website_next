import { configureStore } from "@reduxjs/toolkit";
import topHeadlinesReducer from "./reducers/topHeadlinesReducer";
import languageReducer from "./reducers/languageReducer";

export const store = configureStore({
  reducer: {
    topHeadlines: topHeadlinesReducer,
    language: languageReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
