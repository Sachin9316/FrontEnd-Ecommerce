import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
  "data/fetchPosts",
  async (data, ThunkApi) => {
    const URL = `https://fakestoreapi.in/api/products?page=${data}&limit=50`;
    try {
      const response = await axios.get(URL);
      return response.data.products;
    } catch (error) {
      console.log(error);
      ThunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchProductCategories = createAsyncThunk(
  "data/fetchProductCategories",
  async (name, ThunkApi) => {
    const URL =
      name === " "
        ? `https://fakestoreapi.in/api/products/category`
        : `https://fakestoreapi.in/api/products/category?type=${name}&limit=30`;
    try {
      const response = await axios.get(URL);
      return name === " " ? response.data.categories : response.data.products;
    } catch (error) {
      console.log(error);
      ThunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  posts: [],
  categories: [],
  type: [],
  page: 1,
  input: "",
  loading: false,
  error: null,
};

export const FeatureSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    handleSearch: (state, action) => {
      state.input = action.payload;
    },
    handlePageNumber: (state, action) => {
      fetchPosts((state.page = action.payload));
    },
    handleNextPage: (state) => {
      if (state.page < Math.ceil(state.posts.length / 10)) {
        fetchPosts((state.page += 1));
      }
    },
    handlePrevPage: (state) => {
      if (state.page > 1) {
        fetchPosts((state.page -= 1));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })
      .addCase(fetchProductCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductCategories.fulfilled, (state, action) => {
        state.loading = false;
        // console.log(action.payload);
        if (action.payload.length <= 6) {
          state.categories = action.payload;
        } else {
          state.type = action.payload;
        }
      })
      .addCase(fetchProductCategories.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      });
  },
});

export const {
  handleSearch,
  handlePageNumber,
  handleNextPage,
  handlePrevPage,
} = FeatureSlice.actions;
export default FeatureSlice.reducer;
