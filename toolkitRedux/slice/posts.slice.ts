import {
    createSlice,
    createAsyncThunk
  } from '@reduxjs/toolkit';
  import {
    getAllPosts,
  } from '../../service/posts.service';
 
  
  export const getPostsThunk = createAsyncThunk(
    'posts/getPosts',
    getAllPosts
  )

  interface IPost {
    title: string;
    description: string;
    date: string;
    author: string;
  }
  
  interface IPosts {
    error: string | null | undefined,
    status: "loading" | "idle",
    posts: Array<IPost>,
    total: number;
    currentPage: number;
  }
  
  const initialState: IPosts = {
    error: null,
    status: "idle",
    total: 0,
    currentPage: 1,
    posts: [],
  };
  
  export const sliceWeeks = createSlice({
    name: "weeks",
    initialState,
    reducers: {
    //   refreshClose: (state) => {
    //     state.close = false
    //   },
    //   deleteError: (state) => {
    //     state.error = null
    //   },
    },
    extraReducers: (builder) => {
      
      builder.addCase(getPostsThunk.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(getPostsThunk.fulfilled, (state, action) => {
        state.status = 'idle';
        state.posts = action.payload.data;
        state.currentPage = action.payload.meta.current_page;
        state.total = action.payload.meta.total;
      });
      builder.addCase(getPostsThunk.rejected, (state, action) => {
        if (action) {
          state.status = 'idle';
          state.error = action.error.message;
        }
      });
    }
    
  });
  
  export const {  } = sliceWeeks.actions;
  export default sliceWeeks.reducer