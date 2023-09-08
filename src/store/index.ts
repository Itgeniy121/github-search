import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./forGitHub/githubApi";
import { gitHubReducer } from "./forGitHub/gitHub.slice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    github: gitHubReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
