import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./../store";

type LanguageState = {
  language: string;
};

const initialState: LanguageState = {
  language: "ENG",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const selectLanguage = (state: RootState) => state.language.language;

export default languageSlice.reducer;
