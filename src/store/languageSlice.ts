import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface LanguageState {
  languageState: string;
}

// Initial state
const initialState: LanguageState = {
  languageState: "ENG",
};

// Actual Slice
export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    // Action to set the authentication status
    setLanguageState(state, action) {
      state.languageState = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.language,
      };
    },
  },
});

export const { setLanguageState } = languageSlice.actions;

export const selectLanguageState = (state: AppState) =>
  state.language.languageState;

export default languageSlice.reducer;