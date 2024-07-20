import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./../store";
import axios, { AxiosError } from "axios";

type NewsState = {
  newsData: Article[] | null;
  loading: boolean;
  error: string;
};

const initialState: NewsState = {
  newsData: null,
  loading: false,
  error: "",
};

type Article = {
  author: string | null;
  content: string | null;
  description: string | null;
  publishedAt: string | null;
  source: { id: string | null; name: string | null };
  title: string | null;
  url: string | null;
  urlToImage: string | null;
};

export const fetchNews = createAsyncThunk(
  "fetchNews",
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

export const newsSlice = createSlice({
  name: "newsSlice",
  initialState,
  reducers: {
    setNewsData: (state, action: PayloadAction<Article[]>) => {
      state.newsData = action.payload;
    },
    resetNewsData: (state) => {
      state.newsData = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchNews.pending, (state) => {
      state.loading = true;
      state.newsData = null;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.newsData = action?.payload?.data?.articles;
      state.loading = false;
    });
    builder.addCase(fetchNews.rejected, (state) => {
      state.newsData = null;
      state.loading = false;
    });
  },
});

export const { setNewsData, resetNewsData } = newsSlice.actions;
export const selectNewsData = (state: RootState) => state.news.newsData;
export const selectNewsLoading = (state: RootState) => state.news.loading;
export const selectNewsError = (state: RootState) => state.news.error;
export default newsSlice.reducer;
