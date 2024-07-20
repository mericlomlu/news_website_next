import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./../store";
import axios, { AxiosError } from "axios";

// Define a type for the slice state
type TopHeadlinesState = {
  topHeadlinesData: Article[] | null;
  loading: boolean;
  error: string;
};

// Define the initial state using that type
const initialState: TopHeadlinesState = {
  topHeadlinesData: null,
  loading: false,
  error: "",
};

type Article = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: null; name: string };
  title: string;
  url: string;
  urlToImage: string;
};

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

export const topHeadlinesSlice = createSlice({
  name: "topHeadlinesSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTopHeadlinesData: (state, action: PayloadAction<Article[]>) => {
      state.topHeadlinesData = action.payload;
    },
    resetTopHeadlinesData: (state) => {
      state.topHeadlinesData = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTopHeadlines.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTopHeadlines.fulfilled, (state, action) => {
      state.topHeadlinesData = action.payload.data.articles;
      state.loading = false;
    });
    builder.addCase(fetchTopHeadlines.rejected, (state) => {
      state.topHeadlinesData = null;
      state.loading = false;
    });
  },
});

export const { setTopHeadlinesData, resetTopHeadlinesData } =
  topHeadlinesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTopHeadlines = (state: RootState) =>
  state.topHeadlines.topHeadlinesData;
export const selectTopHeadlinesLoading = (state: RootState) =>
  state.topHeadlines.loading;
export const selectTopHeadlinesError = (state: RootState) =>
  state?.topHeadlines?.error;
export default topHeadlinesSlice.reducer;
