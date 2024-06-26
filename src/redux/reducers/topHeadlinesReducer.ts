import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./../store";
import axios, { AxiosError } from "axios";

export const fetchTopHeadlines = createAsyncThunk(
  "fetchTopHeadlines",
  async (config: { method: string; url: string }, { rejectWithValue }) => {
    try {
      const response = await axios(config);
      return response;
    } catch (error: any) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError);
    }
  },
);

// Define a type for the slice state
type TopHeadlinesState = {
  topHeadlinesData: {}[];
  loading: boolean;
};

// Define the initial state using that type
const initialState: TopHeadlinesState = {
  topHeadlinesData: [],
  loading: false,
};

export const topHeadlinesSlice = createSlice({
  name: "topHeadlinesSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTopHeadlinesData: (state, action: PayloadAction<{}[]>) => {
      state.topHeadlinesData = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTopHeadlines.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTopHeadlines.fulfilled, (state, action) => {
      console.log(action.payload);
      state.topHeadlinesData = action.payload.data.articles;
      state.loading = false;
    });
    builder.addCase(fetchTopHeadlines.rejected, (state) => {
      state.topHeadlinesData = [];
      state.loading = false;
    });
  },
});

export const { setTopHeadlinesData } = topHeadlinesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTopHeadlines = (state: RootState) =>
  state.topHeadlines.topHeadlinesData;
export const selectTopHeadlinesLoading = (state: RootState) =>
  state.topHeadlines.loading;

export default topHeadlinesSlice.reducer;
