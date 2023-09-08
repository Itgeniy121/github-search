import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface GitHubState {
  favourites: string[];
}
const localStorage_KEY = "lsk";

const initialState: GitHubState = {
  favourites: JSON.parse(localStorage.getItem(localStorage_KEY) ?? '[]'),
};

export const gitHubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    addToFavourites(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload);
      localStorage.setItem(localStorage_KEY, JSON.stringify(state.favourites));
    },
    removeFromFavourites(state, action: PayloadAction<string>) {
        state.favourites = state.favourites.filter(f => f !== action.payload)
        localStorage.setItem(localStorage_KEY, JSON.stringify(state.favourites));
    },
  },
});

export const gitHubActions = gitHubSlice.actions
export const gitHubReducer = gitHubSlice.reducer