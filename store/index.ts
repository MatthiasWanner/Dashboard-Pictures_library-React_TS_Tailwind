import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user.slice';
import categoriesReducer from './categories.slice';

const customizedMiddleware = (
  getDefaultMiddleware: any //TODO: fix any type
) =>
  getDefaultMiddleware({
    serializableCheck: false,
  });

export const store = configureStore({
  reducer: { user: userReducer, categories: categoriesReducer },
  devTools: true,
  middleware: customizedMiddleware,
});

// Redux dependencies types

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
