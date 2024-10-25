import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { api } from "./api";
import { search } from "./search";
import { comments } from "./comments";
import { reactions } from "./reactions";
import { authorization } from "./authorization";
import { user } from "./user";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [search.reducerPath]: search.reducer,
    [comments.reducerPath]: comments.reducer,
    [reactions.reducerPath]: reactions.reducer,
    [authorization.reducerPath]: authorization.reducer,
    [user.reducerPath]: user.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
