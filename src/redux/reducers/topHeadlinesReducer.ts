import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./../store";
import axios from "axios";

export const fetchTopHeadlines = createAsyncThunk(
  "fetchTopHeadlines",
  async (config: { method: string; url: string }, { dispatch }) => {
    try {
      const response = await axios(config);
      dispatch(setTopHeadlinesData(response?.data?.articles));
    } catch (e: any) {
      return e?.response?.data;
    }
  },
);

// Define a type for the slice state
type TopHeadlinesState = {
  topHeadlinesData: {}[];
};

// Define the initial state using that type
const initialState: TopHeadlinesState = {
  topHeadlinesData: [],
};

export const topHeadlinesSlice = createSlice({
  name: "barGraphData",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTopHeadlinesData: (state, action: PayloadAction<{}[]>) => {
      state.topHeadlinesData = action.payload;
    },
  },
});

export const { setTopHeadlinesData } = topHeadlinesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTopHeadlines = (state: RootState) => state.topHeadlines;

export default topHeadlinesSlice.reducer;
